class Drawing {
            
    constructor(allow = true){
        this.allow = allow;
    }
    
    drawRect = (x, y, width, height, bocolor = "blue", icolor = "blue", linewidth = 1, passThrough = false) => {
        if (canvas.getContext && this.allow) {
            ctx.beginPath();
            ctx.lineWidth = linewidth;
            ctx.strokeStyle = bocolor;
            ctx.fillStyle = icolor;
            ctx.rect(x, y, width, height);  
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
    
    drawCircle = (x, y, radius, bocolor="red", icolor = "red", startAngle = 0, endAngle = 2 * Math.PI, anticlockwise = false, passthrough = false) =>{
        if (canvas.getContext && this.allow) {
            ctx.beginPath();
            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            ctx.strokeStyle = bocolor;
            ctx.fillStyle = icolor
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
        
}

class Thing
{
    img;
    x;
    y;
    width;
    height;
    constructor(src, x, y, height = 50, width = 50)
    {
        this.img=new Image();
        this.img.src=src;
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
            
    }
}
        
class sound
{
    sound;
    constructor(src)
    {
        this.sound=document.createElement('audio');
        this.sound.src=src;
        this.sound.setAttribute("preload","auto");
        this.sound.setAttribute("controls","none");
        this.sound.style.display="none";
    }
    play = () =>
    {
        this.sound.play();
    }
    stop = () =>
    {
        this.sound.pause();
    }
    decVol = () =>
    {
    	if(this.volume>=0)
        {
    		this.volume-=20;
        }
    }
    incVol = () =>
    {
    	if(this.volume<=100)
        {
    		this.volume+=20;
        }
    }
}
