let size = 5, colorArray = ["red", "blue", "green", "yellow", "purple"];
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
  frameRate(10);
}

function draw() {
  noStroke();
  rectgrid();
}

function rectgrid(){
  for(let i = 0; i < width ;i+=size ){
    for(let j = 0; j < height ; j+=size)
    {
      let choice = floor(random(0,colorArray.length))
      fill(colorArray[choice]);
      rect(i,j,size,size);
    }
  }
}
