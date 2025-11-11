class Ball {
  constructor(x, y, xSpeed, ySpeed, firedByRight) {
    this.x = x; this.y = y; this.xSpeed = xSpeed; this.ySpeed = ySpeed;
    this.size = 20; this.firedByRight = firedByRight; this.hasBounced = false;
  }
  show() {
    noStroke();
    fill(255, 255, 100);
    ellipse(this.x, this.y, this.size);
    // glow
    fill(255, 255, 100, 80);
    ellipse(this.x, this.y, this.size * 1.5);
  }
  move() { this.x += this.xSpeed; this.y += this.ySpeed; }
  checkCollisionWall() {
    if (this.y < this.size / 2 || this.y > height - this.size / 2) {
      this.ySpeed *= -1; wallCollisions++;
    }
  }
  checkWinner() { return (this.x < 0) ? 2 : (this.x > width) ? 1 : 0; }

 hitsCan(can) {
  return (
    this.x + this.size / 2 > can.x &&
    this.x - this.size / 2 < can.x + can.w &&
    this.y + this.size / 2 > can.y &&
    this.y - this.size / 2 < can.y + can.h
  );
}


  checkCollisionPaddle(paddle, isLeft) {
    if (this.x < paddle.x + paddle.width && this.x > paddle.x &&
        this.y < paddle.y + paddle.height && this.y > paddle.y) {
      pingSound.play();
      let hittingOriginal = (this.firedByRight && !isLeft) || (!this.firedByRight && isLeft);
      let hittingOpposite = !hittingOriginal;
      if (hittingOpposite && !this.hasBounced) { this.hasBounced = true; this.xSpeed *= -1; }
      else if (hittingOriginal && this.hasBounced) return "vanish";
    }
    return "ok";
  }
}