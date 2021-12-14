/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  sList = [...s.toLowerCase()].filter(
    (char) => (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)||(char.charCodeAt()>=48&&char.charCodeAt()<=57)
  );
  const mid = Math.floor(sList.length / 2);
  let result = true;
  if (sList.length % 2) {
    for (let i = 1; i <= mid; i++) {
      if (sList[mid - i] !== sList[mid + i]) {
        result = false;
        break;
      }
    }
  } else {
    for (let i = 0; i < mid; i++) {
      // if(i===1&&){}
      let lPos =mid-i-1;
      let rPos = mid+i
      if (sList[lPos] !== sList[rPos]) {
        result = false;
        break;
      }
    }
  }
  return result;
};
// @lc code=end
a = isPalindrome("A man, a plan, a canal: Panama");
console.log(a);
