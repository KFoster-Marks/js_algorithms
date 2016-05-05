/* Return true if the given string is a palindrome. Otherwise, return false.*/

//Following is a much simpler solution than one written below


//simply regex below
function checkPalindrome(str) {
    var strClean = str.replace(/ /g, "").replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
    console.log(strClean);
    return strClean.toLowerCase() === strClean.split('').reverse().join('').toLowerCase();
}
checkPalindrome("raCe caR");
//checkPalindrome("0_0 (t: /-\ :) 0-0");


//Solution below is overly-complicated
/*
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
    return strNoPunct.toLowerCase() === reverseString(str).toLowerCase();
}
checkPalindrome("raCe caR");
checkPalindrome("0_0 (: /-\ :) 0-0");
*/
