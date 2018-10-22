class MandelbrotSet {
  constructor(width, height, iter, centerR, centerI) {
    this.rnd = createImage(width, height);
    this.iter = iter;
    this.centerR = centerR;
    this.centerI = centerI;
    this.radius = 2;
    this.zoom = 1;
    this.centerWidth = width / 2;
    this.centerHeight = height / 2;
    this.sclRatio = height / width;
    this.minR = centerR - this.radius;
    this.maxR = centerR + this.radius;
    this.minI = centerI - (this.radius * this.sclRatio);
    this.maxI = centerI + (this.radius * this.sclRatio);
    this.render();
  }

  render(centerX = this.centerWidth, centerY = this.centerHeight) {
    this.centerR = map(centerX, 0, this.rnd.width, this.minR, this.maxR);
    this.centerI = map(centerY, 0, this.rnd.height, this.maxI, this.minI);
    this.minR = this.centerR - (this.radius / this.zoom);
    this.maxR = this.centerR + (this.radius / this.zoom);
    this.minI = this.centerI - ((this.radius / this.zoom) * this.sclRatio);
    this.maxI = this.centerI + ((this.radius / this.zoom) * this.sclRatio);
    for (let x = 0; x < this.rnd.width; x++) {
      for (let y = 0; y < this.rnd.height; y++) {
        let aBase = map(x, 0, this.rnd.width, this.minR, this.maxR);
        let bBase = map(y, 0, this.rnd.height, this.maxI, this.minI);
        let a = aBase;
        let b = bBase;
        let n = 0;

        while (n < this.iter) {
          if (sq(a) + sq(b) > 4) {
            break;
          }

          let r = sq(a) - sq(b);
          let i = 2 * a * b;
          a = r + aBase;
          b = i + bBase;

          n++;
        }

        let c = (n === this.iter || n === 1) ? 0 : map(n, 0, this.iter, 0, 255);
        this.rnd.set(x, y, color(c));
      }
    }

    this.rnd.updatePixels();
  }

  draw() {
    image(this.rnd, 0, 0);
  }

  zoomIn() {
    this.zoom += this.zoom;
  }
}
