/* Return largest # from each sub-array */

function largestOfFour(arr) {
  var largestNums = [];
  for (i=0; i<arr.length; i++) {
      var largestInArray = 0; //Re-sets through each loop
      for (j=0;j<arr[i].length; j++) {
          if (arr[i][j] > largestInArray) {
              largestInArray = arr[i][j];
          }
      }
      largestNums.push(largestInArray);
  }
  return largestNums;
}
largestOfFour([[4, 5, 1, 3] , [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);