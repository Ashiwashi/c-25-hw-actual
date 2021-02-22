class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution:0.1,
          friction:0.5,
          density:1.2,
          isStatic : false

      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //ellipseMode(CENTER);
      fill("magenta");
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius);
      pop();
    }
    
  };