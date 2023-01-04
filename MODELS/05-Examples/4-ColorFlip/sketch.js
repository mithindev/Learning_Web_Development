var on = false;
var r = 255;  
var g = 240;  
var b = 151;  

function setup() {
  createCanvas(300, 200);
}

function draw() {
  if (on == true) {
    background(r, g, b );
  } else {
    background(255-r, 255-g, 255-b);
  }
}

function mousePressed() {
  if (on == false) {
    on = true;
  } else {
    on = false;
  }
}