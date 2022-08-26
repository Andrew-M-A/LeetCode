/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
        let lastWord = 0;
 
    x = s.trim();
 
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            lastWord = 0;
        }
        else {
            lastWord++;
        }
    }

    return lastWord;
};