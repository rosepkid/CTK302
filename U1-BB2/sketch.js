let img1, img2, img3;
let f1, f2, f3;
let song;

function preload() {
  song = loadSound("assets/dance.mp3") ;
}

function setup() {
  createCanvas(400, 400);

  img1 = loadImage("assets/bread.png");
  img2 = loadImage("assets/coffee.png");
  img3 = loadImage("assets/icecream.png");
  
  f1 = loadFont("assets/Blazed.ttf");
  f2 = loadFont("assets/fires.ttf");
  f3 = loadFont("assets/snow.ttf");
  
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  
  song.play() ;
}

function draw() {
  background("blue");
  image(img1, width / 2, height / 2, 100, 100);
  image(img2, width / 2, height / 2 - 125, 100, 100);
  image(img3, width / 2, height / 2 + 125, 100, 100);

  fill("white");
  textFont(f1, 42);
  text("coffee", width / 2, height / 2 + 125);
  textFont(f2, 54);
  text("bread", width / 2, height / 2);
  textFont(f3, 42);
  text("ice-cream", width / 2, height / 2 - 125);
}

function touchStarted() {
  getAudioContext().resume();
}

