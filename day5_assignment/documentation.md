///////Sprite character movemnet////////
loading a sprite sheet and need to cut it aftee that based on the arrow key presses it should move

/////working///////
-- to store sprites an array i screated and based on the no of columns x and y is given 
--with preload fucntion sprite sheet is loaded.
--    let w = spriteImage.width/spriteX;
  let h = spriteImage.height/spriteY;

  width and height is calculated

-- nested for loop is given first one to navigate through each row, and with the next one navigate over column an dthen to cut each frame from the sprite sheet and store it in an aaray
spriteImage.get()  - this function i sused for that

-- a 2d aaray is used here  sprites[row][count] and it is didplayed

--   x = x + xdir;
    y = y + ydir;   is given to move baased on direction

-- keypressed()function is used to create the trigger for movement
  - keycodes are used in each if condition and based on the movement is done 
  - based on xdir and y dir speed and direction is controlled

/////////Future/////////
--would like to add more elemts and make an interactive experience
-- would like to try with more than 1 sprite sheet (like player and villians)