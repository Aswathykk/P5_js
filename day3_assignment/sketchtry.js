let cols, rows;
let size = 100; // tile size
let imgs = [];
let grid = []; // 2D grid storing images
let flatGrid = []; // 1D version for movement
let frameDelay = 20; // speed of sliding
let counter = 0;

function preload() {
  // load 4 images to use as tiles
  imgs[0] = loadImage('images/Illustration29.jpg');
  imgs[1] = loadImage('images/Illustration30.jpg');
  imgs[2] = loadImage('images/Illustration31.jpg');
  imgs[3] = loadImage('images/Illustration30.jpg');
}

function setup() {
  createCanvas(600, 600);
  cols = width / size;
  rows = height / size;

  // fill the grid randomly
  for (let i = 0; i < cols * rows; i++) {
    flatGrid.push(random(imgs));
  }
}

function draw() {
  background(220);

  // draw the grid from flatGrid
  let index = 0;
  for (let y = 0; y < rows; y++) {
    // 🔁 alternate row direction for snake pattern
    if (y % 2 === 0) {
      // left to right
      for (let x = 0; x < cols; x++) {
        image(flatGrid[index], x * size, y * size, size, size);
        index++;
      }
    } else {
      // right to left
      for (let x = cols - 1; x >= 0; x--) {
        image(flatGrid[index], x * size, y * size, size, size);
        index++;
      }
    }
  }

  // Every few frames → move first tile to the end
  if (frameCount % frameDelay === 0) {
    let first = flatGrid.shift(); // remove first element
    flatGrid.push(first); // add it to the end
  }
}