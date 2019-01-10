// 0,0 0,1 0,2....
// 1,1 1,2 ...
// 2,2
// return longest
// console.log(process.argv);
let inputStrings = process.argv.slice(2);
let longest = '';
let palindromes = [];

for(let currentWord of inputStrings){
  let endIndex = 0;
  for(let i = 0; i< currentWord.length; i++){
    endIndex ++;
    let toCheck = currentWord.slice(i);
    console.log(toCheck);
    // if(palindromeCheck(toCheck)
    //   console.log(toCheck + 'its a palindrome');
  }
  break;
}

function palindromeCheck(checkString){
  let mid = Math.floor(checkString.length/2);
  let last = checkString.length - 1;

  for (var i = 0; i < mid; i++) {
    if (checkString[i] !== checkString[last - i])
      return false;
  }

  return true;
}
