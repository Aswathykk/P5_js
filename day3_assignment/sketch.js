let img1, img4, img5, img6;
let size = 80;
let graphicsFilter;
// let pg; 

let colorModes = [
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
  img1 = loadImage('images/Illustration20a.jpg');
 //  img2 = loadImage('images/Illustration22a.jpg');
 //  img3 = loadImage('images/Illustration23a.jpg');
  img4 = loadImage('images/Illustration19a.jpg');
  img5 = loadImage('images/Illustration23a.jpg');
  img6 = loadImage('images/Illustration24a.jpg');
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
  let imgs = [img1, img4, img5, img6];

  graphicsFilter.push();
  graphicsFilter.background(220);

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
       r = floor(random(0,100));
      let img =                      
         (r < 15) ? img1 :
         (r < 30) ? img4 :
         (r < 45) ? img5 : img6;

      // if (choice ==1) {
      //   image(img1, i, j, size, size);
      // } 
      // else if (choice ==2) {
      //   image(img4, i, j, size, size);
      // } 
      // else if (choice ==3) {
      //   image(img5, i, j, size, size);
      // } 
      // else{
      //   image(img6, i, j, size, size);
      // } 

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






////////////////////////////////////////////////////// base code
// let img0, img1, img2, img3

// function preload() {
//   img0 = loadImage('images/Illustration20a.jpg');
//  // img2 = loadImage('images/Illustration22a1.jpg');
//  // img3 = loadImage('images/Illustration21.png');
//   img1 = loadImage('images/Illustration19a.jpg');
//   img2 = loadImage('images/Illustration23a.jpg');
//   img3 = loadImage('images/Illustration24a.jpg');
// }
// function setup() {
//   createCanvas(600, 600);
//   size = 80;
//  // frameRate(1);
//   noLoop(); // draw only once at start
// }

// function draw() {
//   background(220);
//   imageAdd();
// }

// function imageAdd(){
// for (let i = 0; i < width; i += size) {
//     for (let j = 0; j < height; j += size) {
//       let choice = floor(random(0,4)); // random number 0–1

//       if (choice == 1) {
//         image(img1, i, j, size, size);
//       } 
//       else if (choice == 2) {
//         image(img5, i, j, size, size);
//       } 
//       else if (choice == 3) {
//         image(img4, i, j, size, size);
//       }
//       else {
//         image(img6, i, j, size, size);
//       }
//     }
//   }
// }

// function mousePressed() {
//   redraw();
// }

