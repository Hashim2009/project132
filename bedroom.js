function preload() {
    img = loadImage('bedroom.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text('Bed', 150, 275);
    noFill();
    stroke(255, 0, 0);
    rect(15, 240, 300, 350);
    fill(0, 255, 0);
    text('Fan', 280, 50);
    noFill();
    stroke(0, 255, 0);
    rect(159, 5, 150, 100);
    fill(0, 0, 255);
    text('Monitor', 350, 250);
    noFill();
    stroke(0, 0, 255);
    rect(350, 230, 100, 50);
}

function home() {
    window.location = "index.html";
}