var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
if(document.getElementsByClassName('video')[0].paused){
   document.getElementsByClassName('video')[0].muted = true;
   document.getElementsByClassName('video')[0].play();
}

anime.timeline({loop: false})
.add({
  targets: '.ml6 .letter',
  translateY: ["1.6em", 0],
  translateZ:0,
  duration: 1200,
  delay: (el, i) => 70* i
})


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var circlearray=[];
var theta = 0;
const radian  = Math.PI/180*2;

const center = { x:innerWidth/2, y:innerHeight/2} ;
const  color = ['green', 'cyan' ] ;
// canvas.style.backgroundColor = "black";
canvas.width = window.innerWidth ;
canvas.height  = innerHeight;
var gradient = c.createLinearGradient(100,0, canvas.width, 0);

 function Circle(x,y,dx,dy,radius)
 {
   this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
   this.radius = radius;
   this.defaultRadius = radius ;

   this.draw = function(){ 
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
    c.fillStyle = 'rgba(255,255,255,1)';
   // c.fillStyle = color[1];
    c.fill();

    }

    this.update=function(){        
    if (this.x+this.radius>canvas.width||this.x-this.radius<0)
            { this.dx=-this.dx;
            }
   //  if( this.y+this.radius>canvas.height||this.y-this.radius<0){
   //  this.dy=-this.dy
   //  }
    this.x+=this.dx;
    this.y+=this.dy;
    
   //  if(this.x-mouse.x-mouse.radius<100&&this.x-mouse.x-mouse.radius>-100&&this.y-mouse.y-mouse.radius<100&&this.y-mouse.y-mouse.radius>-100){
   //   if(this.radius<40)
   //    this.radius+=3;
   //  }
   //   else if(this.radius>this.defaultRadius)
  	//  this.radius = this.radius - .5;
   //   this.radius = Math.max(0, this.radius);
     this.draw();
          } 
 }  
  
 for(var i=0; i<80; i++)
     
 	{   let x = innerWidth/2;
        let random  = Math.random()*10 + 3;
        let dx;
        if(i%2==0){
           dx = random;
        }
        else 
        dx  = -random;
        var y =  innerHeight-200;
        var dy = -random;
        var radius = Math.random()*6;
    circlearray.push(new Circle(x,y,dx,dy,radius));
 	}
        
    var mouse = new Circle(Math.random()*innerWidth, Math.random()*innerHeight, 6, 8,100);
   window.addEventListener('mousemove',function(event){ 
   mouse.x = event.pageX;
   mouse.y = event.pageY;
   }
   ); 

   mouse.update = function(){
         
    if (this.x+this.radius>canvas.width||this.x-this.radius<0){
       this.dx=-this.dx;
    }
    if( this.y+this.radius>canvas.height||this.y-this.radius<0){
      this.dy=-this.dy
    }
    this.x+=this.dx;
    this.y+=this.dy;
};
 	
 	

window.onresize = ()=>{ 
   canvas.width = innerWidth;
   canvas.height = innerHeight;

};

function Star(x, y, size, omega = 0){
    this.x = x;
    this.y = y;
    this.size = size;
    this.omega = omega;
    this.angle = 0;
    
    this.draw = function(c){
      c.beginPath();
      c.moveTo(this.x + Math.cos(this.angle)*this.size,  this.y + Math.sin(this.angle)*this.size);
      c.lineTo(this.x + Math.cos(this.angle + 2*Math.PI/3)*this.size,  this.y + Math.sin(this.angle + 2*Math.PI/3)*this.size);
      c.lineTo(this.x + Math.cos(this.angle + 4*Math.PI/3)*this.size,  this.y + Math.sin(this.angle+ 4*Math.PI/3)*this.size);
      c.lineTo(this.x + Math.cos(this.angle)*this.size,  this.y + Math.sin(this.angle)*this.size);
      c.closePath();
      c.fillStyle = "white" ;
      c.fill();
      c.beginPath();
      c.moveTo(this.x + Math.cos(this.angle + radian+ Math.PI/3)*this.size,  this.y + Math.sin(this.angle+ radian+ Math.PI/3)*this.size);
      c.lineTo(this.x + Math.cos(this.angle + radian + 2*Math.PI/3 + Math.PI/3)*this.size,  this.y + Math.sin(this.angle+radian+  2*Math.PI/3 + Math.PI/3)*this.size);
      c.lineTo(this.x + Math.cos(this.angle + radian+ 4*Math.PI/3 + Math.PI/3)*this.size,  this.y + Math.sin(this.angle+radian+ 4*Math.PI/3 + Math.PI/3)*this.size);
      c.lineTo(this.x + Math.cos(this.angle +  + radian+ Math.PI/3)*this.size,  this.y + Math.sin(this.angle +  radian+ Math.PI/3)*this.size);
      c.closePath();
      c.fillStyle = "white" ;
      c.fill();
    }
   this.update = function(){
      this.angle+=this.omega;    
    }
    

}

var star = new Star(500, 300, 30, .01);

var time  = 0;
 
function animate(){
requestAnimationFrame(animate);
time++;
if(time==4*60)
{

   anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.6em", 0],
    translateZ:0,
    duration: 1200,
    delay: (el, i) => 70* i
  })
}
 
c.clearRect(0,0,canvas.width,canvas.height);
c.font = "8vw Cinzel, serif";
// star.update();

// star.draw(c);
gradient.addColorStop(0, 'orange');
gradient.addColorStop(.5, 'cyan');
gradient.addColorStop(1, 'orange');


c.fillStyle  = gradient;
c.textAlign = "center";
// c.fillText("DIVYANSHU_RAJ", canvas.width/2, canvas.height/2); 
// mouse.update();

for(var i=0; i<circlearray.length; i++){
if(circlearray[i].y>0)
circlearray[i].update();
else {
   circlearray[i].x = Math.random()*innerWidth;
   circlearray[i].dx = 0;
   circlearray[i].dy = Math.random()*3;
   circlearray[i].update();
}
if(circlearray[i].y>=canvas.height){
   circlearray[i].y = 0;
}


}

   	
}
animate();








