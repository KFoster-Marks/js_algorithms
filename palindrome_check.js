/* Return true if the given string is a palindrome. Otherwise, return false.*/

function reverseString(str) {
  var inputString = str;
  var holdingArray = [];
  holdingArray = inputString.split("");
  holdingArray.reverse();
  var done = holdingArray.join('');
  //remove spaces and punctuation
  var noSpace = done.replace(/ /g, "");
  //console.log(noSpace);
  var noSymbols = noSpace.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
  console.log(noSymbols);
  return noSymbols;
} 

function checkPalindrome(str) {
    var strSpace = str.replace(/ /g, "");
    var strNoPunct = strSpace.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
    if (strNoPunct.toLowerCase() === reverseString(str).toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
checkPalindrome("raCe caR");
checkPalindrome("0_0 (: /-\ :) 0-0");






