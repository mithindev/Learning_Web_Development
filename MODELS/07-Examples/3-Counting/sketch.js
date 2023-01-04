var count = 0;

function setup() {
    createCanvas(240, 120);
    textSize(64);
    textAlign(CENTER);
}

function draw() {
    background(255);
    text(count.toString(), 60, 80);
}

function mousePressed() {
    count += 1;
}
