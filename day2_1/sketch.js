function setup() {
  createCanvas(400, 400);
  background(250);// if background is moved to setup it will not get replaced everytime.so whaever we are doin in draeing will staythere.
}

function draw() {
  //background(220);
  // ellipse(mouseX,mouseY,50,50);
 // ellipse(width/2,height/2,frameCount,frameCount);
 ellipse(mouseX,mouseY,mouseX,mouseX); // creates concentric cirvles continu

 //ellipse(width/2,height/2,mouseX,mouseX);

 //Symmetry
// noStroke();
 //fill(mouseX, mouseY, 140);//will create gradient//try all the possible combinations while studinging
 //fill(mouseX/2, mouseY/2, mouseX/4, mouseY/4);
 //ellipse(mouseX,mouseY,50);
// ellipse(width/2,height/2,(frameCount/100)*300);
 //mirrors the

}
