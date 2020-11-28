class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        if(this.body.speed < 3){
            fill(85,136,238);//blue
            super.display();
             
         }
         else{
          world.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          rect(this.x,thsi.y,20,30);
          pop();
         }
     
    }

}