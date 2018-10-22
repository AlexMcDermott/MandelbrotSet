let mset;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  mset = new MandelbrotSet(width, height, 75, -0.5, 0);
}

function draw() {
  mset.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  mset = new MandelbrotSet(width, height, 75, -0.5, 0);

}

function mousePressed() {
  mset.zoomIn();
  mset.render(mouseX, mouseY);
}
