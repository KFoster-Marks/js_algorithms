/* Return the length of the longest word in the provided sentence. */

function findLongestWord(str) {
  var strArray = str.split(" ");
  //console.log(strArray);
  var longestWordLength = 0;
  for (i=0; i<strArray.length; i++) {
     if (strArray[i].length > longestWordLength) {
         longestWordLength = strArray[i].length;
         //console.log(longestWordLength);
     }
  }
  return longestWordLength;
}

findLongestWord("Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.");
