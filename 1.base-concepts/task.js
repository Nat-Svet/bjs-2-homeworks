"use strict"
function solveEquation(a, b, c) {
   let d = (b ** 2) - (4 * a * c);
  if (d < 0) {
    return [];
  } else if (d === 0) {
    return [-b / (2 * a)];
  } else {
    return [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)]
  }
  }
 
  function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = (percent / 100) / 12;
    let n = countMonths;
    let s = amount - contribution;
    let paymentMonthly = s * (p + (p / (((1 + p) ** n) - 1)));
    let amountTotal = paymentMonthly * n;
    return +amountTotal.toFixed(2);
  }
   
 
  





