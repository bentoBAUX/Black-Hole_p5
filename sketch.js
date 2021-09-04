const c = 60;
const G = 2;
const dt = 0.1;

let m87;
let start,end;

const particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  m87 = new BlackHole(windowWidth/2, windowHeight/2, 32000);

  start = height/2;
  end = height/2 - m87.rs * 2.6;

  for (let y = 0; y < start; y += 5) {
    particles.push(new Photon(width - 20, y));
  }
}

function draw() {
  background(255);
  m87.show();

  stroke(0);
  strokeWeight(1);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
}
