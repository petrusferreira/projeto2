let cor;
let horizontal;
let vertical;

function setup() {
  createCanvas(600, 600);
  background("#3F51B5");
  cor = color(random(0,255),random(0,255),random(0,255));
  horizontal = 300
  vertical = 300
}

function draw() {
  circle(horizontal,vertical,70);
  fill(cor)
  
  if(mouseX > horizontal){
    horizontal++
  }
   
  if(mouseX < horizontal){
    horizontal--
  }
  
  if(mouseY < vertical){
    vertical--
  }
    if(mouseY > vertical){
    vertical++
      }
    if(mouseIsPressed){
    cor = color(random(0,255),random(0,255),random(0,255),random(0,100));
         
    }
}
