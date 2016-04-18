/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number. */

function repeat(str, num) {
  repeatedString = "";
  for (i=0;i<num;i++) {
      repeatedString = repeatedString + str;
  }
  return repeatedString; 
}

repeat("abc", 19);
//repeat("*", -2); //should return "".