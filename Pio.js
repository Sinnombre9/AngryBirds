class Pio extends Dad{
  constructor(x,y){
    super(x,y,50,50);
    this.image=loadImage("sprites/Chunk.png");
    this.smoke=loadImagw("sprites/smoke.png");
    this.trayectoria=[];
  }
  display(){
    //this.body.position.x=mouseX;
    //this.body.position.y=mouseY;
    super.display();
    if(this.body.velocity.x>10){
      var pos=[this.body.position.x,this.body.position.y];
      this.trayectoria.push(pos);
    }
}
}
 