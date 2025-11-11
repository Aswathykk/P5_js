let started = false; // started or not
let intro;

////Intro-stick////
let stick = [];
let stickIndex = 0;
let stickPlaying = false;
let stickFrameDelay = 20; // controls animation speed
let stickCounter = 0;

////FIRST SCENE//////////
let bgImages = [];   // holds all backgrounds
let currentScene = 0;
let walkPath;
let frScene = false ;
let girlWalk, grandmaWalk;

// ---- GIRL SPRITE SYSTEM ----
let girlSpriteSheet;
let spriteCols = 6;
let spriteRows = 3;
let spriteScale = 0.25;
let spriteW, spriteH;

let girlX = 0;
let girlY;

let currentRow = 0;   // 0 = right, 1 = left, 2 = fast left
let currentCol = 0;

let frameDelay = 5;   // animation speed
let frameCounter = 0;

let moving = false;
let moveSpeed = 6;

// ---- GRANDMA SPRITE SYSTEM ----
let grandmaSpriteSheet;
let grandmaCols = 5;
let grandmaRows = 2;
let grandmaW, grandmaH;
let grandmaScale = 0.23;

let grandmaX = 0;
let grandmaY = 0;

let grandmaRow = 0;   // 0 = walk, 1 = tired
let grandmaCol = 0;

let grandmaFrameDelay = 15;
let grandmaFrameCounter = 0;
let grandmaStartedWalking = false;
let prevGrandmaX = 0;



// lag speed controls
let grandmaSpeed = 3;      // normal speed
let grandmaStopped = false;
let grandmaScene = 0;  // she starts in scene 0
let faceTface ; 
let gAndG = [];

let showFace = false;
let faceStart = 0;
let faceShownOnce = false;

let inMergedMode = false;   // after faceTface finishes
let mergedSpriteCol = 0;
let mergedFrameCounter = 0;
let mergedFrameDelay = 12;

// gAndG sprite sizes
let ggCols = 5;
let ggRows = 1;
let ggW, ggH;

let faceTriggerScene = -1;   // scene where face event should happen

let togetherG;

let inTogetherMode = false;
let togetherCol = 0;
let togetherFrameCounter = 0;
let togetherFrameDelay = 10;

let togetherW, togetherH;
let togetherCols = 4;
let togetherRows = 1;
 let finalImage;
let showFinalImage = false;
let togetherBox = null;
let finalBackg;
let finalImage2;

let inFinalBackgMode = false;
let finalBackgStart = 0;
let showFinalImage2 = false;
let endSequence = false;  // stops ALL drawing except finalImage2
let benchImg;
let finalimagefinal;
let showEndImage = false;

let gAndGSpeed = 3;    // you can change this
let gAndGAnimationSpeed = 8;  // lower = faster animation
let togetherScale = 0.55;
let togetherSpeed = 1.5;  // lower = slower
let fireworks = []; 
let firecrack = [];     // images stay same

let fireIndex = 0;
let fireFrameDelay = 8;   // speed of animation
let fireCounter = 0;
let fireActive = false;   // animation starts after finalImage appears

let bgMusic;
let coughSound;
let canCough = true;   // prevents repeated spamming

let coughing = false;         // currently looping?
let nextCoughTime = 0;        // when next cough should play
let coughDisabledForever = false;
let fireworksSound;

let sceneText = "";


// Cough variables
let coughIntervalMin = 3000; // minimum time between coughs (ms)
let coughIntervalMax = 5000; // maximum time between coughs
//let nextCoughTime = 0;       // next scheduled cough
let isCoughing = false;      // tracks if cough is currently playing
let forceHappyEnding = false;
let gandgBackgnd ;
let breathing;
let breathingPlayed = false;
let breathing1;
let breathingPlayed1 = false;
let breathing2;
let breathingPlayed2 = false;
let breathing3;
let breathingPlayed3 = false;
let breathing4;
let breathingPlayed4 = false;
let breathing5;
let breathingPlayed5 = false;

