class LosMarranos extends Dad {
  constructor(x,y){
    super(x,y,50,50);
    this.image=loadImage("sprites/enemy.png");
    this.visibility=255
  }
  score(){
if(this.visibility<0&&this.visibility>-15){
  score++;
}
  }
  display(){
    if(this.body.speed<3){
          super.display();   
    }
    else{
      push();
      this.visibility=this.visibility-5
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
        World.remove(world, this.body);
        console.log(this.visibility);
    pop();
    }
  }
}