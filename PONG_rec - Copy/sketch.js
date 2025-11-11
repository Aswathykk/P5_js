let gBall;
let lPaddle, rPaddle;
let player1 = 0, player2 = 0;

let started = false;
let gameOver = false;

let rotationAngle = 0;
let rotationSpeed = 0.008;

let rectW, rectH;
let hitSound;

function preload() {
  hitSound = loadSound("assets/2.mp3");  // sound when paddle hits ball
  //bgMusic = loadSound("assets/bg.mp3");     // background loop music
}
function setup() {
  createCanvas(innerWidth, innerHeight);
    // Rectangle dimensions relative to screen
  rectW = width * 0.4;  // 60% of screen width
  rectH = height * 0.4; // 40% of screen height

  gBall = new Ball(0, 0, 5, 3);

  let pWidth = 10, pHeight = 80;
  lPaddle = new Paddle(-rectW / 2 + pWidth / 2 + 10, 0, pWidth, pHeight, 10);
  rPaddle = new Paddle(rectW / 2 - pWidth / 2 - 10, 0, pWidth, pHeight, 10);
}

function draw() {
  background(30);

  if (!started) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("CLICK TO START", width / 2, height / 2);
    return;
  }
  if (gameOver) {
    fill(255, 215, 0);
    textAlign(CENTER, CENTER);
    textSize(48);
    let winner =
      player1 >= 15
        ? "🏆 Player 1 Wins!"
        : "🏆 Player 2 Wins!";
    text(winner, width / 2, height / 2);
    textSize(24);
    fill(200);
    text("Click to Restart", width / 2, height / 2 + 60);
    return;
  }

  ////main game logic
  rotationAngle += rotationSpeed;

  push();
  translate(width / 2, height / 2);
  rotate(rotationAngle);

  // Rectangle boundary
  noFill();
  stroke(255);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, rectW, rectH);

  // === Ball behaviour ===
  gBall.move();
  gBall.checkCollisionWall(); // Reflect on long walls
  let hit = gBall.checkCollisionPaddle(lPaddle, rPaddle);
  if (hit && hitSound) hitSound.play();
  // Missed? → vanish + score
  if (gBall.checkOutOfBounds()) {
    if (gBall.x < -rectW / 2) player2++;
    if (gBall.x > rectW / 2) player1++;
    // Reverse the rotation direction
    rotationSpeed *= -1;
    gBall.reset();

        // === Check win condition ===
    if (player1 >= 10 || player2 >= 10) {
      gameOver = true;
  
    }
  }

  // Draw ball + paddles
  gBall.show();
  lPaddle.show();
  rPaddle.show();

  pop();

  // Paddle control
  if (keyIsDown(87)) lPaddle.moveUp();
  if (keyIsDown(83)) lPaddle.moveDown();
  if (keyIsDown(UP_ARROW)) rPaddle.moveUp();
  if (keyIsDown(DOWN_ARROW)) rPaddle.moveDown();

  // Show score
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text(`Player 1: ${player1}    Player 2: ${player2}`, width / 2, 40);
}

function mousePressed() {
  if (!started) {
    // Start game first time
    started = true;
    gameOver = false;
    player1 = 0;
    player2 = 0;
    gBall.reset();
    rotationSpeed = 0.008;
    if (bgMusic && !bgMusic.isPlaying()) bgMusic.loop();
  } 
  else if (gameOver) {
    // Restart after win
    player1 = 0;
    player2 = 0;
    gameOver = false;
    started = true; // allow game to continue
    rotationSpeed = 0.008;
    gBall.reset();
    if (bgMusic && !bgMusic.isPlaying()) bgMusic.loop();
  }
}