////////////IMAGE LOADING////////////
function preload() {
  intro = loadImage('images/intro1.png');
  for (let i = 0; i < 6; i++) {
    stick[i] = loadImage(`images/hand${i+1}.png`); 
  }
  
  walkPath = loadImage('images/Illustration1457.png');
  bgImages = [
    loadImage('images/Illustration146.png'),   // bg1
    loadImage('images/Illustration1192.png'),  // bg2
    loadImage('images/iluu32.jpg'),    // bg3
    loadImage('images/Illustration121.png'),   // bg4
    loadImage('images/Illustration122.png'),  // bg5
    loadImage('images/Illustration123.png')     // bg6
  ];
  girlSpriteSheet  = loadImage('images/Illustration137.png');
  grandmaSpriteSheet  = loadImage('images/grandma.png');
  faceTface = loadImage('images/Illustration141.png');
  gAndG = loadImage('images/Illustration140.png');
  togetherG = loadImage('images/Illustration103.png');
  finalImage = loadImage('images/Illustration14211.png');
   finalBackg = loadImage('images/intro2.png');
   finalImage2 = loadImage('images/ggg.png');
   benchImg = loadImage('images/bench.png');
   finalimagefinal = loadImage('images/Illustration143.png');
   firecrack[0]=loadImage('images/1.png');
   firecrack[1]=loadImage('images/Illustration144d.png');
   firecrack[2]=loadImage('images/Illustration144.png');
   firecrack[3]=loadImage('images/2.png');
    firecrack[4]=loadImage('images/3.png');
    firecrack[5]=loadImage('images/4.png');
    gandgBackgnd = loadImage('images/Illustration1462.png');

    bgMusic = loadSound('assets/softpiano.mp3');

    coughSound = loadSound('assets/femalecough.mp3');
fireworksSound = loadSound('assets/firecrackers.mp3');  
breathing =   loadSound('assets/heavybreathing.mp3');
breathing1 =   loadSound('assets/heavybreathing.mp3');
breathing2 =   loadSound('assets/heavybreathing.mp3');
breathing3 =   loadSound('assets/heavybreathing.mp3');
breathing4 =   loadSound('assets/heavybreathing.mp3');
breathing5 =   loadSound('assets/heavybreathing.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);

  girlY = height / 2+145+50;
  // sprite size
  spriteW = girlSpriteSheet.width / spriteCols;
  spriteH = girlSpriteSheet.height / spriteRows;
// Grandma starts same as girl
grandmaW = grandmaSpriteSheet.width / grandmaCols;
grandmaH = grandmaSpriteSheet.height / grandmaRows;

grandmaX = girlX;
grandmaY = girlY;

ggW = gAndG.width / ggCols;
ggH = gAndG.height / ggRows;

togetherW = togetherG.width / togetherCols;
togetherH = togetherG.height / togetherRows;


  //   console.log(intro);
// console.log(bg1);
// console.log(walkPath);


}

////////DRAW///////////
function draw() {
  handleCoughLoop();
  // If happy ending is forced → ignore sad ending
if (forceHappyEnding) {
    showEndImage = false;    // disable sad ending
}

  // Final image override (together mode)
if (showFinalImage) {
    drawImageFullScreen(finalImage);
      if (fireActive) drawFireAnimation();   

    return;
}

      
    if (showEndImage) {
        drawImageFullScreen(finalimagefinal);
    textFont("Georgia");
    textSize(25);
    fill(255);
    noStroke();
    text(
        "without my glasses,\neven the brightest day feels like darkness.\nIt’s alright to be a little selfish sometimes…\nchoose your own light.\nThis old woman will wait in the shade.",
        width / 2,
        height - 120
    );
        return;
    }
      // If finalseq running → ONLY show finalImage2
    if (endSequence) {
        drawImageFullScreen(finalImage2);
        return;
    }
// Fullscreen finalImage2
if (showFinalImage2) {
    drawImageFullScreen(finalImage2);
    return;
}

// // Final image override (together mode)
// if (showFinalImage) {
//     drawImageFullScreen(finalImage);
//       if (fireActive) drawFireAnimation();  

//     return;
// }


//////////////INTRO///////////  
  if (!started) {
    drawImageFullScreen(intro);
    textFont('Georgia');
    textSize(70);
    text("The People We Leave Behind", width / 2, height / 2);
    textSize(50);
    text("         ", width / 2, height / 2 + 50);
    textSize(30);
    text("Click to start", width / 2, height / 2 + 50);
    
    return;
  }

/////////////STICK ANIMATION///////////
  if (stickPlaying) 
  {
    drawImageFullScreen(stick[stickIndex]);

    // Center text
    textSize(45);
    text(
      "Grandma, here is your stick…",
      width / 2,
      height / 2
    );
    text(
      "come fast!",
      width / 2,
      height / 2+60
    );
    text(
      "We’ll miss the fireworks!",
      width / 2,
      height / 2+120
    );
    // Play animation frame-by-frame
    stickCounter++;
    if (stickCounter > stickFrameDelay) 
    {
      stickCounter = 0;
      stickIndex++;
      if (stickIndex >= stick.length) 
      {
        stickPlaying = false; // animation ends
        frScene = true; 
      }
    }
    return;
  }

  if (frScene) 
  {
    firstScene();
    return;
  }
  // After 5s of finalBackgMode → show finalImage2
if (inFinalBackgMode && !showFinalImage2) {
    if (millis() - finalBackgStart > 3000) {
        showFinalImage2 = true;
    }
}
if (showEndImage) {
    drawImageFullScreen(finalimagefinal);
    return;
}


}

///////FUNCTIONS/////////////////////////

////SCENE1//////////////
function firstScene(){

  sceneText = "";  // reset scene text at start
handleSceneEvents(currentScene);  // ensure the correct scene text is set

   // 1 — FINAL IMAGE OVERRIDE
    if (showFinalImage2) {
        drawImageFullScreen(finalImage2);
        return;
    }
  // If merged mode started → draw merged mode scene
  // MERGED MODE (gAndG sprite)
if (inMergedMode) {

  
    drawImageFullScreen(gandgBackgnd);
    drawImageFullScreen(walkPath);
    drawMergedSprite();
    updateMergedMovement();

    textFont("Georgia");
    textSize(24);
    fill(255);
    noStroke();
    text(
        "Grandmaa… hold my hand tighter…\ngo slow… my legs are small…\ndo not let go, okay?",
        width / 2,
        height - 100
    );
    grandmaStopped = false;

    return;
}

  // If in together mode
if (inTogetherMode) {
    drawImageFullScreen(bgImages[0]);   // bg6
    drawImageFullScreen(walkPath);

      let boxW = 200*0.8;
    let boxH = 100*0.8;
    let boxX = bgRightX - boxW / 2-150;
    let boxY = girlY - 100+150;

        // Draw bench inside the box 
    if (benchImg) {
        image(
            benchImg,
            boxX, boxY,
            boxW * 2, boxH * 2
        );
    }

    drawTogetherSprite();
    updateTogetherMovement();

    
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);

    // let boxW = 200;
    // let boxH = 100;
    // let boxX = bgRightX - boxW / 2-150;
    // let boxY = girlY - 100+150;

    //  
    // if (benchImg) {
    //     image(
    //         benchImg,
    //         boxX, boxY,
    //         boxW * 2, boxH * 2
    //     );
    // }

    // // draw box
    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(3);
    // rectMode(CENTER);
    // rect(boxX, boxY, boxW, boxH);

    // store box bounds for mousePressed
    togetherBox = { x: boxX, y: boxY, w: boxW*2, h: boxH*2 };

    return;
}


  
  if (showFace) {
      drawImageFullScreen(faceTface);
     
    textFont("Georgia");
    textSize(26);
    fill(255);
    noStroke();
    text(
        "don't worry.\nThese old legs shake a little,\nbut I am alright.\nYou came back… and that is enough for me.",
        width / 2,
        height - 120
    );

      // After 5 seconds → switch to merged mode
      if (millis() - faceStart > 3000) {
          showFace = false;
          inMergedMode = true;   // switch to new mode
      }
      return;
  }

 drawSceneBackground();// background
 if (sceneText !== "") {
    textFont("Georgia");
    textSize(25);
    fill(255);
    noStroke();
    text(sceneText, width/2, height - 70);
}

 // Set correct initial x inside bg
 let startX = bgLeftX + (grandmaW * spriteScale) / 2;
if (girlX === 0)      girlX = startX;
if (grandmaX === 0)   grandmaX = startX;

// if (girlX === 0) {
//     girlX = bgLeftX + (grandmaW * spriteScale) / 2;  // same as grandma
// }

//   if (grandmaX === 0) {
//   grandmaX = bgLeftX + (grandmaW * spriteScale) / 2;
//   grandmaY = girlY; 
// }
 
if (grandmaScene === currentScene) {
    drawGrandmaSprite();
    updateGrandmaMovement();
}


// Draw girl
drawGirlSprite();

// Move girl AFTER grandma logic is correct
updateGirlMovement();

if (currentScene === 5) {

    if (showFinalImage2) {
        drawImageFullScreen(finalImage2);
        return;
    }

    // If in finalBackgMode → draw final background, then sprites, then box
    if (inFinalBackgMode) {

        drawImageFullScreen(finalBackg);
        drawImageFullScreen(walkPath);

        drawGirlSprite();
        if (grandmaScene === currentScene) {
            drawGrandmaSprite();
        }

        let boxW = 200;
        let boxH = 100;
        let boxX = bgRightX - boxW / 2;
        let boxY = girlY - 100;

        noFill();
        stroke(255, 0, 0);
        strokeWeight(3);
        rectMode(CENTER);
        rect(boxX, boxY, boxW, boxH);

        togetherBox = { x: boxX, y: boxY, w: boxW, h: boxH };

        if (sceneText !== "") {
            textFont("Georgia");
            textSize(25);
            fill(255);
            noStroke();
            text(sceneText, width / 2, height - 70);
        }
        return;
    }

    // NORMAL BG6
    drawImageFullScreen(bgImages[5]);
    drawImageFullScreen(walkPath);

        let boxW = 200*0.8;
    let boxH = 100*0.8;
    let boxX = bgRightX - boxW / 2-150;
    let boxY = girlY - 100+150;
 
    // bench inside the rectangle
if (benchImg) {
  image(
    benchImg,
    boxX, boxY,
    boxW * 2, boxH * 2
  );
}

    drawGirlSprite();
    if (grandmaScene === currentScene) {
        drawGrandmaSprite();
    }

//     let boxW = 200;
//     let boxH = 100;
//     let boxX = bgRightX - boxW / 2-150;
//     let boxY = girlY - 100+150;
 
// if (benchImg) {
//   image(
//     benchImg,
//     boxX, boxY,
//     boxW * 2, boxH * 2
//   );
// }
    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(3);
    // rectMode(CENTER);
    // rect(boxX, boxY, boxW, boxH);

    togetherBox = { x: boxX, y: boxY, w: boxW*2, h: boxH*2 };
   
        if (sceneText !== "") {
            textFont("Georgia");
            textSize(25);
            fill(255);
            noStroke();
            text(sceneText, width / 2, height - 70);
        }
    return;
}


}
function drawTogetherSprite() {
  let sx = togetherCol * togetherW;
  let sy = 0;

  image(
    togetherG,
    girlX, girlY+20,
    togetherW * togetherScale,
    togetherH * togetherScale,
    sx, sy, togetherW, togetherH
  );
}
function updateTogetherMovement() {

  // move right
  if (keyIsDown(RIGHT_ARROW)) {
    girlX += togetherSpeed;   // little slower and cute

    togetherFrameCounter++;
    if (togetherFrameCounter > togetherFrameDelay) {
      togetherFrameCounter = 0;
      togetherCol = (togetherCol + 1) % togetherCols;
    }
  }

  // constrain inside bg
  girlX = constrain(
    girlX,
    bgLeftX + (togetherW * spriteScale) / 2,
    bgRightX - (togetherW * spriteScale) / 2
  );
}

