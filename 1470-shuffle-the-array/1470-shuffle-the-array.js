/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let audArr = [];
    for(let i = 0; i < n; i++) {
        audArr.push(nums[i], nums[i+n])
    }
    return audArr;
};