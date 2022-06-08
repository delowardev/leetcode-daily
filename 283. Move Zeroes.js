// https://leetcode.com/problems/move-zeroes/


var moveZeroes = function(nums) {

    let i = 0;
    let j = 0;

    while ( j < nums.length - 1 ) {
        j++;
        if ( nums[i] === 0 ) {
            nums.splice( i, 1 );
            nums.push(0);
        } else {
            i++;
        }
    }
};


console.log( moveZeroes( [0,1,0,3,12] ) )
