let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;


function setup() {
  createCanvas(720, 400);
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(RADIUS);
  strokeWeight(2);
}

function draw() {
  background(0);

  // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      noStroke();
      fill(252, 112, 81);
    }
  } else {
   noStroke()
    fill(235, 35, 64);
    overBox = false;
  }

  // Draw the box
  rect(bx, by, boxSize, boxSize);
}

function mousePressed() {
    if (
        mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
      ) {
        bx += random(-5, 5);
        by += random(-5, 5);
      }
    }
    function mouseDragged() {
        if (
            mouseX > bx - boxSize &&
        mouseX < bx + boxSize &&
        mouseY > by - boxSize &&
        mouseY < by + boxSize
          ) {
            bx += random(-8, 8);
            by += random(-8, 8);
          }
          if(bx < 10 || bx > 710 || by < 10 || by > 390){
            bx = width / 2.0;
            by = height / 2.0;
        }

        }

       