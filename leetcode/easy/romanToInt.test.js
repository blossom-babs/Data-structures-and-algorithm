// https://leetcode.com/problems/roman-to-integer/submissions/
// Test: npm test ./leetcode/easy/romanToInt.test.js
//0(n) - time | 0(n) -space

describe('roman to integer', () => {
  it('converts roman to integer', () => {
    expect(romanToInt('viii')).toBe(8)
    expect(romanToInt('mmi')).toBe(2001)
  })
})

const romanToInt = (s) => {
  s = s.toUpperCase()
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let curr = hash[s[i]]
    let nxt = hash[s[i + 1]]
    if (curr < nxt) {
      sum -= curr
    } else {
      sum += curr
    }
  }
  return sum
};
