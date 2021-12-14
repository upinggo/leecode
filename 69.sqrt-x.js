/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) return 1;
  let max = x,
    min = 0,
    middle = 0;
  // let outload = true;
  while (Math.floor(max) - Math.floor(min) !==0) {
    middle = (min + max) / 2;
    if (middle * middle === x) {
      return middle;
    }
    if (middle * middle > x) {
      max = middle;
    }
    if (middle * middle < x) {
      min = middle;
    }
  }
  return Math.floor(min);
};
// @lc code=end

a = mySqrt(4);
a;
