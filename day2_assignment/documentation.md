///////////Anger to Love/////////
--changing the emotion from anger to love.
--chnaged by making the red triangles move out of the screen and then changing the background color to pink, then showing a heart.
-- the draw function will execute 60fps. so movement of the triangles are showing by using that. added varibles x1, x2, x3, y1, y2, y3,z1, z2,z3,t1, t2, t3 and these are incremented at the end of the draw function. indise triangle these variables are used
example,
triangle(x1+8, y1+5, x2+70, y2+10, x3+280, y3+280);

-- for drawing the heart below functions are used  
   -  ellipse(x, y, diameter, diameter)   -- draws the ellipse
   -  push() and pop() are used to isolate transforms. so whatever rotating operations done inside that that will be applicable to the elements inside push and pop.
   - rotate(45)  -- roatates the canvas
   -  noStroke() rmoves the stroke 
   -  stroke(0)  restores the stroke color to black

--- To change the background color,

   if (!Lastcolor) {
    if (r < maxR) r += 1;   
    if (g < maxG) g += 1;
    if (b < maxB) b += 1;

    if (r >= maxR && g >= maxG && b >= maxB) {
      Lastcolor = true;
    }

  }
   - r, g, b are the initial dark red background color  and maxR, maxG, maxB for the last pink shade
   - a variable Lastcolor is used as a flag(initially set to false) to stop the color change once target is reached.
   - so if lastcolor is false(!Lastcolor-->!False--> True) it will go inside the if condition and gradually increases r,g,b by 1 per frame until they reach maxR,maxG,maxB
   - once all colors reach the specified max value the falg will be set to true, stooping further change

--- To keep the first anger drawing for 5s wait logic is added
    
    if (waiting) {
  if (millis() - startTime < 3000) {
    return; // Stop here during wait
  } else {
    waiting = false; // Done waiting
  }
}

   - startTime = millis() is given in the setup to store the millisecond timestamp at the start
   - millis() gives the number of milliseconds since the program started
   - millis() - startTime  will give how much time has passed and if its less that 3s if condition will satisfy and will return, skipping the below parts
   

   ///////////////////issues faced////////////////
   --initally the anger image was falling apart very fastly, so to keep it in the screen for some seconds found the function millis()
   -- the trasnition from anger to love, was not sure how to do
   -- the heart for love is created by using ellipse and canvas roatation, didnt know that it will be in radians by default. so faced issue with alighnment, and vbecause of this alligned each of them manually changing bit by bit

////////////////Future////////
-- would like to make the transition more smoother
-- would like to try make use of the negative sound
-- adding sound