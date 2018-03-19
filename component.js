function component(width, height, color, x, y) 
{
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.dir = 1;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);        
    };
    this.newPos = function() {
        this.x += this.dir * this.speedX;
        this.y += this.dir * this.speedY;
    };
} 
