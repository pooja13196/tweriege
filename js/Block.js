class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility= 225;
        World.add(world, this.body);
      }
      display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        if (this.body.speed<7) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0, this.width, this.height)
            pop ();
        } else {
            push ();
            World.remove(world, this.body);
            this.visibility = this.visibility - 1;
            tint(255, this.visibility);
            pop();
            
        }
    
    }
    
    }