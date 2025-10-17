let flowers=[];
function setup() {
  createCanvas(400, 400);
 // myFlower = new Flower(200, 200);
}

function draw() {
  background(220);
 // myFlower.drawFlower();
  for(let i=0; i<flowers.length;i++){
    ///check if the current mousex and mouseY on the flower
    flowers[i].checkPosition(mouseX,mouseY);
  
    ///moves abd draws folower
   flowers[i].moveFlower();
   flowers[i].drawFlower();
   

  }
}

function mousePressed(){
  let tempFlower = new Flower (random(height),random(width), random(-5,5), random(-5,5));
  flowers.push(tempFlower);

}
/// draw a flower at the point where i click on the canvas
///steps
//click somehwere  -> mousePressed
// create a flower at mouse position --> let variable = new Flower(mouseX, mouseY)

