class Box{
    constructor(x,y,width,height){
        var options = {
            'density':0.04,
            'friction':1,
            'restitution':0.8

        }
        this.width=width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("black");
        strokeWeight(3);
        stroke("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}