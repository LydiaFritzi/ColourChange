var r=0;
var b=255;
function setup() {
  createCanvas(800,600)
}

function draw() {
    background(r,0,b);
  ellipse(mouseX,200,100,100);
  r=map(mouseX,0,800,0,255);
  b=map(mouseX,0,800,0,255);
  fill(250,200,200);



}