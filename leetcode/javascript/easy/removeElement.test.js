//https://leetcode.com/problems/remove-element/
// Test: npm test ./leetcode/easy/removeElement.test.js
// 0(n) - time | 0(1) - space

describe('remove element', () => {
  it('removes the val element occurence in the array', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2).nums).toStrictEqual([0, 1, 3, 0, 4, 0, 4, 2])
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2).left).toBe(5)
    expect(removeElement([], 2)).toBe(0)
  })
})

const removeElement = (nums, val) => {
  if (nums.length < 1) return 0

  let left = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }
  return { nums, left }
};