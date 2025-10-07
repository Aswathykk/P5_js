function setup() {
  createCanvas(400, 400);
  background(220);// if background is moved to setup it will not get replaced everytime.so whaever we are doin in draeing will staythere.
}

function draw() {
  //background(220);
 // ellipse(mouseX,mouseY,20,20);
 // ellipse(width/2,height/2,frameCount,frameCount);
 //ellipse(mouseX,mouseY,mouseX,mouseX);
 //ellipse(width/2,height/2,mouseX,mouseX);

 //Symmetry
 noStroke();
 //fill(mouseX, mouseY, 140);//try all the possible combinations while studinging
 fill(mouseX/2, mouseY/2, mouseX/4, mouseY/4);
 ellipse(mouseX,mouseY,50);
 //mirrors the

}
