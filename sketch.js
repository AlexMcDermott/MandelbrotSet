let iter = 100;
let res = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(res, res);
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
}
