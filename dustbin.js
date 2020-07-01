class DustClass{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.5,
            'friction':5,
            'density':5.0,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y,width,height,options);
        this.body.width = width;
        this.body.height = height;

        //Matter.Body.setAngle (this.body,angle);

       World.add(world, this.body);
      }

      display(){
        
        //var angle= this.body.angle;

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height)
        
        /*push();
        
            translate(this.body.position.x, this.body.position.y);

            angleMode(DEGREES);

            rotate(this.body.angle);
            rectMode(CENTER);

        pop();*/
      }
}