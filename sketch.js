let song;
let sceneNumber = 1;
var img;
var slider;
let value = 0;
let button1;
var balls = [];
var gravity = 0.3;

function preload() {
  // load any assets (images, sounds, etc.) here
  img1 = loadImage('assets/Dead Silence.jpg');
  song = loadSound('assets/Horror1.mp3');
  song1 = loadSound('assets/Horror2.mp3');
  song2 = loadSound('assets/Happy3.mp3');
}

//----Setup and Draw
function setup() {
  createCanvas(windowWidth,windowHeight);

  //Establishing text style
  textAlign(CENTER);
  // textSize(18);

  
  //Making "back" and "next" buttons to go between scenes
  buttons.push(makeSceneButton(0,  windowHeight - 80, 80, "<< BACK"));
  buttons.push(makeSceneButton(460,windowHeight - 80, 80, "NEXT >>"));

  button1 = createButton("TRY Click BGM Button AND Me");
  button1.mouseClicked(moveButton);
  button1.size(120,50);
  button1.position(550, windowHeight/13*7.6);
  button1.style("font-family", "Bodoni");
  button1.style("font-size", "15px");

  // Parameter of slider
  slider1 = createSlider(0,windowHeight/10*3,windowHeight/10*3/2.2);
  // Position of slider
  slider1.position(545, windowHeight - 150/4);
  slider1.style('width','150px');

  
 // balls.push(new Ball(50,40,100));

  a = new Ball(300, 10, 50); 
  b = new Ball(500, 100, 30);
  c = new Ball(300, 300, 10);
  d = new Ball(300, 100,20);
  e = new Ball(250, 90,35);
  f = new Ball(350,  -10,60);
  g = new Ball(350, -20,25);
  h = new Ball(550, 70,100);
  i = new Ball(650,  150,60);
  j = new Ball(750, 200,30);
  k = new Ball(850, -70,20);
  l = new Ball(750, -100,40);
  m = new Ball(550, -200,80);
  n = new Ball(680, -50,40);
  o = new Ball(530, -20,90);
  p = new Ball(360, 50,40);
  q = new Ball(1000, 150,60);
}

function draw() {
  sceneDrawer(sceneNumber);  //Draw a scene based on the Scene Number
  noStroke();
  fill(0);
  textSize(18);
  rect(85,  windowHeight - 80, 120, 80);
  rect(210, windowHeight - 80, 120, 80);
  rect(335, windowHeight - 80, 120, 80);
  fill(255);
  text('BGM Scene 1', 145, windowHeight - 35);
  text('BGM Scene 2', 270, windowHeight - 35);
  text('BGM Scene 3', 395, windowHeight - 35);
  text('Click to Start/Stop BGM', 650, windowHeight - 150/4);

  for(let b = 0; b < buttons.length; b++) {
    hoveredOverButton(buttons[b]);
    drawSceneButton(buttons[b]);
  }
}


//----Drawing Scenes
function drawScene1() {
  background(0);
    // 控制空格键
  fill(value);

  rect(85, 75, 400, 70);  
  rect(85, 405, 400, 70);
  rect(85, 735, 400, 70);
  rect(85, 160, 70, 230);
  rect(415, 490, 70, 230);

  rect(565, 75, 400, 70);
  rect(565, 735, 400, 70);
  rect(565, 165, 70, 560);
  rect(895, 165, 70, 560);

  rect(1045, 75, 400, 70);  
  rect(1045, 405, 400, 70);
  rect(1045, 735, 400, 70);
  rect(1045, 160, 70, 230);
  rect(1375, 490, 70, 230);

  rect(1530,75,70,615);
  rect(1530,715,70,90);


 for(let x = 30; x < width; x += 80){
  for(let y = 30; y < height; y += 80){
    drawEye(x, y);
    drawEye(x + 20, y);
  }
}

  textSize(45);
  text("PLEASE CLICK SPACE BAR !!!", 550, windowHeight/13*10);
  
  //Draw ALL the Breathing Circles
  for(let bc = 0; bc < breathingCircles.length; bc++) {
    drawBC(breathingCircles[bc]);
  }
}


