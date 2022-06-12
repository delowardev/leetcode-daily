// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Solution 1, slower
/*var reverseWords = function(s) {
    let left = 0, pointer = 0;
    s = s.split("");

    var reverseArrayPart = function (left, right) {
        while ( left < right ) {
            [ s[left], s[right] ] = [s[right], s[left]]
            left++;
            right--;
        }
        return s;
    }

    while ( pointer <= s.length ) {

        pointer++;
        if ( s[ pointer ] === ' ' || pointer === s.length ) {
            reverseArrayPart( left, pointer - 1 )
            pointer++;
            left = pointer;
        }

    }

    s = s.join("");

};*/

var reverseWords = function ( s ) {
    let result = '';
    let word = '';

    for ( let character of s ) {
        if ( character === ' ' ) {
            result += word + character;
            word = '';
        } else {
            word = character + word;
        }
    }

    return result + word;

}


console.log(  reverseWords("Let's take LeetCode contest") )
