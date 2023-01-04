function setup() {
    createCanvas(200, 200);
    frameRate(10);
}

function draw() {
    background(200);
    fill(255); // white
    rect(50, 50, 100, 100);   // just for reference
    fill(0); // black
    var x = min(mouseX, 150);
    ellipse(x, mouseY, 30, 30);
    print(mouseX.toString() + " " + mouseY.toString());
}