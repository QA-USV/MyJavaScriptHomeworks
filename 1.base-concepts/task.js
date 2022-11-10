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
  let s = amount - contribution;
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
    totalAmount = (s * (p + p / (((1 + p) ** n) - 1)) * n).toFixed(2);
  return totalAmount;
  }
}

  function months(m) {
    let now = new Date();
    now.setMonth(now.getMonth() + m);
    return now;
  }
  
  console.log(calculateTotalMortgage(10, 0, 50000, months(12)));
  console.log(calculateTotalMortgage(10, 1000, 50000, months(12)));
  console.log(calculateTotalMortgage(10, 0, 20000, months(24)));
  console.log(calculateTotalMortgage(10, 1000, 20000, months(24)));
  console.log(calculateTotalMortgage(10, 20000, 20000, months(24)));
  console.log(calculateTotalMortgage(10, 0, 10000, months(36)));
  console.log(calculateTotalMortgage(15, 0, 10000, months(36)));