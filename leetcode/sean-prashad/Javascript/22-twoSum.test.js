/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  npm test ./leetcode/sean-prashad/javascript/22-twoSum.test.js",
//  https://leetcode.com/problems/two-sum/
//  0(n) - time | 0(n) - space

const twoSum = function (nums, target) {
  let hash = {}

  for (let i = 0; i <= nums.length; i++) {
    let diff = target - nums[i]

    if (diff in hash) return [i, hash[diff]]
    hash[nums[i]] = i
  }
}

describe('#Two Sum', () => {
  it('returns the indices of values that sum up to a target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 0])
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([2, 1])
    expect(twoSum([3, 3], 6)).toStrictEqual([1, 0])
  })
})
