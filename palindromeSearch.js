// 0,0 0,1 0,2....
// 1,1 1,2 ...
// 2,2
// return longest
// console.log(process.argv);
let inputString = process.argv.slice(2).toString().toLowerCase();
let engWords = [];
let longest = 0;
let palindromes = [];

function findPalindromes(){
  for(let i = 0; i < inputString.length; i++){
    for(let j = i + 1; j <= inputString.length; j++){
      let toCheck = inputString.slice(i, j);
      // console.log(toCheck);
      if(palindromeCheck(toCheck) && toCheck.length !== 1 || toCheck === 'a' || toCheck === 'i'){
        if(!palindromes.includes(toCheck)){
          palindromes.push(toCheck);
        }
      }
    }
  }
  console.log(palindromes);
}

function palindromeCheck(checkString){
  let mid = Math.floor(checkString.length/2);
  let last = checkString.length - 1;

  for (let k = 0; k < mid; k++) {
    if (checkString[k] !== checkString[last - k])
      return false;
  }

  return true;
}

function isEnglish(){
  let checkWord = require('check-word');
  let words = checkWord('en');

  for(let currentWord of palindromes){
    if(words.check(currentWord)){
      engWords.push(currentWord);
      if(longest < currentWord.length){
        longest = currentWord.length;
      }
    }
  }

  if(engWords.length === 0){
    console.log('There are no Enlish Palindromes.');
    return;
  }
    engWords = engWords.filter(word => word.length >= longest);
    console.log('The longest English Palindrome(s): ' + engWords.join(", "));
}

findPalindromes();
isEnglish();