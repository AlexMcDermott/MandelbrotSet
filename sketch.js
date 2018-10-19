let iter = 100;
let xMin = -3.5;
let xMax = 2;
let yMin;
let yMax;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(floor(windowWidth / 4), floor(windowHeight / 4));
  yMin = -((xMax - xMin) / 2) * (height / width);
  yMax = -yMin;
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let aBase = map(x, 0, width, xMin, xMax);
      let bBase = map(y, 0, height, yMin, yMax);
      let a = aBase;
      let b = bBase;
      let n = 0;
      while (n < iter) {
        let r = sq(a) - sq(b);
        let i = 2 * a * b;
        a = r + aBase;
        b = i + bBase;
        if (sq(a) + sq(b) > 4) {
          break;
        }

        n++;
      }

      let c = map(n, 0, iter, 255, 0);
      set(x, y, color(c));
    }
  }

  updatePixels();
  fill('red');
  ellipse(0, 0, 5, 5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
