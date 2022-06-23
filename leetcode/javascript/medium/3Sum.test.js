// https://leetcode.com/problems/3sum/
// Test: npm test ./leetcode/medium/3Sum.test.js
// 0(n^2) - time | 0(1) - space

describe('3 sum', () => {
  it('returns possible sum of 3 numbers that sum up to 0', () => {
    expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]])
    expect(threeSum([-2, 2, -2, 0, 0])).toStrictEqual([[-2, 0,2]])
    expect(threeSum([])).toStrictEqual([])
    expect(threeSum([1])).toStrictEqual([])
    expect(threeSum([1, 2, 3])).toStrictEqual([])
  })
})

const threeSum = (nums) => {
  if (nums.length < 3) return []

  nums = nums.sort((a, b) => a - b)
  let validSum = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1])
      continue


    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        validSum.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return validSum
};

