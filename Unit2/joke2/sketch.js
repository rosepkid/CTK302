let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {

  switch (state) {
    case 0:
      background('red');
      text("why did the chicken\ncross the road?", width / 2, height / 2);
      break;

    case 1:
      background('green');
      text("to get to the other side", width / 2, height / 2);
      break;
  }

  timer++;
  if (timer > 3 * 60) {
    state++;
    timer = 0;
    if (state > 1) {
      state = 0;
    }
  }

}