function drawSceneBackground() {
  let img = bgImages[currentScene];

  drawImageFullScreen(img);  // scales + sets bgLeftX/bgRightX

  drawImageFullScreen(walkPath);  // walk path stays on top
}
function drawGrandmaSprite() {
  let sx = grandmaCol * grandmaW;
  let sy = grandmaRow * grandmaH;

  image(
    grandmaSpriteSheet,
    grandmaX, girlY+2+30,                      // same Y logic as girl
    grandmaW * grandmaScale,               // same scale
    grandmaH * grandmaScale,
    sx, sy, grandmaW, grandmaH
  );
}

function drawMergedSprite() {
    let sx = mergedSpriteCol * ggW;
    let sy = 0;
    let gAndGScale = 0.35;   // change size here


    image(
        gAndG,
        girlX, girlY,                 // reusing girlX/Y as merged position
        ggW * gAndGScale,
        ggH * gAndGScale,
        sx, sy, ggW, ggH
    );
}

function updateMergedMovement() {
    if (keyIsDown(RIGHT_ARROW)) {
        girlX += moveSpeed * 0.5;  
        mergedFrameCounter++;
        if (mergedFrameCounter > mergedFrameDelay) {
            mergedFrameCounter = 0;
            mergedSpriteCol = (mergedSpriteCol + 1) % ggCols;
        }
    }

    // keep merged sprite inside background bounds
    girlX = constrain(
        girlX,
        bgLeftX + (ggW * spriteScale) / 2,
        bgRightX - (ggW * spriteScale) / 2
    );
    // when merged sprite reaches right edge → go to bg6 and switch mode
if (girlX >= bgRightX - (ggW * spriteScale) / 2) {

    currentScene = 5;       // bg6 index
    inMergedMode = false;
    inTogetherMode = true;
 // place girl at left edge of BG6
    girlX = bgLeftX + (togetherW * spriteScale) / 2;
    // reset frame
    togetherCol = 0;
}

}


