

function setup() {
    createCanvas(400, 400);
}

function draw() {
    if (mouseX < width/2 & mouseY < height/2) {
        background(255,0,0); // red
    } else if (mouseX < width/2 & mouseY >= height/2) {
        background(0,255,0); // green
    } else if (mouseX >= width/2 & mouseY < height/2) {
        background(0,0,255); // blue
    } else {
        background(0,0,0);    // black
    }
}

