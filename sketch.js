//random animals
let therion = [{
  name: "owl",
  color: "purple"
}, {
  name: "koala",
  color: "yellow"
}, {
  name: "turtle",
  color: "green"
}, {
  name: "fox",
  color: "orange"
}, {
  name: "panda",
  color: "red"
}, {
  name: "fish",
  color: "blue"
}];

let randomIndex;
let animating = false;
let therions = [];
let imageCounter = 0;
let button;

function preload() {

  for (let i = 0; i <= 5; i++) {
    therions[i] = loadImage(`assets/therion_${i}.JPG`)
  }
}

function setup() {
  createCanvas(800, 800);
  background(200);
  textSize(36);
  textFont('Courier new')
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomize", width / 2, height / 2);
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();
    image(therions[imageCounter], width / 2, height / 2);

    if (imageCounter < therions.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (therion[0]) {
    // background(random(200, 255));
    clear();
    randomIndex = int(random(therion.length));
    image(random(therions), width / 2, height / 2);
    text(`${therion[randomIndex].name}'s color is ${therion[randomIndex].color}`, width/2, height - 100);
    therion.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
