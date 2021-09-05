// https://leetcode.com/problems/palindromic-substrings/

function counter(s) {
  let m  = new Array(s.length)

  for (let i = 0; i < m.length; i++) {
    m[i] = new Array(s.length).fill(false);
  }

  let counter = 0;

  for (let g = 0; g < m.length; g++) {
    for (let j = g, i = 0; j < m.length; j++, i++)    {

      if (g === 0) {
        m[i][j] = true
      } else if (g === 1) {
        m[i][j] = s[i] === s[j]
      } else {

        if (s[i] === s[j] && m[i + 1][j - 1] === true) {
          m[i][j] = true
        } else {
          m[i][j] = false
        }
      }

      if (m[i][j]) {
        counter++
      }
    }
  }
  return counter;
}