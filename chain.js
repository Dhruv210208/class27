class Chain{
constructor(bA,bB){
var options={
bodyA:bA,
bodyB:bB,
stiffness:0.8,
length:10



}
this.chain=Constraint.create(options)

World.add(world,this.chain)

}
display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    strokeWeight(3)
line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}