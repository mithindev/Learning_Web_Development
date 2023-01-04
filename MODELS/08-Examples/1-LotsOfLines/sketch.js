function setup() {  
    createCanvas(480, 270); 
    background(200);
}

function draw() {
    var y = 60; 
    var spacing = 10; 
    var len = 20; 
    for (var x = 50; x <= 200; x += spacing) { 
        line(x, y, x, y + len); 
    } 
}
