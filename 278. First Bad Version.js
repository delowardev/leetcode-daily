// https://leetcode.com/problems/first-bad-version/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        if ( n === 1) {
            if ( isBadVersion(1)) {
                return 1;
            }
            return n + 1;
        }

        let left = 1;
        let right = n;
        let getMid = () => left + Math.floor( ( right - left ) / 2 )

        while( right >= left ) {
            const mid = getMid( left, right )
            if (isBadVersion( mid )) {
                if ( ! isBadVersion( mid - 1) ) {
                    return mid;
                }
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return n + 1;

    };
};

function isBadVersion( n ) {
    return n > 2;
}

const result = solution( isBadVersion )

console.log( result( 5 ))
