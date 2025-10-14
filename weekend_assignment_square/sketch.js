let x, y;
let speed1 = 7, speed2 = 1;

// wall1
let sq1Xleft, sq1Yleft, sq1Xtop, sq1Ytop, sq1Xright, sq1Yright, sq1Xlow, sq1Ylow;
let sq1X, sq1Y, sq1Flag = 0;

// wall2
let sq2Xleft, sq2Yleft, sq2Xtop, sq2Ytop, sq2Xright, sq2Yright, sq2Xlow, sq2Ylow;
let sq2X, sq2Y, sq2Flag = 0;

let wasTouchingLeft = false; // tracks whether we were touching left last frame
let wasTouchingRight = false;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);

  // player start
  x = width / 2;
  y = height / 2;

  // frame centers
  sq1X = width / 2;
  sq1Y = height / 2;

  let a = width / 2;
  let b = height / 2;

  sq1Xleft  = sq2Xleft  = a;
  sq1Yleft  = sq2Yleft  = b;
  sq1Xtop   = sq2Xtop   = a;
  sq1Ytop   = sq2Ytop   = b;
  sq1Xright = sq2Xright = a;
  sq1Yright = sq2Yright = b;
  sq1Xlow   = sq2Xlow   = a;
  sq1Ylow   = sq2Ylow   = b;
}

function draw() {
  background(220);

  // If left wall of frame1 has been hit more than 3 times, slowly move it down
  if (sq1Flag > 3) {
    sq1Yleft += 1; // only left wall of frame1 falls
    sq1Yright += 5; // only left wall of frame1 falls
    sq1Ytop += 3; // only left wall of frame1 falls
    sq1Ylow += 4; // only left wall of frame1 falls
  }
  if (sq2Flag > 3) {
    sq2Yleft += 1; // only left wall of frame1 falls
    sq2Yright += 5;
  }

  // draw frame1 (outer)
  fill("black");
  rect(sq1Xleft - 100, sq1Yleft, 10, 150); // left wall
  rect(sq1Xright + 100, sq1Yright, 10, 150); // right wall
  rect(sq1Xtop, sq1Ytop - 95, 150, 10); // top
  rect(sq1Xlow, sq1Ylow + 95, 150, 10); // bottom

  // draw frame2 (inner) offset visually from frame1
  fill("black");
  rect(sq2Xleft - 150, sq2Yleft, 10, 350); // left wall (bigger frame2 visuals)
  rect(sq2Xright + 150, sq2Yright, 10, 350); // right
  rect(sq2Xtop, sq2Ytop - 145, 350, 10); // top
  rect(sq2Xlow, sq2Ylow + 145, 350, 10); // bottom

  // draw & move the small square
  movingSquare();
}

function movingSquare() {
  fill("black");
  rect(x, y, 50, 50);

  // Base collision limits
  let leftLimit  = sq1Xleft - 70;
  let rightLimit = sq1Xright + 70;
  let topLimit   = sq1Ytop - 65;
  let bottomLimit= sq1Ylow + 65;

  // Expand limits if flag > 3
  if (sq1Flag > 3) {
    leftLimit  -= 45;
    rightLimit += 45;
    topLimit   -= 45;
    bottomLimit+= 45;
  }
///////////////collision logic by chatgpt until line 98
  // Use leftLimit for touch detection
  let touchingLeft = x - 25 <= leftLimit;//chat
  // Increment flag only on first touch
  if (touchingLeft && !wasTouchingLeft) {   //chat
    sq1Flag += 1;
    console.log('sq1Flag incremented:', sq1Flag);
    if(sq1Flag > 3)
    {
      sq2Flag +=1;
    }
  }
  wasTouchingLeft = touchingLeft;  //chat
  
  let touchingRight = x + 25 >= rightLimit;
   // Increment flag only on first touch
  if (touchingRight && !wasTouchingRight) {   
    sq1Flag += 1;
    console.log('sq1Flag incremented:', sq1Flag);
    if(sq1Flag > 3)
    {
      sq2Flag +=1;
    }
  }
  wasTouchingRight = touchingRight;  


  // Horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    let nextX = x - speed1;
    if (nextX < leftLimit) {
      x += 70; // small bounce back
    } else {
      x -= speed2;
    }
  } else if (keyIsDown(RIGHT_ARROW)) {
    let nextX = x + speed1;
    if (nextX > rightLimit) {
      x -= 70; // small bounce back
    } else {
      x += speed2;
    }
  }

  // Vertical movement
  if (keyIsDown(UP_ARROW)) {
    let nextY = y - speed1;
    if (nextY < topLimit) {
      y += 70;
    } else {
      y -= speed2;
    }
  } else if (keyIsDown(DOWN_ARROW)) {
    let nextY = y + speed1;
    if (nextY > bottomLimit) {
      y -= 70;
    } else {
      y += speed2;
    }
  }
}
