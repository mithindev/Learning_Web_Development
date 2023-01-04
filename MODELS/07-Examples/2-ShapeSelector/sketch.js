function setup() {
    createCanvas(240, 120);
}

function draw() {
    background(204);
    if (keyIsPressed) {
        if (key == "e") {
            ellipse(120, 60, 120, 60);
        } else if (key == "c") {
            circle(120, 60, 80);
        } else if (key == "r") {
            rect(60, 30, 120, 60);
        } else if (key == "s") {
            square(80, 20, 80);
        } else if (key == "t") {
            triangle(60, 90, 180, 90, 120, 30);
        }
    }
}