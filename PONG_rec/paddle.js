class Paddle {
  constructor(x, y, w, h, s) { this.x = x; this.y = y; this.width = w; this.height = h; this.speed = s; }
  show() {
    // 3D paddle with gradient
    for (let i = 0; i < this.width; i++) {
      let inter = map(i, 0, this.width, 0, 1);
      stroke(lerpColor(color(255), color(180), inter));
      line(this.x + i, this.y, this.x + i, this.y + this.height);
    }
    noStroke();
  }
  moveUp() { if (this.y > 0) this.y -= this.speed; }
  moveDown() { if (this.y < height - this.height) this.y += this.speed; }
}

// --- GRADIENT FUNCTION ---
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    stroke(lerpColor(c1, c2, inter));
    line(x, i, x + w, i);
  }
}