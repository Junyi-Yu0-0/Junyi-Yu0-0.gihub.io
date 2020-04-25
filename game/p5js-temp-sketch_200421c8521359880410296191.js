var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
  
} // end level one

function levelTwo(){
  background(0,0,255);
  text("Level 2", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(50, height-50);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(0);
  text("Level 3", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  fill(255,0,0);
  //noStroke();
  ellipse(ballx, bally, ballSize, ballSize); 
} // end level thre

function levelFour(){
    background(200, 100, 2000);
    
    text("Level 4", width/2, height-20);
    sight();
    var distToBall= dist(ballx, bally, mouseX, mouseY);
    if (distToBall <ballSize/2){
    ballx = random(40, width-40);
    bally= random(60, height-60);
    ballSize=ballSize -1;
      if (ballSize<5){
      ballSize=ballSize+(20||30||40||50);
    }
      else {
      ballSize=ballSize-(4||8||12);
    }
    
    score= score +1;
  }
  if(score>20){
// level 4
//   gameState = "L4";
  }  
//  line(ballx, bally, mouseX, mouseY);
  fill(255,0,0);
  //noStroke();
  ellipse(ballx, bally, ballSize, ballSize);
} // end level thre

function sight(){
fill(255,0,0);
rect(mouseX-8.5, mouseY, 20, 3,10);
rect(mouseX, mouseY-8, 3, 20,10);
}
