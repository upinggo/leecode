/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let number = parseInt(n.toString(10));
    let countOne = 0;
    while (number > 0) {
      if (number % 2 === 1) {
        countOne += 1;
      }
      number = Math.floor(number / 2);
    }
      return countOne
    
};
// @lc code=end

console.log(hammingWeight(000000000000000000011100001011));