'use strict';

var myString = "This is the best sentence you will ever read! Do you really think you've read a sentence as awesome as this one? I didn't think so, you crazy fool.";


function scramble(string){
  var stringSplit = string.split(' ');
  var scrambledWords = scrambleWords(stringSplit);
  return scrambledWords.join(' ');
}


function scrambleWords(arr){
  var scrambledWords = [],
      regEx = /[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,
      scrambledWord,
      currentWord,
      str;

  for (var i = 0; i < arr.length; i++){
    currentWord = arr[i].split('');

    if(regEx.test(currentWord)) {
      scrambledWord = shuffle(currentWord.splice(1, currentWord.length - 3));
    } else {
      scrambledWord = shuffle(currentWord.splice(1, currentWord.length - 2));
    }

    for (var j = 0; j < scrambledWord.length; j++){
      currentWord.splice(1, 0, scrambledWord[j]);
    }

    str = currentWord.join('');
    scrambledWords.push(str);
  }
  return scrambledWords;
}

function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swap
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

console.log(scramble(myString));
