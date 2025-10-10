let spriteImg, sRows = 4,sCols = 8, sprites = [];
let count = 0;
function preload() {

  spriteImg = loadImage('images/explosionFull.png');

}
function setup() {
  createCanvas(innerWidth, innerHeight);
  let sWidth = spriteImg.width / sCols;
  let sHeight = spriteImg.height / sRows;
//Loop through the sprite image and store it in a 1D array
for(let i = 0; i < sRows; i++){
  for(let j = 0; j < sCols; j++){
    //get that slice of the sprite sheet
   sprites[sprites.length] = spriteImg.get(j*width,i*height,sWidth,sHeight);
}
}
console.log(sprites);
}

function draw() {
    background(20);
  //   let totalframes = sRows * sCols;
  // image(sprites[frameCount%totalframes], 0, 0);
 
  // image(sprites[frameCount%sprites.length], 0, 0);


if(keyIsPressed){
  count++
}
 image(sprites[count%sprites.length], 0, 0);
}  

function