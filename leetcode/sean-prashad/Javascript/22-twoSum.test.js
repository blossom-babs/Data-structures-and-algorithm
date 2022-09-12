/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  https://leetcode.com/problems/two-sum/
//  0(n) - time | 0(n) - space

 const twoSum = function(nums, target) {
  let hash = {}
  
  for(let i = 0; i <= nums.length; i++){
      let diff = target - nums[i]
      
      if(diff in hash) return [i, hash[diff]]
      hash[nums[i]] = i
  }
}

describe('# Two Sum', () => {
  it('returns the indices of values that sum up to a target', () => {
    expect(nextGreatestLetter([2,7,11,15], 9)).toBe(9)
    expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f")
    expect(nextGreatestLetter(["c", "f", "j"], "d")).toBe("f")
    expect(nextGreatestLetter(["c", "f", "j"], "j")).toBe("c")
  })
})