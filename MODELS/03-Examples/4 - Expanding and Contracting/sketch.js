var dir = 1;
var speed = 5;
var diam = 50;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    ellipse(width/2, height/2, diam, diam);

    diam += dir * speed;
    if (diam > 400) {
        dir = -dir;
        diam = 400;
    } else if (diam < 0) {
        dir = -dir;
        diam = 0;
    }
}
