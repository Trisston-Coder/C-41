class Umbrella{

    constructor(x,y)
{
    var options = {
        'restitution' :0.8,
        'friction' :1.0,
        'density' :1,
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;

    World.add(world, this.body);
}

display(){
    
    var pos  = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(3);
    stroke("yellow");
    fill(255);
    ellipse(0, 0, this.width, this.height);
    pop();
    }
}


