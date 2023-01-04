var x = 150;
var y = 100;
var d = 25;
var g = 0;

function setup() {
    createCanvas(300, 200);
}

function draw() {
    print(g.toString());
    background(g);
    ellipse(x, y, d, d);
}
function mousePressed() {
    if (dist(mouseX, mouseY, x, y) < d/2) {
        g += 32;
    }
}