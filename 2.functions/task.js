function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
for (let elem of arr) {
  if (elem > max) {
    max = elem;
  }
  if (elem < min) {
    min = elem;
  }
  sum += elem;
}

let avg = sum / arr.length;
avg = avg.toFixed(2);
avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0; 
  } 
  let sum = 0;

for (let elem of arr) {
  
  sum += elem;
}
return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0; 
  }
  let min = Infinity;
  let max = -Infinity;
 
  
for (let elem of arr) {
  if (elem > max) {
    max = elem;
  }
  if (elem < min) {
    min = elem;
  }
    }
    return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0; 
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let elem of arr) {
    if (elem % 2 === 0) {
      sumEvenElement += elem;
    } else {
      sumOddElement += elem;
    }
  }
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0; 
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let elem of arr) {
    if (elem % 2 === 0) {
      sumEvenElement += elem;
      countEvenElement++;
  }
}
return sumEvenElement / countEvenElement;
}



function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let elem of arrOfArr) {
           const result = func(...elem);
            
      if (result > maxWorkerResult) {
          maxWorkerResult = result; 
      }
  }
  return maxWorkerResult;
}

