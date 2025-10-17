////////scene1//////
let officeImages = [];
let currentOffice = 0;
let backgroundSound, callSound;
let started = false; // started or not
let callX, callY, callSize;// for call button
let noiseOffset = 0; // Perlin noise pulsation
let ellipsesVisible = false; // show ellipses after 5s
let ellipsesStartTime = 0;
/////////scene2/////////
let road, walking, walkingsprites = [];
let walkCols = 4, walkRows = 1;
let walkXPos, walkYPos, walkSpeed = 1, walkScale = 0.5; //walkscale --> scaleof sprite 
let walkFrame = 0, lastMoveTime = 0, frameDelay = 350;
let roadX, roadY, roadWidth, roadHeight; // for road
let showRoad = false;
let trafficSound;
let trafficIsthere = false;
/////////scene3//////////
let cityImages = [];
let cityFrame = 0;
let nextCityFrame = 1;
let cityAlpha = 0;
let cityFadeSpeed = 2;
let trainImage;
let showCity = false;
let cityStartTime;
////////scene4///////////////
let headphoneImage ;
let headphoneStart = false ;
let headphoneImage1, headphoneImage2, headphoneImage3, headphoneImage4, headphoneImage5 ;
let wearingHeadphone = false;
let earphoneMusic;
let blurBackgnd;
let headphoneTimer = 0;
let headphoneTimer2 = 0;
let HeadphoneFlag = false;
let forestImg =[];
let forestAlpha = 0;
let forestStartTime ;
let headphoneCounter = 0;
let headphone1Starttime, headphone2Starttime;
let homeImg1, homeImg2;


///////////////////////////////////////////////
function preload() {
  officeImages[0] = loadImage('images/office1.png');
  officeImages[1] = loadImage('images/office2.png');
  backgroundSound = loadSound("assets/backgroundmusic.mp3");
  callSound = loadSound("assets/callSound.mp3");

  road = loadImage('images/road.png');
  walking = loadImage('images/walking1.png');
  trafficSound = loadSound("assets/traffic.mp3");

  cityImages[0] = loadImage('images/city.png');
  cityImages[1] = loadImage('images/city2.png');
  cityImages[2] = loadImage('images/city3.png');
  trainImage =  loadImage('images/trin1.png');

  headphoneImage = loadImage('images/earphone .png');
  headphoneImage1 = loadImage('images/train2.png');
  earphoneMusic = loadSound("assets/home.mp3");
  headphoneImage2 = loadImage('images/train3.png');
  headphoneImage3 = loadImage('images/train4.png');
  headphoneImage4 = loadImage('images/train 5.png');
  headphoneImage5 = loadImage('images/train6.png');
  blurBackgnd = loadImage('images/green1.png');
  forestImg[0] = loadImage('images/forest .png');
  forestImg[1] = loadImage('images/forest2.png');

  homeImg1 = loadImage('images/home1.png');
  homeImg2 = loadImage('images/home22.png');

}
/////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);

  callX = width / 2 - 50;
  callY = height - 100;
  callSize = 70;

  // Splitting of walking sprite
  let spriteW = walking.width / walkCols;
  let spriteH = walking.height / walkRows;
  for (let i = 0; i < walkRows; i++) {
    walkingsprites[i] = [];
    for (let j = 0; j < walkCols; j++) 
    {
      walkingsprites[i][j] = walking.get(j * spriteW, i * spriteH, spriteW, spriteH);
    }
  }

  // Road boundary
  let roadRatio = road.width / road.height; //road img aspect ratio 
  //if the canvas is wider --> roadheight is same as the current height, if diff calculate it with aspect ratio
  if (width / height > roadRatio) 
  { roadHeight = height;
    roadWidth = roadHeight * roadRatio;
  }
  //if the canvas is narrower --> roadheight is same as the current height, if diff calculate it with aspect ratio 
  else 
  { roadWidth = width;
    roadHeight = roadWidth / roadRatio;
  }
  roadX = width / 2;
  roadY = height / 2;

  // starting positin of the sprite
  walkXPos = roadX - roadWidth / 2 - (spriteW * walkScale) / 2;
  walkYPos = roadY - 200;
}
/////////////////////////////////////////////////////////////////
function draw() {
  if (!started) {
    background(30);
    textFont('Georgia');
    textSize(48);
    text("GOING HOME", width / 2, height / 2);
    textSize(20);
    text("Click to start", width / 2, height / 2 + 50);
    textSize(20);
    text("Press right arrow for movement", width / 2, height / 2 + 80);
    return;
  }

  background(30);

////////////navigating through the scenes///////

//if showroad and showcity both flags are not true then call officescene function
  if (!showRoad && !showCity) {
    showOfficeScene();
    /// call button after 8s .. if it the office scene is 1 & call button not there(to confirm it will happen only once)& 8s
    if (currentOffice == 0 && !ellipsesVisible && millis() >= ellipsesStartTime) {
      // call button appear
      ellipsesVisible = true;
      //for playing sound
      if (!callSound.isPlaying()) {
        callSound.loop();
        callSound.setVolume(1);
      }
    }
    
    //call the callbutton function for noise effect and functionalities
    if (ellipsesVisible && currentOffice == 0) {
      callButton();
    }

  } 
  // if showroad flag is true and showcity false then --> road scene
  else if (showRoad && !showCity) {
    showRoadScene();
    animateWalking();
  }
  // if shoecity falg true then city
  else if (showCity) {
    showCityScene();
  }

  // else if(headphoneStart){
  //   headphonePop();
  // }
}

