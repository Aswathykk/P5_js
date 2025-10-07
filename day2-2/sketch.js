let x,y,z;

function setup() {
  createCanvas(400, 400);
  x = 0, y= 0, z = 0;
}

function draw() {
  background(220);
  fill(x,y,z);
  triangle(2, 5, 13, 95, 280, 290);
  x= 10+frameCount%255;
  y= 150+frameCount%255;
  z= 20+frameCount%255;
  
}
