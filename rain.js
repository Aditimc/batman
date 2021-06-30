class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.rain = Bodies.circle(x, y, 20, options);
          this.radius = 5;
          World.add(world, this.rain);
    }
   
    updateY(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0, 650), y:random(0, 650)});
      }
    }
  
    showDrop(){
      strokeWeight(1);
      stroke("blue");
      fill("lightblue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
    }
  
  
  }