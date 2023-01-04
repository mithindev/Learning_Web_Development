function setup() {
    createCanvas(300, 300);
    background(220);
    text("p5.js vers 0.9.0 test.", 10, 15);
}

function draw() {
    background(200); 
    fill(250, 250, 0); 
    ellipse(random(0, 300), random(0, 300), random(10, 140), random(9, 120)); 
    ellipse(random(0, 300), random(0, 300), random(10, 140), random(9, 120)); 
    ellipse(random(0, 300), random(0, 300), random(10, 140), random(9, 120)); 
    noLoop();
}

