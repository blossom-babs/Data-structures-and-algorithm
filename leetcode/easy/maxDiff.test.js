//https://leetcode.com/problems/maximum-difference-between-increasing-elements/
//Test: npm test ./leetcode/easy/maxDiff.test.js
//0(n) - time | 0(1) - space

describe('#maximum difference of subarray', () => {
  it('returns the maximum difference in a subarray', () => {
    expect(maximumDifference([7,1,5,4])).toBe(4)
    expect(maximumDifference([9,4,3,2])).toBe(-1)
    expect(maximumDifference([1,5,2,10])).toBe(9)
    expect(maximumDifference([1,5])).toBe(4)
  })
})

var maximumDifference = function(nums) {
  let l = 0
  let r = 1
  let max = 0

while(r < nums.length){
  let diff = nums[r] - nums[l]
  
  if(diff < 0){
      l++
  } else{
      r++
  }
  
  max = Math.max(max, diff)
}
  
  return max > 0 ? max : -1 
};