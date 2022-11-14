'use strict';

//Task 1
//First variant 
// function compareArrays(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     const result = arr1.every((value, index) => 
//     arr1[value] === arr2[value] && 
//     arr1[index] === arr2[index]);
//   return result;
//   } else {
//     return false;
//   }
// }

//Task 1
//Second variant 
const compareArrays = (arr1, arr2) => 
arr1.length === arr2.length && 
arr1.every((value, index) => value === arr2[index]);


//Task 2
function advancedFilter(arr) {
  let resultArr = arr.filter(value => value > 0).filter(value => value % 3 === 0).map(value => value * 10);
  return resultArr;
}