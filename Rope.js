class Rope {
constructor (bodyA, bodyB, offsetX, offsetY){
this.offsetX = offsetX;
this.offsetY = offsetY;
    var option = {
bodyA:bodyA,
bodyB:bodyB,
length:200,
stiffness:0.03,
pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope = Matter.Constraint.create(option)
    World.add(world, this.rope)
}
display(){
   var pointA = this.rope.bodyA.position
   var pointB = this.rope.bodyB.position
   strokeWeight (2)
   line (pointA.x, pointA.y, pointB.x + this.offsetX,pointB.y+ this.offsetY)
}




}