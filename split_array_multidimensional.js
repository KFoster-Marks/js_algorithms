/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunk(arr, size) {
  var newArr = [];
  for (i=0; i<arr.length; i+=0) { //Here, the counter should not increase! Duh!
      var sliced = arr.slice(i, size);
      console.log(sliced);
      newArr.push(sliced);
      console.log(newArr);
      arr.splice(0, size);
      console.log(arr);
  }
  return newArr;
}
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
//chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].