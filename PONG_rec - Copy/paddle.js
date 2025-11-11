// ====== Paddle class ======
class Paddle {
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.speed = speed;
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    if (this.y - this.height / 2 > -rectH / 2 + 10) this.y -= this.speed;
  }

  moveDown() {
    if (this.y + this.height / 2 < rectH / 2 - 10) this.y += this.speed;
  }
}
