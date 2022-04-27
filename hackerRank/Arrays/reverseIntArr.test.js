// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
// Test: npm test ./hackerRank/Arrays/reverseIntArr.test.js
// 0(n) - time | 0(1) - space

describe('reverse an array of integers', () => {
  it('returns an array of reversed integers', () => {
    expect(reverseArray([2,5,4])).toStrictEqual([4,5,2])
    expect(reverseArray([0])).toStrictEqual([0])
  })
})

const reverseArray = arr => {
  let reversed = []

  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i])
  }

  return reversed
}