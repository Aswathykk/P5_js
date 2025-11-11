// ====== Ball class ======
class Ball {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = 20;
    this.active = true;
  }

  show() {
    if (!this.active) return;
    fill(255, 255, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  move() {
    if (!this.active) return;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollisionWall() {
    if (!this.active) return;
    // Bounce on top or bottom walls
    if (this.y + this.size / 2 > rectH / 2 || this.y - this.size / 2 < -rectH / 2) {
      this.ySpeed *= -1;
    }
  }

checkCollisionPaddle(leftPaddle, rightPaddle) {
  if (!this.active) return;

  // Left paddle
  if (
    this.x - this.size/2 < leftPaddle.x + leftPaddle.width/2 &&
    this.x + this.size/2 > leftPaddle.x - leftPaddle.width/2 &&
    this.y + this.size/2 > leftPaddle.y - leftPaddle.height/2 &&
    this.y - this.size/2 < leftPaddle.y + leftPaddle.height/2
  ) {
    this.xSpeed *= -1;

    // Add paddle motion influence
    this.ySpeed += (this.y - leftPaddle.y) * 0.05;
    this.xSpeed *= 1.05; // small speed-up on every hit

    return true;
  }

  // Right paddle
  if (
    this.x + this.size/2 > rightPaddle.x - rightPaddle.width/2 &&
    this.x - this.size/2 < rightPaddle.x + rightPaddle.width/2 &&
    this.y + this.size/2 > rightPaddle.y - rightPaddle.height/2 &&
    this.y - this.size/2 < rightPaddle.y + rightPaddle.height/2
  ) {
    this.xSpeed *= -1;

    // Add paddle motion influence
    this.ySpeed += (this.y - rightPaddle.y) * 0.05;
    this.xSpeed *= 1.05; // small speed-up on every hit

    return true;
  }

  return false;
}


  checkOutOfBounds() {
    if (this.x < -rectW / 2 || this.x > rectW / 2) {
      this.active = false;
      return true;
    }
    return false;
  }

  reset() {
    this.x = 0;
    this.y = 0;
    this.active = true;
  // Randomize direction (mostly horizontal, sometimes slight vertical)
  let dir = random([-1, 1]);
  this.xSpeed = 5 * dir;           // strong horizontal motion
  this.ySpeed = random(-2, 2);     // small random vertical offset
  }
}