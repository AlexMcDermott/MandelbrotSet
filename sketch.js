let mset;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  mset = new MandelbrotSet(width, height, 75, -0.5, 0);
  mset.render(width / 2, height / 2);
}

function draw() {
  mset.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  mset = new MandelbrotSet(width, height, 75, -0.5, 0);
  mset.render(width / 2, height / 2);

}

function mouseClicked() {
  mset.zoomIn();
  mset.render(mouseX, mouseY);
}
