let myCar1, myCar2;
let cars = [];
let noCars = 20;
function setup() {
  createCanvas(1000, 1000);
  // myCar1 = new Car(700, 300, 50, 5);  // creating an object from c
  // myCar2 =  new Car(200, 300, 200, 7);  // creating an object from c
  for(let i = 0; i < noCars; i+=1){
   let tempCar = new Car(random(0, width),random(0,height),50,3)
   cars.push(tempCar);
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
//   myCar2.move();
//   myCar2.show();
//   myCar1.move();
//   myCar1.show();
}
