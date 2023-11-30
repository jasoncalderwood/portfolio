

function setup() {
    let myCanvas = createCanvas(1335, 640);
    myCanvas.parent('myContainer');
    background(255);
    
   
    
    
}

function draw() {
    stroke(0);
    strokeWeight(1);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }}
    