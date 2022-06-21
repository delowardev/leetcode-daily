// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return mid;
        }

        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

var searchMatrix = function(matrix, target) {

    let desiredArray = [];

    for( let m of matrix ) {
        const last = m.splice(m.length - 1, 1)[0];
        const first = m.splice(0, 1)[0]

        if ( first === target || last === target ) {
            return true;
        }

        if ( target >= first && target <= last ) {
            desiredArray = m;
            break;
        }
    }


    return binarySearch(desiredArray, target) !== -1 ;

};


function searchMatrix2( matrix, target ) {

    const colCount = matrix[0].length;
    const rowCount = matrix.length;

    let i = 0;
    let j = colCount - 1;

    while ( i < rowCount && j > -1 ) {
        if ( matrix[i][j] === target) {
            return true;
        }

        if ( matrix[i][j] < target ) {
            i++;
            j = colCount - 1;
        } else {
            j--;
        }
    }


    return false;
}


console.log( searchMatrix2( [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13 ) )
