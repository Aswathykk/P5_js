let img0, img1, img2, img3

function preload() {
  img0 = loadImage('images/Illustration20a.jpg');
 // img2 = loadImage('images/Illustration22a1.jpg');
 // img3 = loadImage('images/Illustration21.png');
  img1 = loadImage('images/Illustration19a.jpg');
  img2 = loadImage('images/Illustration23a.jpg');
  img3 = loadImage('images/Illustration24a.jpg');
}
function setup() {
  createCanvas(600, 600);
  size = 80;
 // frameRate(1);
  noLoop(); // draw only once at start
}

function draw() {
  background(220);
  imageAdd();
}

function imageAdd(){
for (let i = 0; i < width; i += size) {
    for (let j = 0; j < height; j += size) {
      let choice = floor(random(0,5)); // random number 0–1

      if (choice == 1) {
        image(img1, i, j, size, size);
      } 
      else if (choice == 2) {
        image(img2, i, j, size, size);
      } 
      else if (choice == 3) {
        image(img3, i, j, size, size);
      }
      else {
        image(img0, i, j, size, size);
      }
    }
  }
}

function mousePressed() {
  redraw();
}

