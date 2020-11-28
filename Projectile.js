class Platform{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
       this.pointB = pointB;
       this.body = Constraint.create(options);
       world.add(world,this.body); 
    }
    release(){
        this.body.bodyA = null;
    }

    display()
    {
     if(this.body.bodyA){
         var pointA = tis.body.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(1);
         stroke("grey");
         line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
    } 
}


