module.exports = class Square {
    constructor (radius){
        this.radius = radius;
    }
    getSquare(){
       return Math.pow(this.radius, 2)*Math.PI;
    }
};