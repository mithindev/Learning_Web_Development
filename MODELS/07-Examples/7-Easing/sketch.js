var x = 300;
var y = 300;
var diffx = 0;
var diffy = 0;
var targetX = 300;
var targetY = 300;
  
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    diffx = mouseX - x;
    diffy = mouseY - y;
    x = x + 0.1*diffx;
    y = y + 0.1*diffy;
    ellipse(x, y, 50, 50);
}