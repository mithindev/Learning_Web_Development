var angle = 0;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(220);
    push();
    rotate(radians(angle));
    rect(5, 5, 50, 50);
    pop();
    angle = angle + 5;
}
