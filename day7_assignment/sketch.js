let noPetals = 10;
let flowers=[];
// let size = 50;
function setup() {
 createCanvas(innerWidth, innerHeight);
 angleMode(DEGREES);
    
}

function draw() {
  background(color(165, 173, 206)	);
 
  for(let i=0; i<flowers.length;i++){
  flowers[i].growFlower();
  flowers[i].moveFlower();
  flowers[i].swayFlower();
  flowers[i].drawFlower();
  }
}



function mousePressed(){
  let tempFlower = new Flower (mouseX, mouseY, random(8, 14), random(-5, 5), random(-5, 5), random(10, 200));
  flowers.push(tempFlower);

}















///////////////////////To make flower
// function draw() {

// background(color(54, 58, 79));
// drawFlower(10,200,200);
// }

// function drawFlower(noPetals,x,y){
  
//   push();
//   noStroke();
//   translate(x, y);
//  // rotate(frameCount); // to roate the flower
//   fill(color(221, 120, 120));
//   ellipse(0, 0, 25);
//   for(let i=0; i<noPetals ; i++){
//     push(); 
//     rotate((360 / noPetals) * i); 
//     translate(60, 0);
//     fill(color(220, 138, 120, 170));
//     ellipse(0, 0 , 100, 50);
//     rotate(360/noPetals);
//     pop();
//   }
  
//   pop();
  
// }