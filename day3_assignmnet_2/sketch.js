let size = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
  noStroke();
}

function draw() {
  background(20, 30, 60); 
  // which tile the mouse is over
   col = floor(mouseX / size);
   row = floor(mouseY / size);

  for (let i = 0; i < width; i += size) {
    for (let j = 0; j < height; j += size) {

      push();
      translate(i + size/2, j + size/2);

      let circleColor = color(20, 30, 60);

      
      let thisCol = i / size;
      let thisRow = j / size;

     
      if (mouseIsPressed) {
        let dCol = abs(thisCol - col);
        let dRow = abs(thisRow - row);

        if (dCol <= 1 && dRow <= 1) {
          circleColor = color(255, 220, 0); // yellow
        }
      }

      
      fill(10, 10, 70);
      rect(-size/2, -size/2, size, size);

    
      fill(circleColor);
      ellipse(0, 0, size * 0.6);

      pop();
    }
  }
}


function mouseDragged() {
  redraw();
}


function mousePressed() {
  redraw();
}


function mouseReleased() {
  redraw();
}

