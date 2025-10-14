//////Creating continuos pattern from images////////////
every time we click the mose, the pattern is changed randomly and the color tint also changes

///Pattern creation////
-- preload() loads images before setup
  - to load images loadImage('images/filename') is used. a folder names images is created in the file where,js is there and in that image is added

  --  for (let i = 0; i < noImages; i++) {
   imgArr[i] = loadImage("images/g"+i+".jpg");
  }  
  for preload since multiple images are loaded used an array and for loop, so that it will be easy to add more in the future. 

  -- to make grid of images 
    
     for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
   
      let r = floor(random(0, 100));
      let img = (r < 15) ? img1 :
                (r < 30) ? img4 :
                (r < 45) ? img5 : img6;

    }}

    - nested for loops are used.
    - outer loop controls the column (x dir  left to right)
    - inner loop controls the rows(y dir  top to bottom)
    - random(x, y) gives a random no between x and y and stores in the variable r
    - floor is used so that we will get integer values only
    - instead of if else condition ternary operator is used
    condition ? valueIfTrue : valueIfFalse 
        - if random no is less than 15 use img1 
        - if random no is less that 45 use img5 else use img6

//// mouse click change///
--- to change the pattern and color with mouse press the function mousePressed() is used
  - rebuildMosaic() makes new pattern(ternary operator)
  - and switches to next color tint
  - % colorModes.length makes sure it loops back to the first color after the last one
  - calls the redrw again with new settings

  --- to change the color graphic filter is used
   - createGraphics() makes an offscreen canvas
   - rebuildMosaic() makes the first grid pattern
   noLoop() stops draw from running again and again (it runs only when you call redraw later).
   - tint() gives the mosaic a color filter
   - image(graphicsFilter, 0, 0, width, height); draws the offscreen created in to the main canvas
   - graphicsFilter.filter(GRAY); turns the entire offscreen canvas to black and white(adde blue color in the image but with that in color change it was not working peoprly so added like this)

   /////////issues faced////////
   -- initilly didnt know what was the logic behind continuous patterns, then realized if we keep all the edge connections same it will work
   -- it took some time for ideation
   -- gave blue color to the patterns, but with color change was not working properly so grayed it out

   /////////////////future/////////
   --would like to add some more monsters and color variations
