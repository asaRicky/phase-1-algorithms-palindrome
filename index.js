function isPalindrome(word) {
  // Write your algorithm here
  var re = /[\W_]/g;
  var lowRegStr = word.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

//Palindrome is a word spelt the same forward and backward

/*

 The /[\W_]/g lets break this down step by step

  the [] creates a character set
  the \W represents a non word and _ for underscore it listens for a non word and an underscore

 -The /[\W_]/g this stands for a non word and underscoressolution here
-The regex(re) describes a character for defining a search pattern
-first the word is changed to lowwer case then its replaced
-REplaced not really but reversed...it is first split so that each letter can stand individually for itself
-then its reversed and joined togethr to give the desied output
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
//
