var angle = 0;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(220);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    fill(255); // control rect color explicitly
    stroke(0);
    push();
    translate(100, 100);
    rotate(radians(angle));
    rectMode(CENTER); // center rect around 0,0
    rect(0, 0, 50, 50);
    pop();
    angle += 5;
}