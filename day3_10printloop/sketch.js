let size;
function setup() {
  
 // createCanvas(400, 400);
 createCanvas(innerWidth, innerHeight);
  size = 30;
  frameRate(10);
}

function draw() {
  // for(let i = 0, j = 0; i < width, j< height; i= i+size, j = j + size){
  //   ellipse(i+size/2, size/2, size);
  //   ellipse(size/2, j+size/2, size);
  // }

  //creates a grid of circles
  //  for(let j = 0; j < height; j= j+size){
  //   for(let i = 0; i < width; i= i+size){
  //   ellipse(i+size/2, j+size/2, size);
  //   }

  // }
   background("Purple");
   for(let i = 0; i < width; i= i+size)
   {
    for(let j = 0; j < height; j= j+size)
    {
      choice = random(0, 1);
      if (choice < 0.5) {
        line(i,j,i+size,j+size);
      }
      // else{
      //   line(i+size,j,i,j+size);
      // }
    else if (0.5<=choice < 0.8){
      line(i,j,i+size,j+size);
      line(i+size,j,i,j+size)
    }
    else{
      line(i+size,j,i,j+size)
      fill("Blue");
      rect(i+5,j+5,size-10,size-10);
      fill("Black");
      rect(i+7,j+7,size-15,size-15);
    }
   }

}
}
