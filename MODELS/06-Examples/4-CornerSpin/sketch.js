var angle = 0;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(220);
    // reference lines
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    push();
    translate(100, 100);
    rotate(radians(angle));
    // note: now we draw the rectangle at 0,0:
    rect(0, 0, 50, 50);
    pop();
    angle = angle + 5;
}