/**
 * @param {number[]} nums
 * @return {number[]}
 */

// define a variable with a value of 0 to keep track of the previous value
// loop through the array
// set index[i]to the value of the variable defined in step 1 + nums[i]
// re-assign nums[i] to sum
// return nums from the function

var runningSum = function(nums) {
    
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = sum + nums[i];
        sum = nums[i];
    }
    
    return nums;
};