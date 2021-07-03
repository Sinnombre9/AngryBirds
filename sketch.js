const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var fondo;
var plataforma;
 var piso;
var peggy1;
var pio1;
var box1;
var box2;
var tronquito1;
var tronquito2;
var box3;
var peggy2;
var peppa;
var log;
var Jorge;
var peppa2;
var peppa3;
var log2;
var Jorge2;
var resortera;
var score
var gameState; 
var bg="sprites/bg.png"
function preload() {
getbackground();
}

function setup(){
  createCanvas(1200,400)
  engine = Engine.create();
  world = engine.world;
    box1 = new Box(700,320,70,70);
  piso=new Piso(600,390,1200,20);
  peggy1=new LosMarranos(600,350);
  pio1=new Pio(50,50)
  box2=new Box(500,320,70,70);
  tronquito1=new TronquitoBD(600,300,300,PI/2);
  box3=new Box(600,250,70,70);
  peppa=new LosMarranos(700,280,70,70);
  peggy2=new LosMarranos(500,280,70,70)
  log=new TronquitoBD(600,240,300,PI/2);
  peppa3=new LosMarranos(600,200,70,70);
  peppa2=new LosMarranos(700,200,70,70);
  Jorge=new LosMarranos(500,200,70,70);
  log2=new TronquitoBD(600,180,300,PI/2);
  Jorge2=new LosMarranos(600,140,70,70);
  plataforma=new Piso(70,390,300,300);
  resortera=new Resortera(pio1.body,{x:150,y:80});
  score=0;
  gameState="SLING";
}
function draw(){
background(fondo);
  Engine.update(engine);
  piso.display();
  peggy1.display();
  peggy1.score();
  pio1.display();
  box1.display();
  box2.display();
  tronquito1.display();
  box3.display();
  peppa.display();
  peppa.score();
  peggy2.display();
  peggy2.score();
  log.display();
  peppa2.display();
  peppa2.score();
  peppa3.display();
  peppa3.score();
  Jorge.display();
  Jorge.score();
  log2.display();
  Jorge2.display();
  Jorge2.score();
  plataforma.display();
  resortera.display();
  textSize(15)
  text("Score" + score, 1140,40);
  if(score>60){
    textSize(40)
    stroke("white")
    strokeWeight(5)
    text("You Win BABY BIRD",450,200);
  }

}
function mouseDragged(){
  if(gameState!="LANZAR"){
    Matter.Body.setPosition(pio1.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased(){
  resortera.fly();
  gameState="LANZAR";
}

function keyPressed() {

	if (keyCode === 32) {
    Matter.Body.setPosition(pio1.body,{x:150,y:80})
		resortera.volver(pio1.body);
    gameState="SLING"
	}
}
function getbackground(){
  var tiempo=new Date
  var hora=tiempo.getHours();
  if(hora>6&&hora<20){
    bg="sprites/bg.png";
  }
  else{
    bg="sprites/bg2.jpg";
    }
    fondo=loadImage(bg);
  console.log(hora); 
}