function shape (name, sides){
    this.name = name;
    this.sides = sides;
    }

function rectangle (height, width, name, sides){
    this.height = height;
    this.width = width;

    shape.call(this, name, sides)
}

rectangle.prototype = object.create(shape.prototype);

rectangle.prototype.area=function(){
    console.log(this.height*this.width);
}

rectangle.prototype.perimeter=function(){
    console.log(this.height*2 + this.width*2)
}

function square(height, name, sides){
    rectangle.call(this, height, height, name, sides);
}
