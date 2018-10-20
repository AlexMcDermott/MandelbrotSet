let rnd;

function setup() {
  let res = Math.min(windowWidth, windowHeight);
  createCanvas(res, res);
  colorMode(HSB);
  rnd = render(75, width, 0, 0, 1);
}

function draw() {
  image(rnd, 0, 0);
  textSize(20);
  textAlign(LEFT, TOP);
  fill(255);
  text(round(frameRate()), 0, 0);
}

function render(iter, res, centerX, centerY, zoom) {
  let rnd = createImage(width, height);
  let centerR = 0;
  let centerI = 0;
  for (let x = 0; x < rnd.width; x++) {
    for (let y = 0; y < rnd.height; y++) {
      let aBase = map(x, centerX, rnd.width, (-2.5 + centerR) / zoom, (1.5 + centerR) / zoom);
      let bBase = map(y, centerY, rnd.height, (-2 + centerI) / zoom, (2 + centerI) / zoom);
      let a = aBase;
      let b = bBase;
      let n = 0;

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

      let c = (n === iter || n === 1) ? 0 : map(n, 0, iter, 0, 255);
      rnd.set(x, y, color(c));
    }
  }

  rnd.updatePixels();
  return rnd;
}
