var boxWidth = 60;  // initial values
var boxX = 50;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(0);
    if (boxX > width) {
        boxX = -boxWidth;
    }
    boxX = boxX + 1;
    rect(boxX, 50, boxWidth, boxWidth);
}


