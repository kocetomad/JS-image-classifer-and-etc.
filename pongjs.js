
var realWidth;
var realHeight;
var score1;
var score2;
let Player1;
let Player2;
let Ball;
function setup(){
  score1=0;
  score2=0;
  realWidth=windowWidth-20;
  realHeight=windowHeight-20;

  Player1={

    x:10,
    y:20,
    move(x,y){
      this.x=x;
      this.y=y;

    },
  draw(){
    rect(this.x,this.y,20,60);
  }
  };


  Player2={

    x:realWidth-30,
    y:20,
    move(x,y){
      this.x=x;
      this.y=y;

    },
  draw(){
    rect(this.x,this.y,20,60);
  }
  };

  Ball = {
    x:(realWidth/2),
    y:realHeight/2,
    vx:3,
    vy:2,
    draw(){
      ellipse(this.x, this.y, 40, 40);
    },
    update(){
      this.x+=this.vx;
      this.y+=this.vy;
      if(this.y>realHeight-20){
        this.vy*=-1;
      }
      if(this.y<0+20){
        this.vy*=-1;
      }
      if(this.x>Player2.x-20 && this.y>Player2.y-5 && this.y<Player2.y+65){
        this.vx++;

        this.vx*=-1;
      }
      if(this.x<Player1.x+40 && this.y>Player1.y-5 && this.y<Player1.y+65){
        this.vx--;

        this.vx*=-1;


      }
      if(this.x<0){
        score2++;
        this.vy+=random(5,8);
        this.vx=4;
        if(this.vy>8){
          this.vy=4;
        }
          this.x=realWidth/2;
          this.y=realHeight/2;
      }
      if(this.x>realWidth){
        score1++;
        this.vy-=random(-5,-8);
        if(this.vy<-8){
          this.vy=-4;
        }
        this.vx=-4;
        this.x=realWidth/2;
        this.y=realHeight/2;
      }
    }
  };

  createCanvas(realWidth,realHeight);
  background("Red");
}

var r=random(0, 255);
var g=random(0, 255);
var b=random(0, 255);



 function draw(){
   if(r<=255){
     r++;
   }else{
     r=random(0, 255);
   }

   if(g<=255){
     g++;
   }else{
     g=random(0, 255);

   }

   if(b<=255){
     b++;
   }else{
     b=random(0, 255);

   }

   background(r,g,b);
   fill("Black");
   for (var i=0;i<realWidth;i+=40){
   rect((realWidth/2)-10,i,20,30);
   }
   Player1.move(10,Player1.y);
   Player1.draw();
   Player2.move(realWidth-30,Player2.y);
   Player2.draw();
   Ball.draw();
   Ball.update();
   textSize(32);
   text(score1, 10, 30);
   text(score2, realWidth-28,30);
   if (keyIsDown(UP_ARROW)) {
     Player2.y-=4;
     console.log(Player2.y)
  }
  if (keyIsDown(DOWN_ARROW)) {
     Player2.y+=4;
 }


 if (keyIsDown(87)) {
   Player1.y-=4;
   console.log(Player2.y)
}
if (keyIsDown(83)) {
   Player1.y+=4;
}

 }
