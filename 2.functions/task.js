// Задание 1

'use strict';
function getArrayParams(arr) {
  const initialSum = 0;
  const sum = +arr.reduce((partialSum, elem) => partialSum + elem, initialSum); 
  let max = +arr.reduce((partialSum, elem) => Math.max(partialSum, elem), -Infinity);
  let min = +arr.reduce((partialSum, elem) => Math.min(partialSum, elem), Infinity);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}
  
// Задание 2
function worker(arr) {
  const initialSum = 0;
  const sum = +arr.reduce((partialSum, elem) => partialSum + elem, initialSum);
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = +arrOfArr.reduce((a, b) => Math.max(worker(a), worker(b)));
  return max;
}



// Задание 3
function worker2(arr) {
  const maxInArray = +arr.reduce((partialSum, elem) => Math.max(partialSum, elem), -Infinity);
  const minInArray = +arr.reduce((partialSum, elem) => Math.min(partialSum, elem), Infinity);
  const absInArray = Math.abs(maxInArray - minInArray);
  return absInArray;
}

function makeWork(arrOfArr, worker2) {
  const abs = +arrOfArr.reduce((a, b) => Math.max(worker2(a), worker2(b)));
  return abs;
}