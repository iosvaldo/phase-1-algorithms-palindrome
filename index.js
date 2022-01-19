function isPalindrome(word) {
  // Write your algorithm here
   const letterArray = word.split('');
   const letterReverse = letterArray.reverse()
   const reverseString = letterReverse.join('')

   if (word == reverseString) {
     return true
   } else {
     return false
   }
}

/* 
  Add your pseudocode here
  The function has to 
  take a string and
  return true;
  if not, the
  function should
  return a false.
*/

/*
  Add written explanation of your solution here
  The function takes 
  the word and splits it 
  into an array, and the 
  array's then reversed. 
  The array is then re-joined again. 
  Next, the original word is compared 
  to the reversed word. Finally, if it is true, 
  then it returns true, or else it returns a false.
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
