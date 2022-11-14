'use strict';

// Задание 1
//A function to count min, max and average value of an array. 

function getArrayParams(arr) { 
  const initialSum = 0;
  const sum = arr.reduce((partialSum, elem) => partialSum + elem, initialSum); 
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}
  
// Задание 2
// A function to find the max sum of numbers of array among subarrays.

const worker = function(arr) { // 
  const initialSum = 0;
  const sum = arr.reduce((partialSum, elem) => partialSum + elem, initialSum);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr.reduce((a, b) => Math.max(func(a), func(b)));
  return max;
}

// Задание 3
//A function to find the max absolute value of a number in array.

const worker2 = function(arr) {
  const maxInArray = Math.max(...arr);
  const minInArray = Math.min(...arr);
  const absInArray = Math.abs(maxInArray - minInArray);
  return absInArray;
}