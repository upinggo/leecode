/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const specialMap = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  };
  let res = 0;
  s.match(/IV|IX|XL|XC|CD|CM/g) && s.match(/IV|IX|XL|XC|CD|CM/g).forEach(item => {
    res += specialMap[item];
    s = s.replace(item, '');  // replace all specialMap items
   });
  const enumMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  s.match(/I|V|X|L|C|D|M/g) && s.match(/I|V|X|L|C|D|M/g).forEach(item => {
    res += enumMap[item];
  });
  return res;
}
// @lc code=end

