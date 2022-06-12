// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    const len = s.length;
    const half = Math.floor( len / 2 );
    for( let i = 0; i < half; i++ ) {
        [s[i], s[ len - i - 1 ]] = [s[len - i - 1], s[i]]
    }
    return s;
};


console.log( reverseString( ["h","e","l","l","o"] ))
