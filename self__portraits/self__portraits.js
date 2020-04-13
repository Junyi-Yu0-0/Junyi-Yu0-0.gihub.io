function setup() {
createCanvas(600, 600);
}


function draw() {
background(80,50,80);
for (var y = 0; y <= height; y += 40) {
for (var x = 0; x <= width; x += 40) {
  fill(255, 140);
ellipse(x, y, 80, 80);
}
}
//face
noStroke();
fill(255, 245, 181);
ellipse(300, 300, 180, 200);
rect(205, 210, 190, 180, 80);

//hair
noStroke();
fill(0);
rect(202.5, 200, 195, 80, 80);

//Eyebrows
stroke(21, 19, 19);
strokeWeight(3);
noFill();
arc(250, 300, 45, 15, PI, TWO_PI, OPEN);
arc(350, 300, 45, 15, PI, TWO_PI, OPEN);


//eyes
strokeWeight(1);
fill(32, 19, 19);
ellipse(250, 310, 28, 25);
ellipse(350, 310, 28, 25);
noStroke();
fill(255);
ellipse(240, 305, 8,10);
ellipse(340, 305, 8,10);

//glasses
stroke(21, 19, 19);
strokeWeight(3);
noFill();
rect(225, 290, 50, 35);
rect(325, 290, 50, 35);
arc(300, 315, 45, 15, PI, TWO_PI, OPEN);
noStroke();

 //Nose
 fill(247, 221, 155);
triangle(295, 320, 295, 340, 320, 335);

//Mouth
fill(230, 176, 161);
quad(270, 355, 320, 360, 317, 370, 270, 360);

//Neck
fill(255, 245, 181);
rect(260, 380, 75, 70, 20);
  
//Hoodie
fill(41,41,41);
rect(135, 430, 330, 200, 20);
triangle(220, 440, 190, 380, 380, 470);
triangle(400, 380, 390, 440, 200, 460);
fill(0);
ellipse(350, 430, 15, 15);
ellipse(250, 430, 15, 15);
rect(346, 430, 9, 80, 20);
rect(246, 430, 9, 80, 20);
rect(290, 425, 7, 200, 20);
}
