/* https://leetcode.com/problems/maximum-subarray/
Test: npm test ./leetcode/east/max-subarray.test.js
complexity analysis 0(n) - time | 0(1) -space
 */

describe('maximum subarray', () => {
  it('returns sum of the largest sub array', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
    expect(maxSubArray([5,4,-1,7,8])).toBe(23)
    expect(maxSubArray([1])).toBe(1)
    expect(maxSubArray([-1, -5, 0])).toBe(0)
  })
})

const maxSubArray = arr => {
  let maxSub = arr[0]
  let currSum = 0

  for(let num of arr){
    if (currSum < 0) currSum = 0
    currSum += num
    maxSub = Math.max(maxSub, currSum)
  }
  return maxSub
}