function keyPressed() {
  if (value === 0) {
    value = 128 ;
  } else {
    value = 0;
  }
}


function moveButton() {
  button1.position (random(width), random(height));
}


//Scene 2
function drawScene2() {
  background(200);

  // Pictures of dolls
  image(img1,0,0,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*1,0,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*2,0,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*3,0,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*4,0,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*5,0,windowWidth/6,windowHeight/3);
  image(img1,windowWidth,0,windowWidth/6,windowHeight/3);
  
  image(img1,0,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*1,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*2,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*3,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*4,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*5,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  image(img1,windowWidth,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);

  image(img1,0,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*1,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*2,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*3,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*4,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  image(img1,windowWidth/6*5,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  image(img1,windowWidth,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  
  // Shaded part
  noStroke();
  fill(0);
  rect(-slider1.value() + windowWidth/6,0,windowWidth/6,windowHeight/3);
  noStroke();
  fill(0);
  rect(slider1.value(),windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  noStroke();
  fill(0);
  rect(-slider1.value() + windowWidth/6,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  
  noStroke();
  fill(0);
  rect(-slider1.value() + windowWidth/6*3,0,windowWidth/6,windowHeight/3);
  noStroke();
  fill(0);
  rect(slider1.value() + windowWidth/6*2,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  noStroke();
  fill(0);
  rect(-slider1.value() + windowWidth/6*3,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);
  
  noStroke();
  fill(0);
  rect(-slider1.value() + windowWidth/6*5,0,windowWidth/6,windowHeight/3);
  noStroke();
  fill(0);
  rect(slider1.value() + windowWidth/6*4,windowHeight - windowHeight/3*2,windowWidth/6,windowHeight/3);
  noStroke();
  fill(0);
  rect(-slider1.value() + windowWidth/6*5,windowHeight - windowHeight/3,windowWidth/6,windowHeight/3);

    // Text part
  textSize(windowHeight/30);
  fill(150,0,0);
  text("Welcome, Foolish mortals, try adjusting the slider, if you dare." ,480, windowHeight - 90);
  
  //Draw and Update ALL the bloomers
  for(let b = 0; b < bloomers.length; b++) {
    updateBloomer(bloomers[b]);
    drawBloomer(bloomers[b]);
  }
}


//Scene 3
function drawScene3() {

  s3_Updater(s3_COLOURS);
  s3_Background(s3_COLOURS);
  text(s3_Text, 500, windowHeight - 90);


a.display();
a.move();

b.display();
b.move();

c.display();
c.move();

d.display();
d.move();

e.display();
e.move();

f.display();
f.move();

g.display();
g.move();

h.display();
h.move();

i.display();
i.move();

j.display();
j.move();

k.display();
k.move();

l.display();
l.move();

m.display();
m.move();

n.display();
n.move();

o.display();
o.move();

p.display();
p.move();

q.display();
q.move();
  
  noStroke();
  // Piano Keys (White part)    
  for(let i = 0; i <9; i++) {
      let x = 0;
      let y = 50*i + windowHeight/5;
      let w = 200;
      let h = 50;
  
      if (mouseY > y && mouseY < y + h) {
        fill(200);
      } else {
        fill(255);
      }
      rect(x,y,w,h);
    }

  for(let k = 0; k <9; k++) {
      let x0 = windowWidth - 200;
      let y0 = 50*k + windowHeight/5;
      let w0 = 200;
      let h0 = 50;
  
      if (mouseY > y0 && mouseY < y0 + h0) {
        fill(200);
      } else {
        fill(255);
      }
      rect(x0,y0,w0,h0);
    }

  // Piano Keys (White part)    
  for(let o = 0; o <8; o++) {
      if (o == 2 || o == 6) {
          continue;
    }
      let x1 = 70;
      let y1 = 25*o*2 + windowHeight/5 + 35;
      let w1 = 130;
      let h1 = 30;
     
      if (mouseY > y1 && mouseY < y1 + h1) {
        fill(100);
      } else {
        fill(0);
      }
      rect(x1,y1,w1,h1);
    }

  for(let l = 0; l <8; l++) {
      if (l == 2 || l == 6) {
          continue;
    }
      let x2 = windowWidth - 200;
      let y2 = 25*l*2 + windowHeight/5 + 35;
      let w2 = 130;
      let h2 = 30;
     
      if (mouseY > y2 && mouseY < y2 + h2) {
        fill(100);
      } else {
        fill(0);
      }
      rect(x2,y2,w2,h2);
    }  

    stroke(frameCount %360, 75, 100);
  
    strokeWeight(30);
    
    x = mouseX;
    y = mouseY;
    px = pmouseX;
    py = pmouseY;
  
    line(x, y, px, py);
    line(width - x, y, width - px, py);
    line(x, height - y,  px, height -py);
    line(width - x, height - y, width - px, height -py);
    }


class Ball {
  //The constructor (note no variable declarations above the constructor)  
  constructor(x, y, d) { //pulser has 3 arguments 
  this.x = x; 
  this.y = y;
  this.d = d;
}

 //Functions 
display() {
  fill(255, 0, 0);
  ellipse(this.x, this.y, this.d, this.d); 
}

move() {
 this.y+=random(0,3); 
}
}


//----Making Scenes Appear
//Draw based on scene number
function sceneDrawer(sceneNumber) {
  switch(sceneNumber) {
    case 1: 
      drawScene1();
      break;
    case 2:
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
  }
}

//This function resets scenes to their initial state c:
function uniqueInteractionReset() {
  breathingCircles = []; 
  bloomers = [];         
  s3_COLOURS = true;                                          
}

function sceneIterator(direction, numberOfScenes) {

  uniqueInteractionReset();
  
  //If it's a "next" button go forward
  //If it's a "back" button go back
  switch(direction) {
    case "NEXT >>":
      if(sceneNumber < numberOfScenes) {
        sceneNumber++;
      } else sceneNumber = 1;
      break;
      
    case "<< BACK":
      if(sceneNumber > 1) {
        sceneNumber--;
      } else sceneNumber = numberOfScenes;
      break;
  }
}


//----Mouse Code
function mouseClicked() {
  //Code for clicking on the "back" and "next" buttons
  for(let b = 0; b < buttons.length; b++) {
    
    /* If you click on a button, 
       go forward or back a scene based on the Button Direction */
    if (buttons[b].hovered) sceneIterator(buttons[b].dir, 3);
  }

  
  //Unique Scene1 code
  if (sceneNumber == 1) {
    breathingCircles.push(makeBC(mouseX, mouseY));
  }
  
  //Unique Scene2 code
  if(sceneNumber == 2) {
    bloomers.push(makeBloomer(mouseX, mouseY));
  }
  
  //Unique Scene3 Code
  if(sceneNumber == 3) {
    s3_COLOURS = !s3_COLOURS;
  }
}


//----Button Code
let buttons = []; //Button Array to store all my buttons!

//This is how I'm creating buttons
function makeSceneButton(xPos, yPos, s, direction) {  
  return {
    //Basic Info
    x: xPos,
    y: yPos,
    size: s,

    //Text information
    text:  direction,
    textX: xPos + s/2,
    textY: yPos + s/1.8,
    
    //Determining if a it's "back" or "next" button
    dir: direction,

    //--Information for clicking!!!
    //Clickable Boundaries
    lb: xPos,
    rb: xPos + s,
    tb: yPos,
    bb: yPos + s,
    //Hover Flag
    hovered: false,
  }
}

//This code checks to see if the mouse is Hovering over a button
function hoveredOverButton(button) {
  if(mouseX >= button.lb && mouseX <= button.rb &&
     mouseY >= button.tb && mouseY <= button.bb) {
    button.hovered = true;
  } else {
    button.hovered = false;
  }
}

//This code makes a button appear
function drawSceneButton(button) {
  push();
    //Draw the button
    fill(0);
    rect(button.x, button.y, button.size);
  
    //Write its label
    fill(255);
    text(button.text, button.textX, button.textY);
  pop();
}


function mousePressed() {

  if (mouseX >= 85 && mouseX <= 205 &&
    mouseY >= windowHeight - 80  && mouseY <= windowHeight){
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      //background(200, 0, 0);
    } else {
      song.play();
      //background(0, 200, 0);
    }
   }

   if (mouseX >= 210 && mouseX <= 330 &&
    mouseY >= windowHeight - 80  && mouseY <= windowHeight){
    if (song1.isPlaying()) {
      // .isPlaying() returns a boolean
      song1.stop();
      //background(200, 0, 0);
    } else {
      song1.play();
      //background(0, 200, 0);
    }
   }

   if (mouseX >= 305 && mouseX <= 425 &&
    mouseY >= windowHeight - 80  && mouseY <= windowHeight){
    if (song2.isPlaying()) {
      // .isPlaying() returns a boolean
      song2.stop();
      //background(200, 0, 0);
    } else {
      song2.play();
      //background(0, 200, 0);
    }
   }

  }


function drawEye(x, y){
  fill(200,0,0);
  ellipse(x, y, 20, 20);

  if(random(10) < 9){
    fill(0);
    let moveX = 0;
    let moveY = 0;
    if(mouseX < x){
      moveX = -3;
    }
    else if(x < mouseX){
      moveX = 3;
    }
    if(mouseY < y){
      moveY = -3;
    }
    else if(y < mouseY){
      moveY = 3;
    }
    ellipse(x + moveX, y + moveY, 7, 7);
  }
  else {
    stroke(0);
    line(x-10, y, x + 10, y);    
  }
}


//----Scene 1 Breathing Circles
let breathingCircles = []; 

//Creating BCs
function makeBC(xPos, yPos, s, c) {
  return {
    x: xPos,
    y: yPos,
    size: random(20, 100),
    colour: random(255),
  }
}

//Drawing BCs
function drawBC(BC) {
  let breather = sin(frameCount/30)*127.5+127.5;
  
  push();
    noStroke();
    // colorMode(HSB, 255);
    fill(BC.colour, 15, breather, breather);
    ellipse(BC.x, BC.y, BC.size);
  pop();
}


//----Scene 2 Bloomer Code
let bloomers = []; //Bloomer Array

//Make a bloomer appear
function drawBloomer(bloomer) {
  push();
    noStroke();
    // colorMode(HSB, 255);
    fill(bloomer.hue, 100, 0, bloomer.alpha);
    ellipse(bloomer.x, bloomer.y, bloomer.size);
  pop();
}

//Make a bloomer grow
function updateBloomer(bloomer) {
  //grow
  if (bloomer.size < bloomer.maxSize) {
    bloomer.size  += bloomer.growthRate;
    bloomer.alpha += bloomer.alphaIncrement;
  }
  //If the growth rate is irregular, make sure the final size is max size
  if (bloomer.size > bloomer.maxSize) bloomer.size = bloomer.maxSize;
}

//Create the the bloomer
function makeBloomer(initX, initY) {
  return {
    //Position
    x: initX,
    y: initY,

    //Size Info
    size: 0,
    maxSize: random(50, 150),
    growthRate: 9/5,

    //Colour Info
    hue: random(255),
    alpha: 20,
    alphaIncrement: 2,
  }
}

//----Scene 3 Colour Code
let s3_Text = "";
let s3_HUE;
let s3_COLOURS = false;

//Switch between blue or RAINBOW backgrounds
function s3_Updater(colourful) {
  if(colourful) {
    s3_Text = "HAVE FUN AND THANKS FOR JOINING";
    s3_HUE = cos(frameCount/30)*127.5+127.5;
  } else {
    s3_Text = "The greatest fear is fear itself. This finale serves as a celebration to all the ared mortals, for ovrcoming your own fear.";
  }
}

//Draw background accordingly
function s3_Background(colourful) {
  if(colourful) {
    push();
      colorMode(HSB);
      background(s3_HUE, 255,255);
    pop();
  } else {
    background("#6464C8");
  }
}

// when you hit the spacebar, what's currently on the canvas will be saved (as
// a "thumbnail.png" file) to your downloads folder. this is a good starting
// point for the final thumbnail of your project (this allows us to make a
// showcase of everyone's work like we did for the nametag assignment).
//
// remember that you need to resize the file to 1280x720, and you will probably
// want to delete this bit for your final submission.
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}