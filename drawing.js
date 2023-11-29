function setup() {
    let myCanvas = createCanvas(1335, 635);
    myCanvas.parent('myContainer');
    background(255);
    
}

function draw() {
    let penColorR = 0;
    let penColorG = 0;
    let penColorB = 0;
    stroke(penColorR, penColorG, penColorB);
    strokeWeight(1);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }}
