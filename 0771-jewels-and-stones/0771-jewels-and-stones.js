/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// create a variable to hold count
// loop through the stones input
// check if stones[i] is in jewels (includes method)
// if it is, increment the count variable
// return count

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    for(let i = 0; i < stones.length; i++){        
        if(jewels.includes(stones[i])) {
        count++
    }
}
    return count
};