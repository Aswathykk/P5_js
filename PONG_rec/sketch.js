// --- GLOBALS ---
let gBall = null;
let lPaddle, rPaddle;
let player1 = 0, player2 = 0;
let wallCollisions = 0;
let pingSound, bgMusic;
let started = false;
let currentTurn = "right";

let colaCans = [];
let pepsiBottles = [];

// --- PRELOAD ---
function preload() {
  soundFormats('mp3', 'wav');
  pingSound = loadSound('assets/2.mp3');
  bgMusic = loadSound('assets/long2.mp3');
}

// --- SETUP ---
function setup() {
  createCanvas(1200, 700);
  textFont('Arial');
  textAlign(CENTER, CENTER);
  noStroke();

  let pWidth = 15, pHeight = 100;
  lPaddle = new Paddle(150, height / 2 - pHeight / 2, pWidth, pHeight, 10);
  rPaddle = new Paddle(width - pWidth - 150, height / 2 - pHeight / 2, pWidth, pHeight, 10);

  createColaCans();
  createPepsiBottles();
}

// --- CANS & BOTTLES ---
function createColaCans() {
  let spacing = 5; // less spacing between rows
  let startX = rPaddle.x + rPaddle.width + spacing;
  let endX = width - spacing;
  let totalWidth = endX - startX;

  let cols = 3;
  let canWidth = (totalWidth - (cols - 1) * spacing) / cols;
  let canHeight = 100; // taller cans

  let rows = 8;
  let startY = 10;

  colaCans = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = startX + col * (canWidth + spacing);
      let y = startY + row * (canHeight + spacing); // smaller spacing
      colaCans.push(new ColaCan(x, y, canWidth, canHeight));
    }
  }
}



function createPepsiBottles() {
  let spacing = 5; // smaller spacing
  let endX = lPaddle.x - spacing;
  let startX = spacing;
  let totalWidth = endX - startX;

  let cols = 3;
  let bottleWidth = (totalWidth - (cols - 1) * spacing) / cols;
  let bottleHeight = 100; // taller

  let rows = 8;
  let startY = 10;

  pepsiBottles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = startX + col * (bottleWidth + spacing);
      let y = startY + row * (bottleHeight + spacing); // smaller spacing
      pepsiBottles.push(new PepsiBottle(x, y, bottleWidth, bottleHeight));
    }
  }
}

// --- DRAW LOOP ---
function draw() {
  // gradient background
  setGradient(0, 0, width, height, color(10, 10, 50), color(40, 0, 100));

  if (!started) {
    fill(255);
    textSize(36);
    text("CLICK TO START", width / 2, height / 2);
    textSize(18);
    text("(Click anywhere to enable sound)", width / 2, height / 2 + 40);
    return;
  }

  // if (wallCollisions > 3) background(220, 0, 0);

  // bottles & cans
  for (let bottle of pepsiBottles) bottle.show();
  for (let can of colaCans) can.show();

  // ball update
  if (gBall) {
    gBall.move();
    gBall.checkCollisionWall();
    gBall.show();

    let result;
    if (gBall.xSpeed < 0) result = gBall.checkCollisionPaddle(lPaddle, true);
    else result = gBall.checkCollisionPaddle(rPaddle, false);

    if (result === "vanish") gBall = null;

    if (gBall) {
      for (let i = colaCans.length - 1; i >= 0; i--) {
        if (gBall.hitsCan(colaCans[i])) {
          colaCans.splice(i, 1);
          gBall = null;
          break;
        }
      }
    }

    if (gBall) {
      for (let i = pepsiBottles.length - 1; i >= 0; i--) {
        if (gBall.hitsCan(pepsiBottles[i])) {
          pepsiBottles.splice(i, 1);
          gBall = null;
          break;
        }
      }
    }

    if (gBall) {
      let point = gBall.checkWinner();
      if (point === 1) { player1++; gBall = null; }
      else if (point === 2) { player2++; gBall = null; }
    }
  }

  // paddles
  lPaddle.show();
  rPaddle.show();

  // movement
  if (keyIsDown(UP_ARROW)) rPaddle.moveUp();
  if (keyIsDown(DOWN_ARROW)) rPaddle.moveDown();
  if (keyIsDown(87)) lPaddle.moveUp();
  if (keyIsDown(83)) lPaddle.moveDown();

  // scores
  fill(255);
  textSize(24);
  text(`Player 1: ${player1}`, width / 4, 30);
  text(`Player 2: ${player2}`, (3 * width) / 4, 30);
}

// --- START ---
function mousePressed() {
  if (getAudioContext().state !== 'running') getAudioContext().resume();
  if (!bgMusic.isPlaying()) bgMusic.loop();
  started = true;
}

// --- SHOOT BALL ---
function keyPressed() {
  if (keyCode === 32 && !gBall) {
    if (currentTurn === "right") {
      gBall = new Ball(rPaddle.x - 10, rPaddle.y + rPaddle.height / 2, -5, random(-3, 3), true);
      currentTurn = "left";
    } else {
      gBall = new Ball(lPaddle.x + lPaddle.width + 10, lPaddle.y + lPaddle.height / 2, 5, random(-3, 3), false);
      currentTurn = "right";
    }
  }
}