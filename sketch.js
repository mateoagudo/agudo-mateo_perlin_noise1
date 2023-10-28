particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  noStroke();
  textSize(14);
  textStyle(BOLD);
  text("CLICKEA PARA MÁS PLACER", 100, 100);
  for (let i = 0; i < 1; i++) {
    particulas.push(particula);
  }
}

function draw() {
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
}

function mousePressed() {
  let r = random() > 0.5 ? true : false;
  particula = new Particula(r);
  particulas.push(particula);
  print("funciona");
}
