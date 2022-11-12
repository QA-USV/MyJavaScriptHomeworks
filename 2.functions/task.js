// Задание 1
function getArrayParams(...arr) {
  let sum = 0; 
  let avg = 0;
  let min = Infinity;
  min >= -100;
  max <= 100;
  let max = -Infinity;
  for (let i of arr.length) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
    avg = (sum / arr.length).toFixed(2);
    avg = +avg;
  }
  return { min: min, max: max, avg: avg };
}

function getArrayParams(...arr) {
  let sum; 
  let avg;
  let min = Infinity;
  let minEdge = -100;
  let max = -Infinity;
  let maxEdge = 100;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minEdge || arr[i] >= maxEdge || (typeof arr[i]) != 'number' || arr[i] === 'undefined') {
      return (console.log(`Mассив может состоять только из чисел в диапазоне от ${minEdge} до ${maxEdge}.`));
    } else if (arr[i] < min) {
      min = value;
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
    avg = (sum / arr.length).toFixed(2);
    avg = +avg;
  }
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(-99, -20, 0, 565, 911));



// Задание 2
function worker(...arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
