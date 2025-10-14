let cars = [];
let noCars = 10;
let trains = [];
let notrains = 10;
function setup() {
  createCanvas(1000, 1000);

  for(let i = 0; i < noCars; i+=1){
   let tempCar = new Car(random(0, width),random(0,height),50,3)
   cars.push(tempCar);
  }
  for(let i = 0; i < notrains; i+=1){
   let temptrain = new train(random(0, width),random(0,height),200,3)
   trains.push(temptrain);
  }
}

function draw() {
  background(220);
  for(let i = 0; i<cars.length; i++)
  {
  cars[i].move();
  cars[i].show(mouseX/4);
  cars[i].grow();
  }

  for(let i = 0; i<trains.length; i++)
  {
  trains[i].move();
  trains[i].show(mouseX/4);
 
  }
}
