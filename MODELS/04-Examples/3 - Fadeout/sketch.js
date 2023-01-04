var bright = 0;

function setup() { 
  createCanvas(640,360); 
} 

function draw() { 
    if (mouseIsPressed) {
        bright = 0;
    }
    background(bright);
    bright = bright + 1;
    print(bright.toString());
} 