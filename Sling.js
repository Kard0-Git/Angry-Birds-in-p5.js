class Sling{

    constructor(x,y,x2,y2){
    this.x = x ,
    this.y = y, 
    this.x2 = x2,
    this.y2 = y2
    }


   DrawSling(x,y,x2,y2){
    fill("Black")
    strokeWeight(10)
    line(x,y,x2,y2)


   }
}