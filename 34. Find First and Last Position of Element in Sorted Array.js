// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    let index1 = -1;
    let index2 = -1;

    while ( left <= right ) {

        if ( index1 > -1 && index2 > -1 ) {
            break;
        }

        if ( target === nums[left] ) {
            index1 = left;
        }

        if ( target === nums[right]) {
            index2 = right;
        }

        if (index1 === -1) left++;
        if( index2 === -1 ) right--;
    }

    return [index1, index2]

};


console.log( searchRange( [1], 1 ) )
