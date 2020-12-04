class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    // push()
    //pop()
    var position = [this.body.position.x, this.body.position.y]
    this.trajectory.push(position); 
    
    if(this.body.velocity.x>15 && this.body.position.x > 300 )
    {
      console.log(this.body.position.x);
      for(var i=0; i<this.trajectory.length; i=i+1){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1])
      }
    }
  }
}