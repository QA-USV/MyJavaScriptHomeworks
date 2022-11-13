
// Задание 1
'use strict';

function getArrayParams(...array) {
  let sum = 0; 
  let avg = 0;
  let min = +array[0];
  let minEdge = -100;
  let max = +array[array.length - 1];
  let maxEdge = 100;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minEdge || array[i] > maxEdge) {
      return (`'${array[i]}' is out of range from ${minEdge} to ${maxEdge}.`);
    } 
    if (array[i] < min) {
      min = array[i];
    } 
    if (array[i] > max) {
      max = array[i];
    }
    sum += array[i];
    avg = (sum / array.length).toFixed(2);
    avg = +avg;
    }
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(...array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum;
}

function makeWork(...arrOfArr) {
  let max = 0; 
  func = worker;
  for (let i = 0; i < arrOfArr.length; i++) {
      if (worker(arrOfArr[i]) > max) {
        max = func(array);
      }
    }
  return max;
}
console.log(makeWork([1, 2, 3, 4], [10, 20, -10, -20]));




// Задание 3
function worker2(arr) {
  // Ваш код
}
