/**
 * @param {number[]} nums
 * @return {number[]}
 */

// loop through the array
// set index[i]to the value of the first index (0) + i

var runningSum = function(nums) {
    
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = sum + nums[i];
        sum = nums[i];
    }
    
    return nums;
};