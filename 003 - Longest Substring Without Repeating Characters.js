// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
  let [max, index] = [0, 0]
  let substr = "";

  while(index < s.length) {
    if (!substr.includes(s[index])) {
      substr+= s[index];
      index++;
      max = Math.max(substr.length, max)
    } else {
      substr = substr.substring(1)
    }
  }

  return max;
};

var lengthOfLongestSubstring2 = function(s) {

  let max = 0;
  let substr = '';


  for ( let c of s ) {
    if ( substr.includes(c) ) {
      substr.substring(1)
    } else {
      substr += c;
      max = Math.max(substr.length, max)
    }
  }

  return max;

};

console.log( lengthOfLongestSubstring2( 'pwwkew' ) );
