///// Creating an interactive pattern///////
added blue grids with grey circles, on pressing and dragging it will light up that one and the immediate surroudning ones.
//////////
-- gave noLoop() to Prevent the draw() function from continuously running

-- col = floor(mouseX / size);
   row = floor(mouseY / size);  
   use dthis calculate the cell the mouse is currently over
-- nester for loops are then used for creating square grids
-- to keep the current transformation state inside a block push and pop are used and to draw circle inside rectangle translate(i + size/2, j + size/2); is used

--  if (mouseIsPressed) {
        let dCol = abs(thisCol - col);
        let dRow = abs(thisRow - row);

        if (dCol <= 1 && dRow <= 1) {
          circleColor = color(255, 220, 0); // yellow
        }
      }

      this condition make the surrounding tiles within 1 tile radius to yellow while mouse is pressed

-- mouseDragged , mousePresses and mouse released function is also used to call draw when ever mouse is pressed or relased so that it can refelct the out come based on interaction.

////Issues////////
--initally faces issue with ficning the correct coordinates, then when tried with grid it worked
///Future/////
--would like to make the movement an dtransition more smooth and would like to add some more yellow squares