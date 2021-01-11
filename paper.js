class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.5
        }

        this.paper = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world, this.paper);
    }

    display(){
        var pos = this.paper.position
        push();
        translate(pos.x, pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
        
    }
}