class Ball{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,this.width,height,options);
        this.width = this.width;
        this.height = this.height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pox.y,pox.width,pos.height);
        fill("white");
    }
}


