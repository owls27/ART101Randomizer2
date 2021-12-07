//random fishes
let fishs = [{
  name: "a mermaid",
  result: "The mermaid winked at you, but you thought of your wife at home, so you had to send the mermaid back to the sea",
}, {
  name: "a shark",
  result: "Seeing the shark hit the bait, you let go of your hand in fright, so you lost your fishing rod and need to pay 100 to get a new one",
}, {
  name: "a tuna",
  result: "You caught a tuna and sold it at the market",
}, {
  name: "a salmon",
  result: "You caught a salmon and sold it at the market",
}, {
  name: "a bass",
  result: "You caught a bass and sold it at the market",
}, {
  name: "a codfish",
  result: "You caught a codfish and sold it at the market",
}, {
  name: "a grouper",
  result: "You caught a grouper and sold it at the market",
}, {
  name: "nothing",
  result: "You didn't catch anything, but the sea view is pretty good",
}];

let randomIndex;
let animating = false;
let fish = [];
let img;

function preload(){
  for (let i = 0; i <= 7; i++){
    fishs[i] = loadImage("assets/fish_" + i + ".PNG")
  }

}

function setup() {
  createCanvas(800, 800);
  background(220);
  textSize(32);

  text("You are a fisherman who makes a living by fishing, but recently your wife thinks that you don't make enough money. Today your wife asks you to make 500 dollars.", 50, 50);

}

function draw() {
  if (animating == true) {
    fill(42, 193, 239);
    ellipse(random(width), random(height), random(50, 200), random(50, 200));
  }
}

function randomizer(){
  animating = false;
    if (fishs[0]) {
      background(200, 255);
      randomIndex = int(random(therion.length));
      translate(400,500);
      fill(0);
      text(`${fishs[randomIndex].name}'s color is ${fishs[randomIndex].color}`, 50, 50);
      fish.splice(randomIndex, 1);
  } else{
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
