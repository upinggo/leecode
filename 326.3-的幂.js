/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if(n===0) return !1;
let result = n;
while (!(result % 3)&&result!==1) {
  result=result/3
}
return result===1
};
// @lc code=end

