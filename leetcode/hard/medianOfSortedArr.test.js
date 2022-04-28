// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Test: npm test ./leetcode/hard/medianOfSortedArr.test.js
// 0(m+n)

describe('median of sorted arrays', () => {
  it('returns the media of sorted arrays', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toStrictEqual(2.5)
    expect(findMedianSortedArrays([], [1])).toStrictEqual(1)
  })
})

const findMedianSortedArrays = function (num1, num2) {
  let num = num1

  for (let i = 0; i < num2.length; i++) {
    num.push(num2[i])
  }

  num = num.sort((a, b) => a - b)
  if (num.length === 1) return num[0]

  let mid = Math.floor(num.length / 2)

  if (num.length % 2 === 0) return (num[mid] + num[mid - 1]) / 2
  else return num[mid]
};