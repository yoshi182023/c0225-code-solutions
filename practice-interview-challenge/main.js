'use strict';
const getRangeReport = (start, end) => {
  const result = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0,
  };
  for (let num = start; num <= end; num++) {
    result.total += num;
    result.range.push(num);
    if (num % 2 === 0) {
      result.evens.push(num);
    } else {
      result.odds.push(num);
    }
  }
  result.average = (start + end) / 2;
  return result;
};
console.log(getRangeReport(1, 5));
