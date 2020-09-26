var stoprect;
var rect2;


function setup() {
  createCanvas(800,400);
  stoprect=createSprite(400, 200, 50, 50);
  rect2=createSprite(100, 200, 50, 50);
}




function draw() {
  background(255,255,255); 
  rect2.x=mouseX
  rect2.y=mouseY
  
console.log(rect2.x-stoprect.x);

if(rect2.x-stoprect.x <= rect2.width/2 + stoprect.width/2 && 
  stoprect.x-rect2.x <= rect2.width/2 + stoprect.width/2 && 
  rect2.y-stoprect.y <= rect2.height/2 + stoprect.height/2 && 
  stoprect.y-rect2.y <= rect2.height/2 + stoprect.height/2 ){
  rect2.shapeColor="blue";
  stoprect.shapeColor="blue"
}else{
  rect2.shapeColor="red"
  stoprect.shapeColor="red"
}

  drawSprites();
}