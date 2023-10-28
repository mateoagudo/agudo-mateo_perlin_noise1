class Particula {
  constructor(_siesPelota) {
    this.noiseTimeX1 = random(0, 10);
    this.noiseTimeY1 = random(10, 20);
    this.noiseTimeX2 = random(0, 10);
    this.noiseTimeY2 = random(10, 20);

    // this.osc = new p5.Oscillator("sine");
    print("este es el objeto" + this.osc);
    this.noiseTam = random();
    this.trazo1 = color(255, random(100, 200), 0, 25);
    this.trazo2 = color(random(0, 255), random(0, 50), 255, 10);

    // this.posX = this.posX;
    // this.posY = this.posY;
    rectMode(CENTER);
    print(this.noiseTimeX);
    print(this.noiseTimeY);

    this.esPelota = _siesPelota;
    // this.esLinea = random() > 0.5 ? true : false;
  }

  update() {
    this.posX1 = map(noise(this.noiseTimeX1), 0, 1, 0, windowWidth);
    this.posY1 = map(noise(this.noiseTimeY1), 0, 1, windowHeight, 0);

    this.posX2 = map(noise(this.noiseTimeX1), 0, 1, windowWidth, 0);
    this.posY2 = map(noise(this.noiseTimeY1), 0, 1, windowHeight, 0);

    this.posX3 = map(noise(this.noiseTimeX2), 0, 1, 0, windowWidth);
    this.posY3 = map(noise(this.noiseTimeY2), 0, 1, 0, windowHeight);

    this.posX4 = map(
      noise(this.noiseTimeX2),
      0,
      1,
      0 - windowWidth / 2,
      windowWidth + windowWidth / 2
    );
    this.posY4 = map(noise(this.noiseTimeY2), 0, 1, windowHeight, 0);

    this.posX5 = map(noise(this.noiseTimeX2), 0, 1, windowWidth, 0);
    this.posY5 = map(noise(this.noiseTimeY2), 0, 1, 0, windowHeight);

    this.posX6 = map(
      noise(this.noiseTimeX2),
      0,
      1,
      windowWidth + windowWidth / 2,
      0 - windowWidth / 2
    );
    this.posY6 = map(noise(this.noiseTimeY2), 0, 1, windowHeight, 0);

    this.tam = map(noise(this.noiseTam), 0, 1, 5, 100);
    this.noiseTimeX1 += 0.001;
    this.noiseTimeY1 += 0.004;

    this.noiseTimeX2 += 0.002;
    this.noiseTimeY2 += 0.004;
    this.noiseTam += 0.004;

    // this.freq = constrain(map(this.tam, 5, 100, 200, 600), 200, 600);
    // this.amp = constrain(map(noise(this.posY1), 0, windowWidth, 0, 1), 0, 1);
    // this.osc.start();
    // this.osc.freq(this.freq);

    if (this.esLinea == false) {
      this.esLinea = true;
    } else {
      this.esLinea = false;
    }
  }

  display() {
    fill(0, 50);
    if (this.esPelota) {
      strokeWeight(12);
      stroke(this.trazo1);
      circle(this.posX1, this.posY1, this.tam);
      circle(this.posX2, this.posY2, this.tam);
    } else {
      strokeWeight(2);
      stroke(this.trazo2);
      line(this.posX3, this.posY3, this.posX4, this.posY4);
      line(this.posX5, this.posY5, this.posX6, this.posY6);
    }
  }
}
