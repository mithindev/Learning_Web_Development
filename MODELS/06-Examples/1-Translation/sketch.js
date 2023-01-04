function setup() {
    createCanvas(500, 500);
    background(220);
}

function draw() {
    fill(255, 0, 0);
    rect(50, 50, 75, 75);
    translate(200, 200);
    fill(0, 255, 0);
    rect(50, 50, 75, 75);
    translate(-100, 100);
    fill(0, 0, 255);
    rect(50, 50, 75, 75);
}
