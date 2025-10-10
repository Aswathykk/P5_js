let x1, x2, x3, y1, y2, y3,z1, z2,z3,t1, t2, t3, r, g, b, maxB, maxG, maxR;
let startTime;
let waiting = true;
let Lastcolor = false;

function setup() {
  createCanvas(600, 600);
  startTime = millis();
  x1= 0, x2= 0, x3= 0, y1= 0, y2= 0, y3 = 0, z1=0, z2=0, z3=0, t1=0, t2=0, t3=0, r=32, g=2, b=2, maxR = 255, maxG = 182, maxB = 193;

  frameRate(60);
}

function draw() {

   //ellipse(width/2,height/2,(frameCount/100)*300);
  /* ellipse(width/2,height/2,mouseX,mouseX);
   noStroke();
 fill(mouseX/2, mouseY/2, mouseX/4, mouseY/4);
 /* fill("rgb(240,234,234)");
  triangle(0, 0, 10, 100, 80, 80);  */
 background(r,g,b);


  strokeWeight(10);
  line(x1+170, t1+310, z2+330, x3+310); 
  line(z2+250, x2+250, t3+380, x2+380);
  line(z2+400, y1+230, x3+400, t3+500); 
  line(y2+380, y1+230, z3+280, t1+380);
 // fill("rgb(179,25,25)");
 // triangle(2, 5, 13, 95, 280, 290);
 // triangle(2, 5, mouseX, mouseY, 280, 290);*/
  fill("rgb(163,23,23)");
   triangle(x1+8, y1+5, x2+70, y2+10, x3+280, y3+280);
  fill("rgb(145,16,16)");
  triangle(z1+75, y1+4,z2+95, y2+10, z3+220, y3+200);
  fill("rgb(138,17,17)");
 // triangle(98, 4, 130, 4, 295, 280);
  triangle(x1+98, y1+4, x2+130, y2+4, x3+295, y3+280);
  fill("rgb(127,14,14)");
  //triangle(140, 4, 180, 4, 315, 270);
  triangle(x1+140, y1+4, x2+180, y2+4, x3+315, y3+270);
  fill("rgb(121,15,15)");
  //triangle(185, 6, 220, 4, 340, 250);
  triangle(t1+185, x1+6, t2+220, x2+4, t3+340, x3+250);
  fill("rgb(104,11,11)");
  //triangle(230, 4, 280, 4, 350, 240);
  triangle(x1+230, z1+4, x2+280, z2+4, x3+350, z3+240);
  fill("rgb(107,9,9)");
  //triangle(282, 4, 300, 4, 360, 210);
  triangle(x1+282, x2+4, x3+300, y2+4, x1+360, z3+210);
  fill("rgb(95,8,8)");
  //triangle(300, 4, 350, 4, 365, 220);
  triangle(z1+300, z1+4, z2+350, z2+4, z3+365, z3+220);
  fill("rgb(102,12,12)");
  //triangle(360, 5, 390, 4, 376, 200);
  triangle(x1+360, y1+5, x2+390, y2+4, x3+376, y3+200);
  fill("rgb(101,9,9)");
  //triangle(395, 4, 420, 4, 392, 180);
  triangle(y1+395, t1+4, y2+420, t2+4, y3+392, t3+180);
  fill("rgb(87,7,7)");
 // triangle(420, 3, 460, 4, 420, 150);
  triangle(t3+420, t1+3, x2+460, t2+4, z3+420, z1+150);
  fill("rgb(70,6,6)");
 // triangle(470, 4, 510, 4, 460, 130);
  triangle(z1+470, x1+4, z2+510, x2+4, y3+460, y3+130);
  fill("rgb(68,6,6)");
  //triangle(520, 4, 535, 4, 500, 100);
  triangle(y1+520, z1+4, y2+535, z2+4, x3+500, x3+100);
  fill("rgb(59,5,5)");
  //triangle(545, 5, 565, 4, 540, 80);
  triangle(t1+545, y1+5, t2+565, y2+4, t3+540, y3+80);
  fill("rgb(49,4,4)");
 // triangle(570, 5, 585, 4, 560, 50);
  triangle(z1+570, t1+5, z2+585, t2+4, z3+560, t3+50);
  fill("rgb(40,2,2)");
 // triangle(590, 5, 600, 4, 580, 30);
  triangle(x1+590, z1+5, x2+600, z2+4, x3+580, z3+30);
  
  
  fill("rgb(179,25,25)");
  //triangle(4, 95, 5, 130, 210, 250);
  triangle(z2+4, t1+95, t3+5, y1+130, y2+210, z3+250);
  fill("rgb(163,23,23)");
 // triangle(4, 135, 4, 180, 220, 280);
  triangle(y1+4, z1+135, y2+4, z2+180, z3+220, x3+280);
  fill("rgb(145,16,16)");
  //triangle(3, 183, 4, 200, 250, 295);
  triangle(x1+3, x2+183, x2+4, x3+200, x3+250, y3+295);
  fill("rgb(138,17,17)");
  //triangle(4, 200, 4, 250, 260, 300);
  triangle(y1+4, y2+200, y2+4, y3+250, z3+260, z3+300);
  fill("rgb(127,14,14)");
  //triangle(5, 255, 5, 265, 255, 320);
  triangle(z1+5, z2+255, z2+5, z3+265, x3+255, x3+320);
  fill("rgb(121,15,15)");
 // triangle(5, 270, 5, 300, 240, 330);
  triangle(x1+5, t2+270, x2+5, x3+300, y3+240, y3+330);
  fill("rgb(104,11,11)");
  //triangle(5, 305, 5, 350, 220, 360);
  triangle(y1+5, z2+305, y2+5, x3+350, z3+220, t3+360);
  fill("rgb(107,9,9)");
  //triangle(4, 350, 5, 380, 200, 380);
  triangle(z1+4, t2+350, z2+5, t1+380, x3+200, x3+380);
  fill("rgb(95,8,8)");
 //triangle(5, 385, 5, 400, 190, 390);
  triangle(t1+5, y1+385, x2+5, t1+400, y3+190, x3+390);
  fill("rgb(102,12,12)");
  //triangle(5, 403, 4, 430, 180, 400);
  triangle(t3+5, z1+403, y2+4, x2+430, z3+180, y3+400);
  fill("rgb(101,9,9)");
  //triangle(5, 430, 5, 470, 160, 410);
  triangle(x1+5, x2+430, z2+5, z3+470, x3+160, x3+410);
  fill("rgb(87,7,7)");
  //triangle(4, 470, 5, 490, 145, 430);
  triangle(y1+4, y2+470, t2+5, t3+490, y3+145, y3+430);
  fill("rgb(70,6,6)");
  //triangle(5, 500, 5, 550, 140, 450);
  triangle(z1+5, z2+500, x2+5, t1+550, z3+140, z3+450);
  fill("rgb(68,6,6)");
  //triangle(4, 555, 4, 570, 130, 460);
  triangle(x1+4, t1+555, y2+4, y3+570, x3+130, t2+460);
  fill("rgb(59,5,5)");
  //triangle(5, 580, 5, 600, 120, 500);
  triangle(y1+5, x1+580, z2+5, z3+600, y3+120, x3+500);
  fill("rgb(49,4,4)");
 /* triangle(5, 385, 5, 400, 190, 390);
  fill("rgb(40,2,2)");
  triangle(5, 385, 5, 400, 190, 390);
  */
 
 
  fill("rgb(179,25,25)");
  //triangle(2, 595, 13, 505, 280, 310);
  triangle(x1+2, y1+595, x2+13, y2+505, x3+280, y3+310);
  fill("rgb(163,23,23)");
  //triangle(8, 595, 70, 590, 280, 320);
  triangle(z3+8, t1+595, x2+70, y2+590, z3+280, t1+320);
  fill("rgb(145,16,16)");
  //triangle(75, 596, 95, 590, 220, 400);
  triangle(y1+75, z1+596, y2+95, z2+590, x3+220, x3+400);
  fill("rgb(138,17,17)");
  //triangle(98, 596, 130, 596, 295, 320);
  triangle(t1+98, x1+596, t2+130, x2+596, t3+295, x3+320);
  fill("rgb(127,14,14)");
  //triangle(140, 596, 180, 596, 315, 330);
  triangle(z1+140, y1+596, z2+180, y2+596, z3+315, y3+330);
  fill("rgb(121,15,15)");
  //triangle(185, 594, 220, 596, 340, 350);
  triangle(x1+185, z1+594, x2+220, z2+596, x3+340, z3+350);
  fill("rgb(104,11,11)");
  //triangle(230, 596, 280, 596, 350, 360);
  triangle(y3+230, t1+596, y2+280, t2+596, y3+350, t3+360);
  fill("rgb(107,9,9)");
  //triangle(282, 596, 300, 596, 360, 390);
  triangle(z1+282, z2+596, z3+300, z3+596, t3+360, t3+390);
  fill("rgb(95,8,8)");
  //triangle(300, 596, 350, 596, 365, 380);
  triangle(t3+300, x2+596, x3+350, x3+596, y3+365, y3+380);
  fill("rgb(102,12,12)");
  //triangle(360, 595, 390, 596, 376, 400);
  triangle(y1+360, y2+595, y3+390, y3+596, z3+376, z3+400);
  fill("rgb(101,9,9)");
  //triangle(395, 596, 420, 596, 392, 420);
  triangle(x1+395, z1+596, x2+420, z2+596, x3+392, x3+420);
  fill("rgb(87,7,7)");
  //triangle(420, 597, 460, 596, 420, 450);
  triangle(z1+420, y1+597, z2+460, y2+596, y3+420, y1+450);
  fill("rgb(70,6,6)");
  //triangle(470, 596, 510, 596, 460, 470);
  triangle(x1+470, x2+596, x2+510, x3+596, z3+460, z2+470);
  fill("rgb(68,6,6)");
  //triangle(520, 596, 535, 596, 500, 500);
  triangle(y3+520, z1+596, y2+535, z2+596, x3+500, t1+500);
  fill("rgb(59,5,5)");
  //triangle(545, 595, 565, 596, 540, 520);
  triangle(z1+545, x1+595, z2+565, x2+596, y3+540, y3+520);
  fill("rgb(49,4,4)");
  //triangle(570, 595, 585, 596, 560, 550);
  triangle(x1+570, y1+595, x2+585, y2+596, z2+560, z2+550);
  fill("rgb(40,2,2)");
  //triangle(590, 595, 600, 596, 580, 570);
  triangle(y1+590, z1+595, y2+600, z2+596, x3+580, x3+570);


  fill("rgb(179,25,25)");
  //triangle(596, 505, 595, 470, 390, 350);
  triangle(x1+596, y1+505, x2+595, y2+470, x3+390, y3+350);
  fill("rgb(163,23,23)");
  //triangle(596, 465, 596, 420, 380, 320);
  triangle(z1+596, t1+465, z2+596, t2+420, z3+380, t2+320);
  fill("rgb(145,16,16)");
  //triangle(597, 417, 596, 400, 350, 305);
  triangle(y1+597, x1+417, y2+596, x2+400, y3+350, x3+305);
  fill("rgb(138,17,17)");
  //triangle(596, 400, 596, 350, 340, 300);
  triangle(x1+596, y1+400, x2+596, y2+350, t2+340, t1+300);
  fill("rgb(127,14,14)");
  //triangle(595, 345, 595, 335, 345, 280);
  triangle(z1+595, z2+345, z2+595, z3+335, x3+345, x3+280);
  fill("rgb(121,15,15)");
  //triangle(595, 330, 595, 300, 360, 270);
  triangle(y3+595, t1+330, y2+595, t2+300, y3+360, y3+270);
  fill("rgb(104,11,11)");
  //riangle(595, 295, 595, 250, 380, 240);
  triangle(x3+595, x2+295, x2+595, x3+250, z3+380, x1+240);
  fill("rgb(107,9,9)");
  //triangle(596, 250, 595, 220, 400, 220);
  triangle(y1+596, y1+250, y2+595, y2+220, x3+400, x3+220);
  fill("rgb(95,8,8)");
  //triangle(595, 215, 595, 200, 410, 210);
  triangle(z1+595, z1+215, z2+595, z2+200, y3+410, y3+210);
  fill("rgb(102,12,12)");
 // triangle(595, 197, 596, 170, 420, 200);
  triangle(t1+595, x1+197, t2+596, t2+170, x3+420, t3+200);
  fill("rgb(101,9,9)");
  //triangle(595, 170, 595, 130, 440, 190);
  triangle(x1+595, y1+170, x2+595, y2+130, x3+440, t3+190);
  fill("rgb(87,7,7)");
  //triangle(596, 130, 595, 110, 455, 170);
  triangle(y1+596, z1+130, y2+595, z2+110, y3+455, z2+170);
  fill("rgb(70,6,6)");
  //triangle(595, 100, 595, 50, 460, 150);
  triangle(z1+595, x1+100, z2+595, x2+50, x3+460, x3+150);
  fill("rgb(68,6,6)");
  //triangle(596, 45, 596, 30, 470, 140);
  triangle(x1+596, y1+45, x2+596, y2+30, t3+470, t3+140);
  fill("rgb(59,5,5)");
  //triangle(595, 20, 595, 0, 480, 100);
  triangle(y1+595, z1+20, y2+595, z2+0, x3+480, x3+100);
 // fill("rgb(49,4,4)");
  fill("rgb(179,25,25)");
  triangle(x1+2, y1+5, x2+13, y2+95, x3+280, y3+290);
    if (waiting) {
    if (millis() - startTime < 3000) {
      return; // Stop here during wait
    } else {
      waiting = false; // Done waiting
    }
  }
  x1 = x1 + 10;
  y1 = y1 +8;
  x2 = x2 + 8;
  y2 = y2 + 5;
  x3 = x3 + 10;
  y3 = y3 + 7;
  z1 = z1 + 5;
  z2 = z2 + 6;
  z3 = z3 + 8;
  t1 = t1 + 7;
  t2 = t2 + 9;
  t3 = t3 + 5;
  //triangle(2, 5, mouseX, mouseY, 280, 290);
  //  noStroke();
  if (!Lastcolor) {
    if (r < maxR) r += 1;   
    if (g < maxG) g += 1;
    if (b < maxB) b += 1;

    if (r >= maxR && g >= maxG && b >= maxB) {
      Lastcolor = true;
    }

  }

  
  // fill(r+50, g+50, b+50);
  // ellipse(300,300,50,50);
  
  noStroke();
  fill(r+50, g+50, b+50, 20);
  ellipse(300,300,sin(frameCount/100)*300);
  ellipse(200,200,sin(frameCount/100)*300);
  ellipse(100,300,sin(frameCount/100)*300);
  //ellipse(200,100,sin(frameCount/100)*300);``
  ellipse(400,100,sin(frameCount/100)*300);
  ellipse(100,100,sin(frameCount/100)*300);
  ellipse(200,500,sin(frameCount/100)*300);
  ellipse(500,100,sin(frameCount/100)*300);
  ellipse(550,550,sin(frameCount/100)*300);
  ellipse(500,400,sin(frameCount/100)*300);
  push();
  translate(300, 300);
  rotate(45);
  fill(r+50, g+50, b+50, 100);
  ellipse(-110, 10, 200, 80);
  fill(r+50, g+50, b+50, 100);
  ellipse(-100, 50, 240, 120);
  fill(r+50, g+50, b+50, 127);
  ellipse(-100, 50, 220, 100);
  fill(r+50, g+50, b+50, 170);
  ellipse(-100, 50, 200, 80);
  pop();

  push();
  translate(300, 300);
  rotate(90);
  fill(r+50, g+50, b+50, 100);
  ellipse(-70, 65, 200, 80);
  fill(r+50, g+50, b+50, 100);
  ellipse(-55, 35, 240, 120);
  fill(r+50, g+50, b+50, 127);
  ellipse(-55, 35, 220, 100);
  fill(r+50, g+50, b+50, 170);
  ellipse(-55, 35, 200, 80);
  pop();

  // push();
  // // translate(300, 300);
  // // rotate(45);
  // // fill(r+50, g+50, b+50, 100);
  // // ellipse(-55, 35, 240, 120);
  // // fill(r+50, g+50, b+50, 127);
  // // ellipse(-55, 35, 220, 100);
  // fill(r+50, g+50, b+50, 127);
  // ellipse(250, 210, 100, 220);
  // fill(r+50, g+50, b+50, 170  );
  // ellipse(250, 210, 80, 200);
  // pop();


  stroke(0)
  
}

/*function colorcircle(){
  ellipse(width/2,height/2,(frameCount/100)*300);
}*/
