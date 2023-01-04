function setup() {
    createCanvas(500, 500);
    background(220);
}

function draw() {
    fill(255, 0, 0);
    rect(150, 150, 75, 75);
    push();
    fill(0, 255, 0);
    rotate(radians(30));
    rect(150, 150, 75, 75);
    fill(0, 0, 255);
    pop();
    rotate(radians(-15));
    rect(150, 150, 75, 75);
}
