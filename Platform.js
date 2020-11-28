class Platform{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,this.width,height,options);
        this.width = this.width;
        this.height = this.height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(64, 45, 38);
        rectMode(CENTER);
        rect(pos.x,pox.y,pox.width,pos.height);
    }
}