function drawGirlSprite() {
  if (!girlSpriteSheet) return;

  spriteW = girlSpriteSheet.width / spriteCols;
  spriteH = girlSpriteSheet.height / spriteRows;

  let sx = currentCol * spriteW;
  let sy = currentRow * spriteH;

  image(
    girlSpriteSheet,
    girlX, girlY+30,
    spriteW * spriteScale,
    spriteH * spriteScale,
    sx, sy, spriteW, spriteH
  );
}

function updateGrandmaMovement() {

  let oldX = grandmaX;   // save before movement happens
  // distance between girl & grandma
  let distG = girlX - grandmaX;

  // Grandma ONLY moves right with girl
  if (keyIsDown(RIGHT_ARROW)) {

    // CASE 1: close to girl → normal walk (row 0)
    if (distG < 100) {
      grandmaRow = 0;
      grandmaX += moveSpeed * 0.3;    // almost same speed
    }

    // CASE 2: falling behind → row 1 (tired)
    else if (distG >= 100 && distG <= 350) {
      grandmaRow = 1;
      grandmaX += moveSpeed * 0.15;    // slower
      
      if (canCough && coughSound) {
    coughSound.setVolume(0.8);
    coughSound.play();
    canCough = false;

    // reset cough ability after 3 seconds
    setTimeout(() => { canCough = true; }, 3000);
}

    }

    // CASE 3: too far → STOP but animate row 1
    else if (distG > 250) {
    grandmaRow = 1;
    grandmaStopped = true;

    if (canCough && coughSound) {
    coughSound.setVolume(0.8);
    coughSound.play();
    canCough = false;

    // reset cough ability after 3 seconds
    setTimeout(() => { canCough = true; }, 3000);
}

    // remember which scene grandma stopped in
    if (faceTriggerScene === -1) {
        faceTriggerScene = currentScene;
    }
}



  } else {
    //grandmaStopped = false;
}

  // SAME CONSTRAIN LOGIC AS GIRL
  grandmaX = constrain(
    grandmaX,
    bgLeftX + (grandmaW * spriteScale) / 2,
    bgRightX - (grandmaW * spriteScale) / 2
  );
  // detect first actual movement of grandma 
if (!grandmaStartedWalking && grandmaX !== oldX) {
    grandmaStartedWalking = true;
}


// animation should run ONLY after she has moved 
if (grandmaStartedWalking) {
    grandmaFrameCounter++;
    if (grandmaFrameCounter > grandmaFrameDelay) {
        grandmaFrameCounter = 0;
        grandmaCol = (grandmaCol + 1) % grandmaCols;
    }
} else {
    // stay idle (col 0) at the beginning
    grandmaCol = 0;
}



}


