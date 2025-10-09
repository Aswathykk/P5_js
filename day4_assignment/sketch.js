let img1, img4, img5, img6;
let size = 80;
let graphicsFilter;
// let pg; 

const colorModes = [
  { name: 'Red',    rgb: [255, 0,   0  ] },
  { name: 'Yellow', rgb: [255, 255, 0  ] },
  { name: 'Green',  rgb: [0,   255, 0  ] },
  { name: 'Blue',   rgb: [0,   0,   255] },
  { name: 'Purple', rgb: [160, 0,   255] },
  { name: 'Cyan',   rgb: [0,   255, 255] },
  { name: 'Orange', rgb: [255, 140, 0  ] },
  { name: 'Pink',   rgb: [255, 105, 180] },
];    //why const??
let currentColor = 0;

function preload() {
  g0 = loadImage('images/Illustration20a.jpg');
 //  img2 = loadImage('images/Illustration22a.jpg');
 //  img3 = loadImage('images/Illustration23a.jpg');
  g1 = loadImage('images/Illustration19a.jpg');
  g2 = loadImage('images/Illustration23a.jpg');
  g3 = loadImage('images/Illustration24a.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  graphicsFilter = createGraphics(width, height);
  noLoop();
  rebuildMosaic(); // initial grid
  //nostroke();
}

function draw() {
  background(220);

  // draw tinted mosaic
  push();
  const [r, g, b] = colorModes[currentColor].rgb;
  tint(r, g, b, 255);      // apply current color
  image(graphicsFilter, 0, 0, width, height);
  pop();

  }

// Build a fresh random mosaic into the offscreen buffer and grayscale it
function rebuildMosaic() {
  const imgs = [img1, img4, img5, img6];

  graphicsFilter.push();
  graphicsFilter.background(220);

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
       r = floor(random(0,100));
      let img =                      
         (r < 15) ? g0 :
         (r < 30) ? g1 :
         (r < 45) ? g2 : g3;

      graphicsFilter.image(img, x, y, size, size);
    }
  }

// convert to grayscale
  graphicsFilter.filter(GRAY);
  graphicsFilter.pop();
}

function mousePressed() {
  if (mouseButton === LEFT) {
    rebuildMosaic();
    currentColor = (currentColor + 1) % colorModes.length;
    redraw();
  }
}



