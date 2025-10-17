function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0, 50);
//   let noiseValue = noise(.01*frameCount+1000)
//  // console.log(noise(.01*frameCount));   // smaller the no more granularity
//  let noiseMapped = map(noiseValue, 0, 1, 10, 200);
//  ellipse(width/2, height/2, noiseMapped);          ///pulsating ellipse

// perlin noise in 2d

for(let i = 0; i< width; i+=5){
  for(let j = 0; j< height; j+=5)
  {
   // let ouputNoise = noise(0.005*i, 0.005*j);
    let ouputNoise = noise(0.005*(i+frameCount), 0.005*j); // move in x
    
   // print(ouputNoise);
    fill(ouputNoise*255);
    noStroke();
    rect(i,j,5,5);
  }

}




}
