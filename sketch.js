let iter = 50;
let res = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(res, res);
  colorMode(HSB);
  noLoop();
}

function draw() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let aBase = map(x, 0, width, -3.25, 2);
      let bBase = map(y, 0, height, -2.625, 2.625);
      let a = aBase;
      let b = bBase;
      let n = 0;
      let c;
      while (n < iter) {
        if (sq(a) + sq(b) > 4) {
          break;
        }

        let r = sq(a) - sq(b);
        let i = 2 * a * b;
        a = r + aBase;
        b = i + bBase;

        n++;
      }

      if (n === iter) {
        c = 0;
      } else {
        c = map(n, 0, iter, 0, 255);
      }

      set(x, y, color(c));
    }
  }

  updatePixels();
}
