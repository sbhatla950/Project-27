class Bob {
    constructor (x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':1,
            'friction':0.3,
            'density':.5
        }
        
       this.radius = radius;
       this.body =  Matter.Bodies.circle(x, y, radius, options )
       World.add(world, this.body);
       
    }
    

    display(){
        var pos =this.body.position;
        push();
        fill("blue");
        ellipse(pos.x,pos.y, this.radius*2);
        pop();
      }



}