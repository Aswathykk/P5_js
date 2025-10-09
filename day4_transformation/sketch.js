let noPetals = 10;
let size = 50;
function setup() {
  createCanvas(400, 400);
 // angleMode(DEGREES);
  background(220);  
}

function draw() {
drawrect();
}

// function drawFlower(noPetals,x,y){
  
//   push();
//   noStroke();
//   translate(x, y);
//   rotate(frameCount); // to roate the flower
//   fill("yellow");
//   ellipse(0, 0, 65);
//   for(let i=0; i<noPetals ; i++){
//     fill("pink");
//     ellipse(80, 0 , 100, 50);
//     rotate(360/noPetals);
//   }
//   pop();
  
// }

function drawrect(){
  for(let i=0; i<width ; i= i+size){
   for(let j=0; j<height ; j= j+size){
    rect(i,j,size,size);

  }

}
}




