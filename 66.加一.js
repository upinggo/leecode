/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let ten = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (ten) {
      digits[i] += 1;
      if (digits[i] === 10) {
        if (i === 0) {
          digits[i]=0
          digits.unshift(1);
          return digits
        }
        digits[i] = 0;
        continue;
      } else {
        ten = false;
        return digits;
      }
    }
    if (digits[i] === 9) {
      if(i===0){
        digits[i]=0
        digits.unshift(1)
        return digits
      }
      digits[i] = 0;
      ten = true;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  return digits;
};
// @lc code=end

plusOne([9,9,9]);
