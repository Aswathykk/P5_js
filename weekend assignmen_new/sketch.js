let office = [], light = [], city = [], earphone = [];
let walking, train;

let index = 0;
let gridActive = false, cityActive = false;
const gridSize = 200;
let lastChangeTime = 0;

// ---------------- Walking sprite ----------------
const WALK = { x: 50, y: 0, frame: 0, speed: 2, animSpeed: 5 };

// ---------------- City animation ----------------
const CITY = { frame: 0, nextFrame: 1, alpha: 0, fadeSpeed: 5 };

let lightGrid = [];

function preload() {
  office = [loadImage('images/office1.png'), loadImage('images/office2.png')];
  light = [loadImage('images/light1.png'), loadImage('images/light2.png'), loadImage('images/light3.png')];
  walking = loadImage('images/walking.png'); // 1 row, 2 cols
  city = [loadImage('images/city1.png'), loadImage('images/city2.png'), loadImage('images/city3.png')];
  train = loadImage('images/travel dark.png');
  earphone = [loadImage('images/earphone1.png'), loadImage('images/earphone2.png'), loadImage('images/earphone3.png'),loadImage('images/earphone5.png')];
  
}

function setup() {
  createCanvas(1000, 1000);
  imageMode(CENTER);
  WALK.y = height - gridSize / 2; // start bottom left
}

function draw() {
  background(255);

  if (!gridActive) {
    drawImageCenter(office[index], width, height);
  } else if (!cityActive) {
    drawLightGrid();
    drawWalking();

    if (WALK.x > width + 300) cityActive = true;
  } else {
    drawCityAnimation();
  }
}

// ---------------- Mouse ----------------
function mousePressed() {
  if (mouseButton === RIGHT) {
    index = (index + 1) % office.length;
    if (index === 0) {
      gridActive = true;
      lastChangeTime = millis();
    }
  }
}
document.oncontextmenu = () => false;

// ---------------- Helpers ----------------
function drawImageCenter(img, w, h) {
  if (img) image(img, width / 2, height / 2, w, h);
}

// ---------------- Light grid ----------------
function drawLightGrid() {
  let cols = ceil(width / gridSize), rows = ceil(height / gridSize);

  if (millis() - lastChangeTime > 2000) {
    lastChangeTime = millis();
    for (let i = 0; i < cols; i++) {
      lightGrid[i] = [];
      for (let j = 0; j < rows; j++) lightGrid[i][j] = floor(random(light.length));
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let imgIdx = lightGrid[i]?.[j] ?? 0;
      image(light[imgIdx], i * gridSize + gridSize / 2, j * gridSize + gridSize / 2, gridSize, gridSize);
    }
  }
}

// ---------------- Walking sprite ----------------
function drawWalking() {
  if (keyIsDown(RIGHT_ARROW)) {
    WALK.x += WALK.speed;
    if (frameCount % WALK.animSpeed === 0) WALK.frame = (WALK.frame + 1) % 2;
  } else WALK.frame = 0;

  let sx = WALK.frame * walking.width / 2;
  let sy = 0;
  image(walking.get(sx, sy, walking.width / 2, walking.height), WALK.x, WALK.y, 600, 600);
}

// ---------------- City animation ----------------
function drawCityAnimation() {
  drawImageCenter(city[CITY.frame], width, height);
  push();
  tint(255, CITY.alpha);
  drawImageCenter(city[CITY.nextFrame], width, height);
  pop();

  CITY.alpha += CITY.fadeSpeed;
  if (CITY.alpha >= 255) {
    CITY.frame = CITY.nextFrame;
    CITY.nextFrame = (CITY.nextFrame + 1) % city.length;
    CITY.alpha = 0;
  }

  drawImageCenter(train, width, height); // overlay train
}
