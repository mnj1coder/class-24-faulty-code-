class BallClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':2.5,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y,radius, options);
        
        World.add(world, this.body);
      }
      display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.body.radius,this.body.radius)
      }
}