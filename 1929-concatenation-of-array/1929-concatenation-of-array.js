/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const numLen = nums.length
    let ans = nums
    for(let i = 0; i < numLen; i++) {
        ans[numLen + i] = nums[i]
    }
    return ans
};