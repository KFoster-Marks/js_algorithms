//Reverse the provided string. The result must be a string.

function reverseString(str) {
  var inputString = str;
  var holdingArray = [];
  holdingArray = inputString.split("");
  holdingArray.reverse();
  var done = holdingArray.join('');
  return done;
} 
reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");