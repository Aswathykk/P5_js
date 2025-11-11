class PepsiBottle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ellipseH = w / 3; // top/bottom ellipses
  }

  show() {
    push();
    noStroke();

    // body
    fill(0, 0, 255);
    rect(this.x, this.y + this.ellipseH / 2, this.w, this.h - this.ellipseH, this.w / 5);

    // top ellipse (red cap)
    fill(220);
    ellipse(this.x + this.w / 2, this.y + this.ellipseH / 2 + 2, this.w * 0.95, this.ellipseH * 0.55);

    // label
    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text("PEPSI", this.x + this.w / 2, this.y + this.h / 2 + 5);

    pop();
  }
}
