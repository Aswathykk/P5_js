function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
   fill("orange");
   rect(500, 500, 50, 50);
}

function mouseClicked() {

  // if (mouseY < height / 2) {
  //   fill("orange");
  //   ellipse(mouseX, mouseY, 50, 50);
  // }
  // else {
  //   fill("blue");
  //   rect(mouseX, mouseY, 50, 50);
  // }

  if ((mouseX<550) && (mouseX >500) && (mouseY<550)&& (mouseY>500)) {
    background("blue");
  }

  else {

  }
}