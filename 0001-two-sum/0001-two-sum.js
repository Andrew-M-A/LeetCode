/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// use a hashmap to make referencing an index(key) and it's value easier
// loop through the nums array
// for each index, check if the hash table already has a value of target - nums[i]
// if it does, return the current index and the index where target - nums[i] is
// else, set the value of nums[i] into the hash
// return an empty array

var twoSum = function(nums, target) {
    let map1 = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map1.has(target-nums[i])) {
            return [map1.get(target-nums[i]), i]
        } else {
            map1.set(nums[i], i)
        }
    }
    return [];
};