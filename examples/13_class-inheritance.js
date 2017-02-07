/************************************ */
/**/ topic('classe inheritance');
/************************************ */

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Square extends Shape {
    constructor (id, x, y, width) {
        super(id,x,y);
        this.width = width;
    }

    get area() {
      return this.width * this.width;
    }

    resize(width) {
      this.width = width;
    }
}

const square = new Square('My Shape',1,1,12);
show('created', square);

square.move(2,2);
show('base method applied', square, square.area);

square.resize(4);
show('child method applied',square, square.area);