function updateGirlMovement() {
  let walking = false;
// When reaching right end, go to next scene
if (girlX >= bgRightX - (spriteW * spriteScale) / 2) {
  goToNextScene();
}
// When reaching left end, go to previous scene
if (keyIsDown(LEFT_ARROW) &&
    girlX <= bgLeftX + (spriteW * spriteScale) / 2) {
    goToPreviousScene();
}



  // RIGHT ARROW 
  if (keyIsDown(RIGHT_ARROW)) {
    currentRow = 0; // right
    girlX += moveSpeed*0.5;
    walking = true;
  }

  // LEFT ARROW 
  if (keyIsDown(LEFT_ARROW)) {

    if (keyIsDown(CONTROL)) {
      currentRow = 2; // fast left
      girlX -= moveSpeed * 0.8;
    } else {
      currentRow = 1; // normal left
      girlX -= moveSpeed*0.5;
    }

    walking = true;
  }

  // CONSTRAIN INSIDE BG IMAGE
  girlX = constrain(
    girlX,
    bgLeftX + (spriteW * spriteScale) / 2,
    bgRightX - (spriteW * spriteScale) / 2
  );
  // Animate only when walking
  if (walking) {
    frameCounter++;
    if (frameCounter > frameDelay) {
      frameCounter = 0;
      currentCol = (currentCol + 1) % spriteCols; // LOOP animation correctly
    }
  }
  // Show faceTface ONLY first time girl meets stopped grandma
if (!faceShownOnce &&
    grandmaStopped &&
    currentScene === faceTriggerScene &&
    abs(girlX - grandmaX) < 40) 
{
    showFace = true;
    faceStart = millis();
    faceShownOnce = true;
       // Stop coughing forever
    coughDisabledForever = true;
    if (coughSound) coughSound.stop();
}


}
function goToNextScene() {
  currentScene++;

  if (currentScene >= bgImages.length) {
    currentScene = bgImages.length - 1; // stop at last
    return;
  }

// reset girl to left of new background
girlX = bgLeftX + (spriteW * spriteScale) / 2;

if (!grandmaStopped) {
    grandmaX = bgLeftX + (grandmaW * spriteScale) / 2;
    grandmaScene = currentScene;   // grandma enters this new scene
}

  // Reset animation
  currentCol = 0;

  handleSceneEvents(currentScene);

}

