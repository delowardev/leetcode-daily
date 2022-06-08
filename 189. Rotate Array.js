// https://leetcode.com/problems/rotate-array/

// var rotate = function(nums, k) {
//     const len = nums.length;
//
//     if ( k > len ) {
//         k = k % len;
//     }
//
//     const part = nums.splice( len - k, k )
//     nums.splice( 0, 0, ...part )
//
//     return nums;
// };


var reverseArrayPart = function (nums, left, right) {

    while ( left < right ) {
        [ nums[left], nums[right] ] = [nums[right], nums[left]]
        left++;
        right--;
    }

    return nums;
}

var rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    reverseArrayPart( nums, 0, len - 1)
    reverseArrayPart( nums, 0, k - 1 )
    reverseArrayPart( nums, k, len - 1)
    return nums;
};

console.log( rotate([1, 2, 3, 4, 5, 6, 7], 2) )
