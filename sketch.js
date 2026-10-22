// My attempt at creating angry birds in p5.js
let slingshot;
let bird;

let slingshot_x
let slingshot_y
let slingshot_w
let slingshot_h
let sling_x_offset

//sling variables

let sling_w
let sling_h

let activate_sling = false;
let NoGrav = false

//Space between the second and the third sling
// like a rubber band stuck to a stick (The angry bird slingshot)
let sling_offset = 50

let bird_x
let bird_y

let slingDrawn = false

function setup() {
  createCanvas(400*2, 400*2);

 

  slingshot_x_offset = 600

  slingshot_x = ( width - slingshot_x_offset)
  slingshot_w = 50;
  slingshot_h = 200;
  slingshot_y = height - slingshot_h

  let bird_y = 200
  let bird_size = 30

  slingshot = new Slingshot()

  sling = new Sling()

  bird = new Bird(createVector(slingshot_x,bird_y),createVector(0,2),bird_size)

  

  //instantiate sling
}

function draw() {
  background("lightblue");
  SlingshotLogic()
  BirdLogic()

}




function mouseDragged(){
  if(sling != null){
    activate_sling = true
    
  } 
     if(!slingDrawn){
       
       bird.position.x = mouseX
       bird.position.y = mouseY
     }
    
    
     
       if(!NoGrav){
        NoGrav = true
        bird.gravity.y = 0
        
      }
    


}
function mouseReleased(){
  activate_sling = false
  slingDrawn = false
  bird.position.x = 200
  bird.position.y = 200
  
  
  
  
}
  
function SlingshotLogic(){
slingshot.drawSlingshot(slingshot_x,slingshot_y,slingshot_w,slingshot_h)

  if(activate_sling){
      sling.DrawSling(slingshot_x,slingshot_y + 10,mouseX,mouseY)
      sling.DrawSling(slingshot_x,slingshot_y + sling_offset ,mouseX,mouseY)

  } 

}

function BirdLogic(){
  
  bird.RenderBird()
  bird.bird_gravity()

}








