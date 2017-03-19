var button, x, y;
var pos, vel, speed;
var num = 0;

//Setup
function setup() {
  createCanvas(windowWidth - 50, windowHeight - 65);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  button = createButton('Duck'); //Creating the "Duck"
  button.position(pos.x, pos.y)
  button.mousePressed(hit) //Hit detection
  noStroke();
  speed = 10;
}

//Draw
function draw() {
  background(255);
  button.position(pos.x, pos.y);

  //Drawing the crosshair
  noFill();
  stroke(0);
  ellipse(mouseX, mouseY, 50, 50);
  line(mouseX - 25, mouseY, mouseX + 25, mouseY);
  line(mouseX, mouseY - 25, mouseX, mouseY + 25);
}

//"Duck" Movement
function mouseMoved() {
  run(); //Running from the crosshair
  border(); //Edge detection
};

//Running feature
function run() {
  var mouse = createVector(mouseX, mouseY);
  var dir = p5.Vector.sub(mouse, pos);
  if (abs(dir.x) < 100 && abs(dir.y) < 100) {
    dir.normalize();
    dir.mult(-6);
    accel = dir;
    vel.add(accel);
    speed-=0.0001;
    vel.limit(speed);
    pos.add(vel);
  }
};

//Edge detection
function border() {
  if (pos.x > width || pos.x < 0 || pos.y > height || pos.y < 0) {
    pos.x = random(width - 10);
    pos.y = random(height - 10);
  }
};

//Hit detection
function hit() {
  num++;
  var score = document.getElementById('score');
  score.innerHTML = "Score: " + num;
  pos.x = random(width);
  pos.y = random(height);
  speed = 8;
};

//Resizing the canvas with the browser
function windowResized() {
  resizeCanvas(windowWidth - 20, windowHeight - 20);
  pos.x = width/2;
  pos.y = height/2;
};
