let x, y, size;
function setup() {
  createCanvas(1000, 1000);
  background("black");
  x = 0;
  y = 0;
  size = 30;
}

function draw() {

  stroke("Blue");
  choice = random(0, 1);
  if (choice < 0.5) {
    line(x,y,x+size,y+size);

  }
  else if (0.5<=choice < 0.8){
    line(x,y,x+size,y+size);
    line(x+size,y,x,y+size)
  }
  else{
    line(x+size,y,x,y+size)
    fill("Blue");
    rect(x+5,y+5,size-10,size-10);
    fill("Black");
    rect(x+7,y+7,size-15,size-15);
  }
  x = x+ size;
  if(x>width){
    x = 0;
    y = y + size;
  }
}