function goToPreviousScene() {

sceneText = "";  // reset scene text at start
handleSceneEvents(currentScene);  // ensure the correct scene text is set

  currentScene--;

  if (currentScene < 0) {
    currentScene = 0;   // stop at first scene
    return;
  }

  // place girl at right edge of the new scene
  girlX = bgRightX - (spriteW * spriteScale) / 2;

  currentCol = 0;  // reset animation frame

  handleSceneEvents(currentScene);
}

function handleSceneEvents(sceneIndex) {
   if (grandmaScene === sceneIndex) {
        if (breathing && breathing.isPlaying()) breathing.stop();
        breathingPlayed = false;

        if (breathing1 && breathing1.isPlaying()) breathing1.stop();
        breathingPlayed1 = false;

        if (breathing2 && breathing2.isPlaying()) breathing2.stop();
        breathingPlayed2 = false;

        if (breathing3 && breathing3.isPlaying()) breathing3.stop();
        breathingPlayed3 = false;

        if (breathing4 && breathing4.isPlaying()) breathing4.stop();
        breathingPlayed4 = false;

        if (breathing5 && breathing5.isPlaying()) breathing5.stop();
        breathingPlayed5 = false;
         return;   
      }

      sceneText = "";  // reset for every scene

          // Reset all breathing flags first
    breathingPlayed = false;
    breathingPlayed1 = false;
    breathingPlayed2 = false;
    breathingPlayed3 = false;
    breathingPlayed4 = false;
    breathingPlayed5 = false;

    // Reset all breathing sounds
    if (breathing && breathing.isPlaying()) breathing.stop();
    if (breathing1 && breathing1.isPlaying()) breathing1.stop();
    if (breathing2 && breathing2.isPlaying()) breathing2.stop();
    if (breathing3 && breathing3.isPlaying()) breathing3.stop();
    if (breathing4 && breathing4.isPlaying()) breathing4.stop();
    if (breathing5 && breathing5.isPlaying()) breathing5.stop();
        
  switch(sceneIndex) {

    case 0:
      sceneText = "  ...   ";
      // stop breathing when leaving scene 1
      if (breathing && breathing.isPlaying()) breathing.stop();
      breathingPlayed = false;
      if (breathing1 && breathing1.isPlaying()) breathing1.stop();
      breathingPlayed1 = false;
      if (breathing2 && breathing2.isPlaying()) breathing2.stop();
      breathingPlayed2 = false;
      if (breathing3 && breathing3.isPlaying()) breathing3.stop();
      breathingPlayed3 = false;
      if (breathing4 && breathing4.isPlaying()) breathing4.stop();
      breathingPlayed4 = false;
      break;

    case 1:
       sceneText = "That night you cried in fever,\nI stayed awake.\nI always will.";
       if (breathing1 && breathing1.isPlaying()) breathing1.stop();
      breathingPlayed1 = false;
      if (breathing4 && breathing4.isPlaying()) breathing4.stop();
      breathingPlayed4 = false;
      if (breathing2 && breathing2.isPlaying()) breathing2.stop();
      breathingPlayed2 = false;
      if (breathing3 && breathing3.isPlaying()) breathing3.stop();
      breathingPlayed3 = false;
      
      if (!breathingPlayed) {
        if (breathing && !breathing.isPlaying()) {
          breathing.setVolume(0.8);
          breathing.loop();
        }
        breathingPlayed = true;
      }
      break;

    case 2:
      sceneText = "Eat a little more,\nyour tummy shouldn not stay empty.";
       
      if (breathing && breathing.isPlaying()) breathing.stop();
      breathingPlayed = false;
      if (breathing4 && breathing4.isPlaying()) breathing4.stop();
      breathingPlayed4 = false;
      if (breathing2 && breathing2.isPlaying()) breathing2.stop();
      breathingPlayed2 = false;
      if (breathing3 && breathing3.isPlaying()) breathing3.stop();
      breathingPlayed3 = false;
      if (!breathingPlayed1) {
        if (breathing1 && !breathing1.isPlaying()) {
          breathing1.setVolume(1);
          breathing1.loop();
        }
        breathingPlayed1 = true;
      }
      break;

    case 3:

    sceneText = "You learned your first words on my lap,\nI knew you would fly far.";
       
      if (breathing && breathing.isPlaying()) breathing.stop();
      breathingPlayed = false;
      if (breathing1 && breathing1.isPlaying()) breathing1.stop();
      breathingPlayed1 = false;
      if (breathing4 && breathing4.isPlaying()) breathing4.stop();
      breathingPlayed4 = false;
      if (breathing3 && breathing3.isPlaying()) breathing3.stop();
      breathingPlayed3 = false;
      if (!breathingPlayed2) {
        if (breathing2 && !breathing2.isPlaying()) {
          breathing2.setVolume(1.2);
          breathing2.loop();
        }
        breathingPlayed2 = true;
      }
      break;

    case 4:
      sceneText = "let me oil your hair.\nIt is the only way these old hands still feel useful.";
       
      if (breathing && breathing.isPlaying()) breathing.stop();
      breathingPlayed = false;
      if (breathing1 && breathing1.isPlaying()) breathing1.stop();
      breathingPlayed1 = false;
      if (breathing2 && breathing2.isPlaying()) breathing2.stop();
      breathingPlayed2 = false;
      if (breathing4 && breathing4.isPlaying()) breathing4.stop();
      breathingPlayed4 = false;
      if (!breathingPlayed3) {
        if (breathing3 && !breathing3.isPlaying()) {
          breathing3.setVolume(1.4);
          breathing3.loop();
        }
        breathingPlayed3 = true;
      }
      break;

    case 5:
      sceneText = "Live your life,\nbut remember,\nI will always wait at home for you.";
      
      if (breathing && breathing.isPlaying()) breathing.stop();
      breathingPlayed = false;
      if (breathing1 && breathing1.isPlaying()) breathing1.stop();
      breathingPlayed1 = false;
      if (breathing2 && breathing2.isPlaying()) breathing2.stop();
      breathingPlayed2 = false;
      if (breathing3 && breathing3.isPlaying()) breathing3.stop();
      breathingPlayed3 = false;
      if (!breathingPlayed4) {
        if (breathing4 && !breathing4.isPlaying()) {
          breathing4.setVolume(1.6);
          breathing4.loop();
        }
        breathingPlayed4 = true;
      }
      break;
  }
  
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentRow = 0;
  }

  if (keyCode === LEFT_ARROW) {
    if (keyIsDown(CONTROL)) currentRow = 2;
    else currentRow = 1;
  }
}



