// compact refactor: intro (41..43) -> fade -> sprite-sheet interactive
const SPRITE_SHEET = 'images/illustration40.png';
const INTRO_RANGE = [41, 43]; // inclusive
const COLS = 4, ROWS = 5;     // sprite sheet grid (cols, rows)

// settings
const S = {
  introDur: 60,    // frames per intro image
  fadeStep: 6,
  animSpeed: 6,    // frames per sprite frame while moving
  moveSpeed: 3,
  charWidthPct: 0.10,
  bottomMargin: 20
};

// resources & state
let introImgs = [];
let sheet;
let sprites = [];     // sprites[row][col]
let state = 'intro';  // 'intro'|'fade'|'play'
let introIndex = 0, fadeA = 0, animFrame = 0, frameCnt = 0;

let char = { x: 0, y: 0, w: 0, h: 0, row: 0, col: 0, moving: false, lastRow: 0 };

// row mapping (as you requested)
const ROW = { right: 0, up: 1, left: 2, down: 3 };

function preload() {
  for (let i = INTRO_RANGE[0]; i <= INTRO_RANGE[1]; i++) {
    introImgs.push(loadImage(`images/illustration${i}.png`));
  }
  sheet = loadImage(SPRITE_SHEET);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  imageMode(CENTER);
  sliceSheet();
  setupChar();
}

function draw() {
  background(0);
  frameCnt++;

  if (state === 'intro') runIntro();
  else if (state === 'fade') runFade();
  else runPlay();
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  setupChar();
}

/* -------- Intro / Fade -------- */
function runIntro() {
  drawFull(introImgs[clamp(introIndex, 0, introImgs.length - 1)]);
  if (frameCnt % S.introDur === 0) {
    introIndex++;
    if (introIndex >= introImgs.length) {
      state = 'fade';
      frameCnt = 0;
    }
  }
}

function runFade() {
  drawFull(introImgs[introImgs.length - 1]);
  fadeA = clamp(fadeA + S.fadeStep, 0, 255);
  fill(0, fadeA); rect(0, 0, width, height);
  if (fadeA === 255) {
    state = 'play';
    frameCnt = 0;
    // position char bottom-center
    char.x = width / 2;
    char.y = height - char.h / 2 - S.bottomMargin;
    char.col = 0; char.moving = false;
  }
}

/* -------- Play (interactive) -------- */
function runPlay() {
  // black background
  background(0);

  // detect direction keys (priority: right, left, up, down)
  const dir = keyIsDown(RIGHT_ARROW) ? 'right'
            : keyIsDown(LEFT_ARROW)  ? 'left'
            : keyIsDown(UP_ARROW)    ? 'up'
            : keyIsDown(DOWN_ARROW)  ? 'down'
            : null;

  if (dir) {
    char.moving = true;
    char.row = ROW[dir];
    char.lastRow = char.row;
    // advance animation occasionally
    if (frameCnt % S.animSpeed === 0) char.col = (char.col + 1) % COLS;
    // move
    if (dir === 'right') char.x += S.moveSpeed;
    if (dir === 'left')  char.x -= S.moveSpeed;
    if (dir === 'up')    char.y -= S.moveSpeed;
    if (dir === 'down')  char.y += S.moveSpeed;
  } else {
    char.moving = false;
    char.col = 0; // idle frame
    char.row = char.lastRow; // keep facing last direction
  }

  // keep inside canvas
  char.x = clamp(char.x, char.w / 2, width - char.w / 2);
  char.y = clamp(char.y, char.h / 2, height - char.h / 2);

  // draw chosen frame from sprites
  const img = sprites[char.row] && sprites[char.row][char.col];
  if (img) image(img, char.x, char.y, char.w, char.h);
}

/* -------- Helpers -------- */
function drawFull(img) {
  if (!img) return;
  image(img, width / 2, height / 2, width, height);
}

function sliceSheet() {
  if (!sheet) return;
  const cellW = floor(sheet.width / COLS);
  const cellH = floor(sheet.height / ROWS);
  sprites = Array.from({length: ROWS}, () => []);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      sprites[r][c] = sheet.get(c * cellW, r * cellH, cellW, cellH);
    }
  }
}

function setupChar() {
  char.w = max(24, floor(width * S.charWidthPct));
  const cellW = floor(sheet.width / COLS);
  const cellH = floor(sheet.height / ROWS);
  char.h = floor(char.w * (cellH / cellW));
  char.x = width / 2;
  char.y = height - char.h / 2 - S.bottomMargin;
  char.row = ROW.right; char.col = 0; char.lastRow = ROW.right;
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
