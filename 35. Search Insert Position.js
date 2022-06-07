// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while ( right >= left ) {
        let middle = left + Math.floor( (right - left) / 2 )

        if ( nums[middle] === target ) {
            return middle;
        }

        if ( nums[middle] > target ) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

    }

    return left;

};


console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