////////////////////FUNCTIONS/////////////////////
function showOfficeScene() {
  //line - 187 definition
  drawImageFullScreen(officeImages[currentOffice]);

  if(currentOffice == 1){
  textSize(20);
  text("How did it come to this? Every day just dragging me further down", callX + 50, callY + 60);
  
  }
}
//////////////////////////////////////////////////
function showRoadScene() {
  drawImageFullScreen(road);
}
///////////////////////////////////////////
//To centre the image on the canvas
//takes an image as i/p  and if the img is not loaded ten returns null
function drawImageFullScreen(img) {
  if (!img)
  {
    return;
  }
  //aspect ratio
  let imgRatio = img.width / img.height;
  let canvasRatio = width / height;
  let drawWidth, drawHeight;
//scaling like the previous one
  if (canvasRatio > imgRatio) {
    drawHeight = height;
    drawWidth = drawHeight * imgRatio;
  } else {
    drawWidth = width;
    drawHeight = drawWidth / imgRatio;
  }

  image(img, width / 2, height / 2, drawWidth, drawHeight);
}

//////////////////////////////////////////////////////////
// to indiavte the call, call buttons
function callButton() {
  // Perlin noise pulsation
  let noiseValue = noise(noiseOffset);
  let pulseSize = map(noiseValue, 0, 1, callSize * 0.8, callSize * 1.2);
  noiseOffset += 0.01;
//green one
  fill(30, 255, 50, 140);
  noStroke();
  ellipse(callX, callY, pulseSize);
// red one
  fill(255, 0, 50, 140);
  noStroke();
  ellipse(callX+180 , callY, pulseSize);

  fill(255);
  textSize(20);
  text("Another call.... another mask to wear", callX + 50, callY + 60);
  text("I'll ignore it, just this once", callX + 50, callY + 80);
}
////////////////////////////////////////////////////////////////
//call button start timer
function startEllipsesTimer() {
  ellipsesStartTime = millis() + 7000; // 8 seconds from now
}
///////////////////////////////////////////////////////////////////////////////////
function mousePressed() {
 //for adding the background sound
  if (!started) 
  { userStartAudio().then(() => {  // for browsers
    backgroundSound.loop();
    backgroundSound.setVolume(0.2);
    started = true;  // flag to make sure onetime runniing
    startEllipsesTimer(); //setting the delay for call button timer
    });
  } 

  // Office scene
  else if (!showRoad && !showCity)
  {
    //office scene1 and elipse visible
    if (ellipsesVisible && currentOffice == 0) 
    { let dRed = dist(mouseX, mouseY, callX + 180, callY);
      let dGreen = dist(mouseX, mouseY, callX, callY);

      if (dRed < callSize / 2 || dGreen < callSize / 2) 
      { // Stop call
        if (callSound.isPlaying()) callSound.stop();
        // remove ellipse
        ellipsesVisible = false;
        // 2 office image
        currentOffice = 1;
        // Wait 2s --> then road
        setTimeout(() => {
        showRoad = true;
        }, 5000);
      }
    }
  }
  // City scene headphone click
  //checking the flags
  if (headphoneStart && !wearingHeadphone) 
  { //scaling of headphone img
    let scaleFactor = 0.8;
    let imgW = headphoneImage.width * scaleFactor;
    let imgH = headphoneImage.height * scaleFactor;

    // Check if mouse clicked on headphone
    if (mouseX > width / 2 - imgW / 2 &&mouseX < width / 2 + imgW / 2 &&mouseY > height / 2 - imgH / 2 &&mouseY < height / 2 + imgH / 2 ) 
    {
      wearingHeadphone = true; 
    }
  }

}
////////////////////////////////////////////////////////////////
function animateWalking() {
  //sprite w and h calculation and scaling
  let spriteW = walkingsprites[0][0].width * walkScale*0.9;
  let spriteH = walkingsprites[0][0].height * walkScale*0.9;
  let moving = false;
  //key operations
  if (keyIsDown(RIGHT_ARROW)) 
  { walkXPos += walkSpeed;
    moving = true;
  }
  if (keyIsDown(LEFT_ARROW)) 
  { walkXPos -= walkSpeed;
    moving = true;
  }
 
  // Road boundaries  , roadX and y and calculated at first
  let leftBound = roadX - roadWidth / 2 + spriteW / 2 - 70;
  let rightBound = roadX + roadWidth / 2 - spriteW / 2 + 70;

  // constrain ensures walkXPos stays within the boundary
  if (!showCity) {
    walkXPos = constrain(walkXPos, leftBound, rightBound + 50); 
  }
  // no vertical movement so no constrain
  walkYPos = roadY - 180;
  
  //animating the sprites if the char is moving
  if (moving && millis() - lastMoveTime > frameDelay) 
  { walkFrame = (walkFrame + 1) % walkCols;
    lastMoveTime = millis(); //updates the last frame
  }

  image(walkingsprites[0][walkFrame], walkXPos, walkYPos, spriteW, spriteH);
  //transition to city scene
  if (walkXPos > rightBound + 30 && !showCity) 
  { showRoad = false;
    showCity = true;
    cityStartTime = millis();

    // stop traffic, background keeps playing
    if (trafficSound.isPlaying() == true)
    { trafficSound.stop();
      //console.log("Traffic sound stopped.");
    } 
    else 
    { // console.log("Traffic sound was not playing.");
    }
  }
}

