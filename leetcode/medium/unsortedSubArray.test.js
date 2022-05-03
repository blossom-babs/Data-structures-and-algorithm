//https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// Test: npm test ./leetcode/medium/unsortedSubArray.test.js
// 0(n) - time | 0(1) - space

describe('unsorted sub array', () => {
  it('returns the length of unsorted subarray', () => {
    expect(findUnsortedSubarray([4, 6, 3, 2, 7, 5, 8])).toBe(6)
    expect(findUnsortedSubarray([1, 3, 2, 4, 5])).toBe(2)
    expect(findUnsortedSubarray([])).toBe(0)
  })
})


const findUnsortedSubarray = function (nums) {
  let start = 0
  let end = nums.length - 1

  while (start + 1 < nums.length && nums[start] <= nums[start + 1]) start++

  while (end - 1 >= 0 && nums[end] >= nums[end - 1]) end--

  if (start === nums.length - 1) return 0

  let min = +Infinity
  let max = -Infinity

  for (let i = start; i <= end; i++) {
    min = Math.min(min, nums[i])
    max = Math.max(max, nums[i])
  }
  while (start - 1 >= 0 && nums[start - 1] > min) start--

  while (end + 1 <= nums.length && nums[end + 1] < max) end++

  return end - start + 1
}
