// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/


var reverseArrayPart = function (s, left, right) {

    while ( left < right ) {
        [ s[left], s[right] ] = [s[right], s[left]]
        left++;
        right--;
    }

    return s;
}

var twoSum = function(numbers, target) {

    let left = 0;
    let right = numbers.length - 1;

    while ( left < right ) {

        const sum = numbers[left] + numbers[right];

        if ( sum === target) {
            break;
        }

        if ( sum > target ) {
            right--;
        } else {
            left++;
        }

    }

    return [left + 1, right + 1]

};


console.log( twoSum( [2,7,11,15], 9 ) )
