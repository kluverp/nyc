function Car(w, h, color, x, y) 
{
    component.call(this, w, h, color, x, y);

    this.update = function()
    {
        this.newPos();
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}

Car.prototype = Object.create(component.prototype);
Car.prototype.constructor = Car; 
