/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];
  let myHash = {};
  nums.find((num, idx) => {
    let requiredNum = target - num;
    if (myHash[requiredNum] != undefined) {
      output.push(myHash[requiredNum], idx);
      return true;
    } else {
      myHash[num] = idx;
    }
  });
  return output;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
