'use strict';

// Task 1

function parseCount(value) {
    const error = new Error ('Невалидное значение');
    if ((/^\d*$/.test(value) === false)) {
        throw error;
    }
    if (typeof value === 'string') {
       result = Number.parseInt(value);
       return result;
    }
    if (result.isNaN) {
       throw error;
    }
}

function validateCount(value) {
    try {
        parseCount(value);
    } catch (error) {
        throw error;
    }
}

//Task 2

class Triangle {
    constructor (side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        const error = new Error ('Треугольник с такими сторонами не существует')
        if ((this.side1 + this.side2) <= this.side3 
            || (this.side1 + this.side3) <= this.side2 
            || (this.side2 + this.side3) <= this.side1 
            || (this.side1, this.side2, this.side3) <= 0) {
        throw error;
        } 
    }

    getPerimeter() {
        this.perimeter = +(this.side1 + this.side2 + this.side3);
        return this.perimeter;
        
    }

    getArea() {
        const p = (this.side1 + this.side2 + this.side3) / 2;
        this.area = +(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3);
        return this.area;
    }  
}

    function getTriangle(side1, side2, side3) {
        try {
            if ((side1 + side2) <= side3 
            || (side1 + side3) <= side2 
            || (side2 + side3) <= side1 
            || (side1, side2, side3) <= 0) {
                
            checkSides(side1, side2, side3) {
            const error = new Error ('Треугольник с такими сторонами не существует')
            if ((/^\d*$/.test(side1, side2, side3) === false)) {
                throw error;
            }
            if (result.isNaN) {
                throw error;
            }
             else {
            Number(side1);
            Number(side2);
            Number(side3);
            }
        }        
        validateSides(side1, side2, side3) {
            try {
                checkSides();
            } catch (error) {
                throw error;   
            } finally {
            getPerimeter();
            getArea();


            }

        throw error;
        } else {
                return new Triangle(side1, side2, side3);
    }
        // try {
        //     Triangle.getPerimeter();
        //     Triangle.getArea();
        // } catch (error) {
        //     throw new Error ('Треугольник с такими сторонами не существует');
        // }
        