function setup() {
    createCanvas(600, 400);
    strokeWeight(30);
}

function draw() {
    background(240);
    stroke(102);
    line(140, 0, 170, height);
    if (mouseIsPressed) {
        stroke(255);
    } else {
        stroke(0);
    }
    line(0, 170, width, 150);
}


