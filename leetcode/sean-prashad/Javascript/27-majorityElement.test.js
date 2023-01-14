//https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number}
 */

// 0(n) - TC | 0(n) - SC
const majorityElement = function (nums) {
  const map = {}
  let [maxCount, res] = [0, 0]

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1

    if (map[nums[i]] > maxCount) {
      res = nums[i]
      maxCount = map[nums[i]]
    }
  }

  return res
};

const majorityElementBoyer = function (nums) {
  let [res, maxCount] = [0, 0]

  for (let num of nums) {
    if (maxCount === 0) {
      res = num
    }

    maxCount += num === res ? 1 : -1
  }

  return res
};

describe('#Majority Element', () => {
  describe('it returns the element that occurs more than half the length in the array', () => {

    it('function 1', () => {
      expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
      expect(majorityElement([2, 1, 1, 1, 1, 2, 2])).toBe(1)
      expect(majorityElement([2, 3, 1, 2, 2, 2, 2])).toBe(2)
    })

    it('function 2', () => {
      expect(majorityElementBoyer([2, 2, 1, 1, 1, 2, 2])).toBe(2)
      expect(majorityElementBoyer([2, 1, 1, 1, 1, 2, 2])).toBe(1)
      expect(majorityElementBoyer([2, 3, 1, 2, 2, 2, 2])).toBe(2)
    })
  })
})
