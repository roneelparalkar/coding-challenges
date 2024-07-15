/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestString = '';
  let longestStringLength = '';
  let startIndexOfLongestString = 0;
  let myHashMap = new Map();
  let leftCounter = 0,
    rightCounter = 0;

  while (rightCounter < s.length) {
    let rightCharacter = s[rightCounter];
    if (myHashMap.has(rightCharacter)) {
      leftCounter = Math.max(myHashMap.get(rightCharacter) + 1, leftCounter);
    }
    myHashMap.set(rightCharacter, rightCounter);
    let lengthOfNewStr = rightCounter - leftCounter + 1;
    if (lengthOfNewStr > longestStringLength) {
      longestStringLength = lengthOfNewStr;
      startIndexOfLongestString = leftCounter;
    }
    rightCounter++;
  }
  longestString = s.slice(startIndexOfLongestString, startIndexOfLongestString + longestStringLength);
  // return { length: longestString.length, str: longestStringLength, startIndexOfLongestString, longestString };
  return longestStringLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('tmmzuxt'));
