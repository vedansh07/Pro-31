class plinko{
    constructor(x,y){
        var options = {
            restitution:0.4      

}
    this.radius=10

    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);

}
display(){
     var pos = this.body.position;

   push()
   translate(pos.x,pos.y)
   ellipseMode(RADIUS);
   ellipse(0,0,this.radius);
   pop();

}
}