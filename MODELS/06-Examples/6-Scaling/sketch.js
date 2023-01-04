function setup() {
    createCanvas(500, 500);
    background(220);
}

function draw() {
    stroke(0);
    line(0, 100, 500, 100);
    line(0, 200, 500, 200);
    line(0, 300, 500, 300);
    line(0, 400, 500, 400);
    line(100, 0, 100, 500);
    line(200, 0, 200, 500);
    line(300, 0, 300, 500);
    line(400, 0, 400, 500);
    fill(255, 0, 0);
    rect(50, 50, 50, 50);
    translate(200, 0);
    scale(2.0);
    fill(0, 255, 0);
    rect(50, 50, 50, 50);
    translate(-150, 50);
    scale(1.5);
    fill(0, 0, 255);
    rect(50, 50, 50, 50);
}

