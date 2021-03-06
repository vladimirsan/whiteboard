'use strict';

module.exports = function(arr) { // Big O notation: O(n)
  if(!Array.isArray(arr)) return null;

  let sortArr = arr.sort((a, b) => a - b);
  let missing;

  for(let i in sortArr) {
    if(sortArr[i] === sortArr[i-1]) return null;
    if((sortArr[i] - sortArr[i - 1]) !== 1) {
      missing = (sortArr[i] - 1);
    }
  }

  if(!missing) return 'no missing numbers';
  return missing;
};

// **** Solution Two ****
// module.exports = function(arr) {
//   let oneHundredSum = 5050; // 100*(100+1)/2

//   let arrSum = arr.reduce((a, c) => a + c);

//   let missing = oneHundredSum - arrSum;

//   return missing;
// };