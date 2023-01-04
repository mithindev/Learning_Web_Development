function setup() {
    createCanvas(240, 120);
    strokeWeight(12);
}

function draw() {
    background(204);
    stroke(102);
    var gx = mouseX - 60;
    // var gx = constrain(mouseX, 0, 240);
    line(gx, 0, gx, height);  // Gray line
    stroke(0);
    var bx = mouseX + 60;
    // var bx = gx / 2 + 60;
    line(bx, 0, bx, height);  // Black line
    // print(gx.toString() + " " + bx.toString());
}