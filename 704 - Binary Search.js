// https://leetcode.com/problems/binary-search/


var search = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while( left <= right ) {

    let mid = Math.floor( left + right / 2 )

    if ( target === nums[mid] ) {
      return mid;
    }

    if ( target < nums[mid] ) {
      right = mid - 1;
    } else {
      left = mid + 1
    }


  }

  return -1;

};
