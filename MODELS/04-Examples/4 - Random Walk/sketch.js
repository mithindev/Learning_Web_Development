var x;
var y;
var walk = 5;

function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(0);
    ellipse(x, y, 50, 50);
    x += random(-walk, walk);
    y += random(-walk, walk);
}
