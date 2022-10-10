/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let divisors = [
        [3, 'Fizz'],
        [5, 'Buzz'],
    ];

    let output = [];
    for (let i = 1; i <= n; i++) {
        let newString = '';
        for (let j = 0; j < divisors.length; j++) {
            if (i % divisors[j][0] === 0) {
                newString += divisors[j][1];
            }
        }
        output.push(newString.length ? newString : i.toString());
    }
    return output;
};