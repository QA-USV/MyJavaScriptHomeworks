'use strict';

function solveEquation(a, b, c) {

  let arr = [];
  let discr = b ** 2 - 4 * a * c;

  if (discr < 0) {
    arr = [];
  } 
  if (discr === 0) {
    let d = -b / (2 * a);
    arr.push(d);
  } 
  if (discr > 0) {
    let e = (-b + Math.sqrt(discr) ) / (2 * a);
    let f = (-b - Math.sqrt(discr) ) / (2 * a); 
    arr.push(e, f);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let totalAmount = 0;
  let p = percent / 100 / 12;
  let dateNow = Date.now();
  let datePayCredit = new Date(date).getTime();
  let millisecondsInMonth = 2592000000;
  Number(percent);
  Number(contribution);
  Number(amount);

  if (isNaN(percent)) {
    return 'Параметр "Процентая ставка" содержит неправильное значение ' + '"' + percent + '"' + '.';
  } else if (isNaN(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение ' + '"' + contribution + '"' + '.';
  } else if (isNaN(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение ' + '"' + amount + '"' + '.';
  } else {
    let creditPeriodInMilliseconds = new Date(datePayCredit - dateNow);
    let creditPeriodInMonths = Math.floor(creditPeriodInMilliseconds / millisecondsInMonth);
    let n = creditPeriodInMonths;
    totalAmount = (amount * (p + p / (((1 + p) ** n) - 1)) * n).toFixed(2);
  return totalAmount;
  }
}