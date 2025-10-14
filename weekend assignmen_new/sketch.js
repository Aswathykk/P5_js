let officeImages = [], lightImages = [], cityImages = [], earphoneImages = [], walkingImage,trainImage;

let currentOffice = 0;
let gridIsActive = false;
let cityIsActive = false;
let gridSize = 200;
let lastGridChange = 0;
let lightGrid = [];
let walkX = 50;
let walkY;
let walkFrame = 0;
let walkSpeed = 2;
let walkAnimSpeed = 5;
let cityFrame = 0;
let nextCityFrame = 1;
let cityAlpha = 0;
let cityFadeSpeed = 5;

function preload() {
  //office
  officeImages[0] = loadImage('images/office1.png');
  officeImages[1] = loadImage('images/office2.png');

  // ight pattern images
  lightImages[0] = loadImage('images/light1.png');
  lightImages[1] = loadImage('images/light2.png');
  lightImages[2] = loadImage('images/light3.png');

  // Walking sprite 
  walkingImage = loadImage('images/walking.png');

  // City 
  cityImages[0] = loadImage('images/city1.png');
  cityImages[1] = loadImage('images/city2.png');
  cityImages[2] = loadImage('images/city3.png');

  // Train
  trainImage = loadImage('images/travel dark.png');

  // Earphone
  earphoneImages[0] = loadImage('images/earphone1.png');
  earphoneImages[1] = loadImage('images/earphone2.png');
  earphoneImages[2] = loadImage('images/earphone3.png');
  earphoneImages[3] = loadImage('images/earphone5.png');
}

function setup() {
  createCanvas(1000, 1000);
  imageMode(CENTER);

  walkY = height - gridSize / 2; // Start near bottom of screen
}

function draw() {
  background(255);

  if (!gridIsActive) {
    showOfficeScene();
  }
  else if (!cityIsActive) {
    showLightGrid();
    showWalkingPerson();

    if (walkX > width + 300) {
      cityIsActive = true;
      cityAlpha = 0;
    }
  }
  else {
    showCityScene();
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    if (!gridIsActive) {
      currentOffice++;
      if (currentOffice >= officeImages.length) {
        gridIsActive = true;
        currentOffice = 0; 
        lastGridChange = millis();
        walkX = 50; 
        walkY = height - gridSize / 2;

        initializeLightGrid();
      }
    }
  }
}

document.oncontextmenu = () => false; // Disable right-click menu

function showOfficeScene() {
  let img = officeImages[currentOffice];
  if (img) {

    image(img, width / 2, height / 2, width, height);

  }
}

function initializeLightGrid() {
  let cols = ceil(width / gridSize);
  let rows = ceil(height / gridSize);
  lightGrid = [];
  for (let i = 0; i < cols; i++) {
    lightGrid[i] = [];
    for (let j = 0; j < rows; j++) {
      lightGrid[i][j] = floor(random(lightImages.length));
    }
  }
}

function showLightGrid() {
  let cols = ceil(width / gridSize);
  let rows = ceil(height / gridSize);

  if (millis() - lastGridChange > 2000) {  // eevry 2s
    lastGridChange = millis();
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        lightGrid[i][j] = floor(random(lightImages.length));
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = lightGrid[i][j];
      if (index !== undefined) {
        image(
          lightImages[index],
          i * gridSize + gridSize / 2,
          j * gridSize + gridSize / 2,
          gridSize,
          gridSize
        );
      }
    }
  }
}

function showWalkingPerson() {

  if (keyIsDown(RIGHT_ARROW)) {
    walkX += walkSpeed;
    if (frameCount % walkAnimSpeed === 0) {
      walkFrame = (walkFrame + 1) % 2;
    }
  } else {
    walkFrame = 0;
  }

  let frameWidth = walkingImage.width / 2;
  let sx = walkFrame * frameWidth;

  let singleFrame = walkingImage.get(sx, 0, frameWidth, walkingImage.height);
  image(singleFrame, walkX, walkY, 600, 600);
}

function showCityScene() {
 
  image(cityImages[cityFrame], width / 2, height / 2, width, height);

  push();
  tint(255, cityAlpha);
  image(cityImages[nextCityFrame], width / 2, height / 2, width, height);
  pop();

  cityAlpha += cityFadeSpeed;
  if (cityAlpha >= 255) {
    cityFrame = nextCityFrame;
    nextCityFrame = (nextCityFrame + 1) % cityImages.length;
    cityAlpha = 0;
  }

  image(trainImage, width / 2, height / 2, width, height);
}