function keyReleased() {
  // stop when the movement key is released
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    moving = false;
    // freeze on the last frame (do not reset col)
  }
}

//////////IMAGE RESIZING///////////
let bgLeftX = 0;
let bgRightX = 0;

function drawImageFullScreen(img) {
  if (!img || img.width === 0 || img.height === 0) return;

  let imgRatio = img.width / img.height;
  let canvasRatio = width / height;
  let drawWidth, drawHeight;

  if (canvasRatio > imgRatio) {
    drawHeight = height;
    drawWidth = drawHeight * imgRatio;
  } else {
    drawWidth = width;
    drawHeight = drawWidth / imgRatio;
  }

  //Store the bounds ONLY when drawing bg1
 if (img === bgImages[currentScene]) 
{
    bgLeftX = width / 2 - drawWidth / 2;
    bgRightX = width / 2 + drawWidth / 2;
  }

  image(img, width / 2, height / 2, drawWidth, drawHeight);
}

function girlAndGrandmaTouching() {
  return abs(girlX - grandmaX) < 40;   
}


//////////CLICK TO START//////////
function mousePressed() {
  if (!started) {
    started = true;
    stickPlaying = true;
    stickIndex = 0;
        if (bgMusic && !bgMusic.isPlaying()) {
        bgMusic.setVolume(0.15); // adjust loudness
        bgMusic.loop();         // loops forever
    }
  }
  // Click on the square ONLY in together mode
if (inTogetherMode && togetherBox && !showFinalImage) {
    let bx = togetherBox.x - togetherBox.w/2;
    let by = togetherBox.y - togetherBox.h/2;

    if (mouseX > bx && mouseX < bx + togetherBox.w &&
        mouseY > by && mouseY < by + togetherBox.h) {

        showFinalImage = true;  // show final scene
            fireActive = true;     // start fire animation
            createFireworks();

            if (fireworksSound && !fireworksSound.isPlaying()) {
    fireworksSound.setVolume(0.5);  // adjust volume
    fireworksSound.play();           // play once
}


    }
}
// Girl-alone mode in BG6 → change to finalBackg
// BG6 normal mode → click rectangle → show final image ONCE

if (currentScene === 5 &&
    !inMergedMode &&
    !inTogetherMode &&
    togetherBox) {

    // Calculate the actual box area
    let bx = togetherBox.x - togetherBox.w / 2;
    let by = togetherBox.y - togetherBox.h / 2;

    if (mouseX > bx && mouseX < bx + togetherBox.w &&
        mouseY > by && mouseY < by + togetherBox.h) {

        // HAPPY ENDING (girl & grandma together)
        if (grandmaScene === 5) {

            forceHappyEnding = true;
            showFinalImage = true;    // show finalImage
            fireActive = true;        // fireworks
            createFireworks();

            if (fireworksSound && !fireworksSound.isPlaying()) {
                fireworksSound.setVolume(0.5);
                fireworksSound.play();
            }

            return;
        }

        // SAD ENDING (girl alone)
        if (!showEndImage) {
            showEndImage = true;      // show finalimagefinal
            return;
        }
    }
}

}
function drawFireAnimation() {
    for (let fw of fireworks) {

        let img = firecrack[fw.index];

        image(
            img,
            fw.x, fw.y,
            img.width * fw.scale,
            img.height * fw.scale
        );

        fw.counter++;
        if (fw.counter > fw.frameDelay) {
            fw.counter = 0;
            fw.index = (fw.index + 1) % firecrack.length;
        }
    }
     if (showFinalImage) {
        textFont("Georgia");
        textSize(26);
        fill(255);
        noStroke();
        text(
            "Grandma… I am here.\nI am not going anywhere.\nWherever you are… that is home for me..",
            width / 2,
            height - 120
        );
    }
}

