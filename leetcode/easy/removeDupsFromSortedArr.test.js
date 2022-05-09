//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Test: npm test ./leetcode/easy/removeDupsFromSortedArr.test.js
// 0(n) - time | 0(1) - space

describe('remove duplicates from sorted array', () => {
  it('removes duplicates from sorted array in place', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2)
    expect(removeDuplicates([1, 1, 2, 3])).toBe(3)
  })
})

const removeDuplicates = nums => {
  let left = 1
  let right = 1

  while (right < nums.length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right]
      left++
    }
    right++
  }
  return left
}