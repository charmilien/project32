class Block{
    constructor(x, y) 
    {
        var options = {
           
            restitution :0.3,
            friction :0.0,
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.vis=255;
        World.add(world, this.body);
      }



      display()
      {
        var angle = this.body.angle;
        var pos= this.body.position;

         if(this.body.speed<4)
            {
              push();
              translate(pos.x, pos.y);
              rotate(angle);
              rectMode(CENTER);
              rect(0,0,this.width, this.height);
              pop();
            }
            else
            {
              World.remove(world,this.body)
             // push();
              this.vis=this.vis-10;
            //  pop();
            }
         
      }  

      score()
            {
              if(this.vis<0 && this.vis>-101)
              score+=10;
            }
        
}