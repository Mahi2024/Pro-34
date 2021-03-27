class Ball{
    constructor(x,y,r){
        var options = {
            density:1,
            friction:0.05

        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("hero.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        imageMode(RADIUS);
        fill("gold");
        image(this.image,pos.x,pos.y,this.r+100,this.r+20);
    }
}