/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let one = 0;
    const hamSammich = n.toString(2);
    for(let i = 0; i <= hamSammich.length; i++) {
        if(hamSammich[i] === '1') {
            one++
        }
    }
    return one
};