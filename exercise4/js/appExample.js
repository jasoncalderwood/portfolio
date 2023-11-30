let xPosition = 300;
let xChange = 5;


function setup() {
let myCanvas = createCanvas(600, 400);
myCanvas.parent('myContainer');
background(100, 10, 110);
}

/* function draw() {
    let yOffset = 5;
    noFill();
    stroke(255, 0, 255);
    strokeWeight(1);
 rect(25, 50, 150, 175);

 fill(255, 255, 0);
 stroke(255, 120, 0);
 strokeWeight(10);
 ellipse(width/2, height/2, 50)
 
 line(0, height * 0.5, width * 0.9, height + yOffset)


}

*/

function draw() {
    let circleColorR = random(0, 255);
    let circleColorG = random(0, 255);
    let circleColorB = random(0, 255);
    noStroke();
    fill(circleColorR, circleColorG, circleColorB);
    ellipse(xPosition, 200, 50);  

    xPosition = xPosition + xChange;

    if (xPosition > width || xPosition < 0) {
        xChange = xChange * -1
    } 

    if (xChange > 0) {
        circleColorR = random (200, 255);
        circleColorB = random (0, 25);
    } else {
        circleColorB = random (200, 255);
        circleColorR = random (0, 25);
    }
    console.log(xPosition)
}