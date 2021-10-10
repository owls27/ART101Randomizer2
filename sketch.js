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
let therion = [];

function setup() {
  createCanvas(800, 800);
  background(220);
  textSize(32);

  text("click to randomize", 50, 50);

}

function preload(){

  for (let i = 0; i <= 5; i++){
    therion[i] = loadImage("assets/troll_" + )
  }
}

function draw() {
  if (animating == true) {

  }
}

function randomizer(){
  animating = false;
    if (therion[0]) {
      background(random(200, 255));
      randomIndex = int(random(therion.length));
      text(`${therion[randomIndex].name}'s color is ${therion[randomIndex].color}`, 50, 50);
      therion.splice(randomIndex, 1);
  } else{
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
