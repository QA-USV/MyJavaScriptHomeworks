// 'use strict';

// // Task 1

// function parseCount(value) {
//     const error = new Error ('Невалидное значение');
//     if ((/^\d*$/.test(value) === false)) {
//         throw error;
//     }
//     if (typeof value === 'string') {
//        result = Number.parseInt(value);
//        return result;
//     }
//     if (result.isNaN) {
//        throw error;
//     }
// }

// function validateCount(value) {
//     try {
//         parseCount(value);
//     } catch (error) {
//         throw error;
//     }
// }

// //Task 2

// class Triangle {
//     constructor (side1, side2, side3) {
//         this.side1 = side1;
//         this.side2 = side2;
//         this.side3 = side3;
//         if ((this.side1 + this.side2) <= this.side3 
//             || (this.side1 + this.side3) <= this.side2 
//             || (this.side2 + this.side3) <= this.side1 
//             || (this.side1, this.side2, this.side3) <= 0) {
//         throw error = new Error ('Треугольник с такими сторонами не существует');
//         } 
//     }

//     getPerimeter() {
//         this.perimeter = +(this.side1 + this.side2 + this.side3);
//         return this.perimeter;
//     }

//     getArea() {
//         const p = (this.side1 + this.side2 + this.side3) / 2;
//         this.area = +(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3);
//         return this.area;
//     }  
// }

//     function getTriangle(side1, side2, side3) {
//         try {
//             return new Triangle(side1, side2, side3);
//         } catch (error) {
//             throw error = new Error ('Треугольник с такими сторонами не существует');
            
//             return {
//                 getPerimeter: () => ('Треугольник с такими сторонами не существует'),
//                 getArea: () => ('Треугольник с такими сторонами не существует'),
//             }
//         }
//     }