var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var colors=['#85144b',"#0074D9",'#D8C3A5','#FF851B'];
var mouse =
{ x:undefined,y:undefined};
var circlearray=[];
canvas.style.backgroundColor = "black";
canvas.width = window.innerWidth ;
canvas.height  = innerHeight;
 function Circle(x,y,dx,dy,radius)
 { this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
   this.radius=radius;

   this.draw=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
    c.fillStyle="white";
    c.fill();

    }

    this.update=function(){        
    if (this.x+this.radius>canvas.width||this.x-this.radius<0)
            { this.dx=-this.dx;
            }
    if( this.y+this.radius>canvas.height||this.y-this.radius<0){
    this.dy=-this.dy
    }
    this.x+=this.dx;
    this.y+=this.dy;
    if(this.x-mouse.x<100&&this.x-mouse.x>-100&&this.y-mouse.y<100&&this.y-mouse.y>-100){
     if(this.radius<40)
      this.radius+=1;
    }
     else if(this.radius>2)
  	 this.radius-=1;
     this.draw();
          } 
 }  
  
 for(var i=0; i<100; i++)
 	{   var x=Math.random()*canvas.width;
        var y=Math.random()*canvas.height;
        var dx=(Math.random()-0.5);
        var dy=(Math.random()-0.5);
        var radius=Math.random()*3;
    circlearray.push(new Circle(x,y,dx,dy,radius));
 	}
window.addEventListener('mousemove',function(event){ 
 mouse.x=event.pageX;
 mouse.y=event.pageY;
  }
 ); 
 
  
function animate(){
requestAnimationFrame(animate);
 
c.clearRect(0,0,canvas.width,canvas.height);
c.font = "20vh Cinzel, serif";
c.fillStyle = 'rgba(255,255,255,0.4)';
c.textAlign = "center";
c.fillText("DIVYANSHU_RAJ", canvas.width/2, canvas.height/2); 
for(var i=0; i<circlearray.length; i++)
circlearray[i].update();
   	
}
animate();




