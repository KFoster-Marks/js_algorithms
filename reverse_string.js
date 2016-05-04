//Reverse the provided string. The result must be a string.

//simpler way to reverse string
function reverseString(string) {
	var reversed = "";
	for (var i = string.length-1; i >= 0; i--) {
		//console.log(i);
		//console.log(string[i]);
		reversed = reversed + string[i];
		console.log(reversed);
}
return reversed;
}
reverseString("My cars are AWESOME!");


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
