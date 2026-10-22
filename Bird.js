// I plan on using inheritance to make things easier
class Bird{
    constructor(position,gravity,r){
        this.position = position
        this.r = r
        this.gravity = gravity
        
    }

    RenderBird(){
        fill("red")
        strokeWeight(6)
        circle(this.position.x,this.position.y,this.r)

    }
    bird_gravity(){
        this.position.add(this.gravity)
    }

    

}