////////////////////////////////////////////////////////////////
function keyPressed() {
// when keys pressed starts the sound and does looping
  if (keyCode == RIGHT_ARROW)
  { if (!trafficSound.isPlaying()) 
    { trafficSound.loop();
      trafficSound.setVolume(0.5);
    }
  }
}
///////////////////////////////////////////////////////////////////////////
function showCityScene() {

// for the background city scene, forest and the foreground images
  background(30);
  drawImageFullScreen(cityImages[cityFrame]);

  push();
  tint(255, cityAlpha); // for transparency --> fading effect
  drawImageFullScreen(cityImages[nextCityFrame]);
  pop();

  // fade logic
  cityAlpha += cityFadeSpeed;
  if (cityAlpha >= 255) 
  {
    cityFrame = nextCityFrame;
    nextCityFrame = (nextCityFrame + 1) % cityImages.length;
    cityAlpha = 0;
  }

  if (!wearingHeadphone) 
  {
    drawImageFullScreen(trainImage); 
  } 
  else 
  {  // if headphone flag --> false the the image1
    if (!HeadphoneFlag)
    {
      drawImageFullScreen(headphoneImage1);
      // starts the timer , if we are starting a timer without a flag like this it will reset everytime
      if (headphoneTimer == 0) 
      {
            headphoneTimer = millis() + 3000; 
      } 
      
      else if (millis() >= headphoneTimer) 
      {
            HeadphoneFlag = true;
            forestStartTime = millis();      
      }
    } 
    else 
    {
      elapsed1 = millis() - forestStartTime;
      if (elapsed1 < 10000)
      {
        // fade logic for forest images
        forestAlpha += 2; // fade speed
        if (forestAlpha >= 255) 
        { forestAlpha = 0;
          // swap forest images
          let temp = forestImg[0];
          forestImg[0] = forestImg[1];
          forestImg[1] = temp;

          // draw forest images with fading
          drawImageFullScreen(forestImg[0]);
          push();
          tint(255, forestAlpha);
          drawImageFullScreen(forestImg[1]);
          pop();
        }
     }
     else
     {
        drawImageFullScreen(forestImg[0]);
        headphoneCounter = 1;
        push();
        tint(255, forestAlpha);
        drawImageFullScreen(forestImg[1]);
        pop();

        forestAlpha += 2; 
        if (forestAlpha >= 255) 
        {
            forestAlpha = 0;
            let temp = forestImg[0];
            forestImg[0] = forestImg[1];
            forestImg[1] = temp;
        } 
     }

      drawImageFullScreen(headphoneImage2);
         
      if(HeadphoneFlag)
      {
        if (headphoneTimer2 == 0) 
        {
        headphoneTimer2 = millis();
        }
  
        let elapsed1 = millis() - headphoneTimer2;
        if (elapsed1 < 12000) 
        {
          drawImageFullScreen(headphoneImage3);
        } 
        else if (elapsed1>12000 && elapsed1<18000) 
        {
          drawImageFullScreen(headphoneImage4);
        }
        else if (elapsed1>18000 && elapsed1<26000)
        {
          drawImageFullScreen(headphoneImage5);
        } 
        else
        {
          drawImageFullScreen(homeImg1);
          drawImageFullScreen(homeImg2);
        }
      }  
        
    } 
  }


  if (millis() - cityStartTime < 5000) 
  { // 60 *5 s = 300 frames
  textSize(40);
  fill(255);
  textSize(20);
  text("Nothing can pull me out of this...", width / 2, height - 100);
  }
  else if(millis() - cityStartTime > 5000)
  {
  headphoneStart  = true;
  }
  if(headphoneStart && !wearingHeadphone)
  {
  headphonePop();
  textSize(15);
  text("Click the earphone to put it on", width/2 - 250, height- 50);
  }
  else if(wearingHeadphone)
  {
    textSize(20);
    text("playing HOME", width/2 - 300, height- 50);
    backgroundSound.stop();
    if (!earphoneMusic.isPlaying()) 
    {
        earphoneMusic.loop();
        earphoneMusic.setVolume(1);
        // started = false;
    }
  }
}
////////////////////////////////////////////////////////////////////////
function headphonePop() {
  let scaleFactor = 0.8; // scale down
  let imgW = headphoneImage.width * scaleFactor;
  let imgH = headphoneImage.height * scaleFactor;
  image(headphoneImage, width / 2, height / 2, imgW, imgH);
 // console.log("width and height",width,height); // added for locating height - 738 and width - 1127
}
////////////////////////////////////////////////////////////////
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.oncontextmenu = () => false; // disable right-click menu
