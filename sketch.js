let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  noStroke();
  textSize(14);
  textStyle(BOLD);
  text("CLICKEA PARA MÁS PLACER", 100, 100);
  for (let i = 0; i < 10; i++) {
    particula = new Particula();
    particulas.push(particula);
  }
}

function draw() {
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }
}
