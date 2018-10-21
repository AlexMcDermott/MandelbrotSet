let mset;

function setup() {
  colorMode(HSB);
  let res = Math.min(windowWidth, windowHeight);
  createCanvas(res, res);
  mset = new MandelbrotSet(75, res, -0.5, 0);
  mset.render(res / 2, res / 2, 1);
}

function draw() {
  mset.draw();
}

function windowResized() {
  let res = Math.min(windowWidth, windowHeight);
  resizeCanvas(res, res);
  mset = new MandelbrotSet(75, res, -0.5, 0);
  mset.render(res / 2, res / 2, 1);

}

function mouseClicked() {
  mset.zoomIn();
  mset.render(mouseX, mouseY);
}
