function setup() {
    createCanvas(300, 300);
    background(220);
    text("p5.js vers 0.9.0 test.", 10, 15);
}

function draw() {
    background(200);
    fill(255, 0, 0);     // red
    rect(100, 100, 50, 50);
    fill(0, 255, 0);     // green
    circle(100, 100, 40);
    stroke(0, 255, 255); // cyan
    strokeWeight(3);
    fill(255, 165, 0);   // orange
    triangle(30, 50, 25, 125, 175, 150);
}


