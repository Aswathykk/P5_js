function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
}

function mousePressed(){
   shape(mouseX, mouseY);
}
function shape(x, y){
  noStroke();
  fill(random(100,250), 10, 10, 200);
  ellipse(x, y, 100, 100);
  fill(220, 5, 5, 200);
  ellipse(x, y+50, 50, 50);

}
