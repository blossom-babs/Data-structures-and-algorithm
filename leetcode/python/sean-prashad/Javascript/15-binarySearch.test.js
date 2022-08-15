// https://leetcode.com/problems/binary-search/
// Test: npm test ./sean-prashad/Javascript/15-binarySearch.test.js
// 0(log n) - time | 0(1) - space

describe('#binary search', () => {
  it('returns the index of a given target', () => {
    expect(binarySearch([1, 0, 3, 5, 9, 12], 9)).toBe(4)
    expect(binarySearch([1, 0, 3, 5, 9, 12], 2)).toBe(-1)
    expect(binarySearch([1], 2)).toBe(-1)
  })
})


const binarySearch = (nums, target) => {
  let lower = 0
  let upper = nums.length - 1

  while (lower <= upper) {
    let mid = Math.floor((upper + lower) / 2)

    if (target === nums[mid]) {
      return mid
    }

    if (nums[mid] > target) {
      upper = mid - 1
    } else {
      lower = mid + 1
    }
  }

  return -1
};