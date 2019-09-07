function shape (name, sides, width, height){
    this.name = name;
    this.sides = sides;
    this.width = width;
    this.height = height;
    this.number = number;
    this.area = function () {
        return this.height*this.width + " sqaure units"
    }
    this.perimeter = function(){
        return (2*(this.height))+(2*(this.width))
    }
}

function square (name, sides,length ){
    this.name = name;
    this.sides = sides;
    this.length = length;
    this.number = number;
    this.area = function () {
        return this.length*this.length + " sqaure units"
    }
    this.perimeter = function(){
        return (4*(this.length))
    }
}

var rectangle = new shape ('rectangle', '4', 3, 6);

var square = new square ('square', '4', 4)  

rectangle

console.log(rectangle.area ())

console.log(rectangle.perimeter()) 

console.log(square.perimeter())

console.log(square.area())