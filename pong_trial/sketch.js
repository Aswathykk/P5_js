let army = [];
let paddle;
let projectile;

function setup() {
  createCanvas(800, 600);

  // Setup paddle
  paddle = {
    x: width / 2 - 20,
    y: height - 120,
    w: 20,
    h: 80
  };

  // Setup army
  setupArmy();

  // Setup projectile
  projectile = {
    x: width / 2,
    y: 50,
    vx: 3,
    vy: 3,
    radius: 10
  };
}

function setupArmy() {
  let cols = 10;
  let rows = 2;
  let w = 30;
  let h = 60;

  army = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      army.push({
        x: 50 + c * (w + 10),
        y: height - (r + 1) * (h + 5) - 50,
        w: w,
        h: h,
        type: (r % 2 == 0) ? 'cola' : 'pepsi',
        alive: true
      });
    }
  }
}

function drawCan(x, y, w, h, color1, color2) {
  // Can body
  fill(color1);
  rect(x, y, w, h, 5);

  // Top of the can
  fill(color2);
  ellipse(x + w / 2, y, w, w / 3);

  // Bottom of the can
  fill(color2);
  ellipse(x + w / 2, y + h, w, w / 4);

  // Optional stripe/logo
  fill(255);
  rect(x + w * 0.2, y + h * 0.4, w * 0.6, h * 0.2, 2);
}

function drawArmy() {
  for (let s of army) {
    if (!s.alive) continue;
    if (s.type === 'cola') {
      drawCan(s.x, s.y, s.w, s.h, color(255, 0, 0), color(200, 0, 0));
    } else {
      drawCan(s.x, s.y, s.w, s.h, color(0, 0, 255), color(0, 0, 200));
    }
  }
}

function drawPaddle() {
  fill(0, 200, 0);
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}

function drawProjectile() {
  fill(255, 255, 0);
  ellipse(projectile.x, projectile.y, projectile.radius * 2);

  // Move
  projectile.x += projectile.vx;
  projectile.y += projectile.vy;

  // Wall bounce
  if (projectile.x < 0 || projectile.x > width) projectile.vx *= -1;
  if (projectile.y < 0) projectile.vy *= -1;

  // Paddle collision
  if (projectile.y + projectile.radius > paddle.y &&
      projectile.y - projectile.radius < paddle.y + paddle.h &&
      projectile.x > paddle.x && projectile.x < paddle.x + paddle.w) {
    projectile.vy *= -1; // Reflect
  }

  // Army collision
  for (let s of army) {
    if (s.alive &&
        projectile.x > s.x && projectile.x < s.x + s.w &&
        projectile.y > s.y && projectile.y < s.y + s.h) {
      s.alive = false; // Destroy soldier
      projectile.vy *= -1; // Bounce back
      break; // Only hit one soldier at a time
    }
  }
}

function draw() {
  background(220);

  drawArmy();
  drawPaddle();
  drawProjectile();
}

// Paddle follows mouse vertically
function mouseMoved() {
  paddle.y = constrain(mouseY - paddle.h / 2, 0, height - paddle.h);
}
