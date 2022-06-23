// https://leetcode.com/problems/contains-duplicate-ii/
//Test: npm test ./leetcode/easy/contains-dupsII.test.js

describe('#contains duplicates II', () => {
  it('returns true if array contains duplicates and difference of duplicates(index) is less than integer k', () => {
    expect(containsNearbyDuplicates([3], 3)).toBe(false)
    expect(containsNearbyDuplicates([], 13)).toBe(false)
    expect(containsNearbyDuplicates([1, 2, 3, 1], 3)).toBe(true)
    expect(containsNearbyDuplicates([1,0,1,1,1], 1)).toBe(true)
    expect(containsNearbyDuplicates([1,2,3,1,2,3], 2)).toBe(false)
  })
})


// 0(n) - time | 0(n) - space
containsNearbyDuplicates = (nums, k) => {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (hash.hasOwnProperty(num)) {
      let diff = Math.abs(hash[num] - i)
      if (diff <= k) return true
    }

    hash[num] = i

  }

  return false
}