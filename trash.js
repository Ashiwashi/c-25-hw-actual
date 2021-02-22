class Trash {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction: 1,
          density: 1.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("trash can.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
    addPic() {

      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, 700, 690, this.width, this.height);
      pop();

    }
  };