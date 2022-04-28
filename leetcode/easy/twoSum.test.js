describe('two sum', () => {
  it('return the indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})

/*
https://leetcode.com/problems/two-sum/

complexity analysis
0(n) - time
0(n) - space
*/

const twoSum = function (nums, target) {
  let diff, idx = 0
  let map = new Map()

  while (idx < nums.length) {
    diff = target - nums[idx]

    if (map.has(diff)) {
      return [map.get(diff), idx]
    }
    map.set(nums[idx], idx)
    idx++
  }

  return []
}

