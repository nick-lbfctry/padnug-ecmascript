/************************************ */
/**/ topic('classes');
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

const shape = new Shape('My Shape',1,1);
show('created', shape);

shape.move(2,2);
show('method applied', shape);