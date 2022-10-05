/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let obj={}
    for(let q of s){
        if(q in obj)return q
        obj[q]=1
    }
};