'use strict';

// Task 1

function parseCount(value) {
    const error = new Error ('Невалидное значение');
    if ((/^\d*$/.test(value) === false || typeof value != 'string')) {
        throw error;
    }
    if ((parseInt(value)).isNaN) {
        throw error;
    } else
        return parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;    
    }
}

//Task 2

class Triangle {
    constructor (a, b, c) {
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
        const error = new Error ('Треугольник с такими сторонами не существует');
        if ((a + b) <= c 
            || (a + c) <= b 
            || (b + c) <= a 
            || (a, b, c) <= 0) {
        throw error;
        } 
    }

    getPerimeter() {
        return (this.side1 + this.side2 + this.side3);
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3);
    }  
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getPerimeter: () => ('Ошибка! Треугольник не существует'),
            getArea: () => ('Ошибка! Треугольник не существует'),
        }
    }
}