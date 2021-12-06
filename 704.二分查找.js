/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length;
  let start=0,end = len-1,middle=end/2;
  if(nums[end/2]===target){
    return end/2
  }
  if(nums[len/2]>target){

  }
};
// @lc code=end

