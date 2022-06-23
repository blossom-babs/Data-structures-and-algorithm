"use strict";

/*
https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

complexity analysis
0(1) - space
0(n) - time
*/

describe('Check if One String Swap Can Make Strings Equal', () => {
  it('returns true if it satisfies the condition', () => {
    expect(areAlmostEqual('bank', 'kanb')).toBe(true)
    expect(areAlmostEqual('attack', 'defend')).toBe(false)
    expect(areAlmostEqual('kelb', 'kelb')).toBe(true)
    expect(areAlmostEqual('kelb', 'belk')).toBe(true)
    expect(areAlmostEqual('aa', 'ac')).toBe(false)
    expect(areAlmostEqual('aaz', 'caa')).toBe(false)
  })
})


const areAlmostEqual = (s1, s2) => {
  if (s1.length !== s2.length) return false

  let count = 0
  let index = []

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++
      index.push(i)
    }
  }

  let idxOne = index[0]
  let idxTwo = index[1]

  if (count > 2 || (s1[idxOne] !== s2[idxTwo] || s1[idxTwo] !== s2[idxOne])) {
    return false
  }

  return true
}