/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let fizzArr = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            fizzArr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            fizzArr.push('Fizz')
        } else if (i % 5 === 0) {
            fizzArr.push('Buzz')
        } else {
            let strI = i.toString();
            fizzArr.push(strI);
        }
    }
    return fizzArr;
};