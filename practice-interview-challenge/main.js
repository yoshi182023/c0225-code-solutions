'use strict';
const getRangeReport = (start, end) => {
  //  total - the sum of all integers from start to end.
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
  const average = (start + end) / 2;
  result.average.push(average);
  return result;
};
console.log(getRangeReport(1, 5));
