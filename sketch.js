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
let pics = [];
let img;
let imageCounter = 0;

function preload() {
  for (let i = 0; i <= 7; i++) {
    pics[i] = loadImage(`assets/pic_${i}.JPG`)
  }

}

function setup() {
  createCanvas(800, 800);
  background(220);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);
  frameRate(8);

  text("You are a fisherman who makes a living by fishing, but recently your wife thinks that you don't make enough money. Today your wife asks you to make 500 dollars.", 50, 50);

}

function draw() {

  if (animating == true) {
    clear();
    fill(42, 193, 239);
    ellipse(random(width), random(height), random(50, 200), random(50, 200));
    image(pics[imageCounter], width / 2, height / 2);
    if (imageCounter < pics.length) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (fishs[0]) {
    clear();
    //background(200, 255);
    randomIndex = int(random(fishs.length));
    //translate(400, 500);
    fill(0);
    image(random(pics), width / 2, height / 2);
    text(`You ${fishs[randomIndex].name}, ${fishs[randomIndex].result}`, width / 2, height - 100);
    fishs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
