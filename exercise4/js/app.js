function setup() {
    let myCanvas = createCanvas(800, 500);
    myCanvas.parent('myContainer');
    
    }

    function draw() {
        background(39, 21, 122);
        push();
        noStroke();
        fill(250, 244, 210);
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 18.0);
        star(90, 90, 30, 70, 9);
        pop();

    }

      function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 70.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }