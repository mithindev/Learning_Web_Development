function setup() {
    createCanvas(500, 250);
    background(220);
}

function draw() {
    var w = width/10;
    var h = height/10;
    var y = 0;
    for (var x = 0; x <= width - w; x += w) {
        rect(x, y, w, h);
        y += h;
    }
}