function createFireworks() {
    fireworks = [];  // reset

    // create 6 fireworks
    for (let i = 0; i < 6; i++) {
        fireworks.push({
            x: 80 + random(150, 450),    // small random shift in top-left area
            y: 80 + random(60, 400),
            index: floor(random(firecrack.length)), // start at random frame
            frameDelay: 6 + floor(random(4)),        // each has slightly different speed
            counter: 0,
            scale: 0.45 + random(0.25)                // different sizes
        });
    }
}
function handleCoughLoop() {
    // If coughing permanently disabled
    if (coughDisabledForever) {
        if (coughSound && coughSound.isPlaying()) {
            coughSound.setVolume(0.05); // very low volume
        }
        return;
    }

    //Stop cough when girl comes near grandma (distance < 40px)
let girlGrandmaDist = abs(girlX - grandmaX);
if (girlGrandmaDist < 20) {
    if (coughSound && coughSound.isPlaying()) {
        coughSound.stop();
    }
    return; // skip the rest of cough logic
}


    // Grandma is tired (row 1) AND girl is still in same scene
    if (grandmaRow === 1 && currentScene === faceTriggerScene) {
        if (!coughSound.isPlaying()) {
            coughSound.setVolume(0.4);
            coughSound.loop();
        } else {
            coughSound.setVolume(0.4); // ensure loud volume
        }
    } 
    // Grandma stopped (distance > 250) OR girl moves to next scene
    else if (grandmaStopped && currentScene !== faceTriggerScene) {
        if (coughSound && coughSound.isPlaying()) {
            let currentVol = coughSound.getVolume();
            let targetVol = 0.05;   // very soft
            let fadeSpeed = 0.005;  // smooth fade per frame

            if (currentVol > targetVol) {
                currentVol -= fadeSpeed;
                if (currentVol < targetVol) currentVol = targetVol;
                coughSound.setVolume(currentVol);
            }
        }
    }
}
