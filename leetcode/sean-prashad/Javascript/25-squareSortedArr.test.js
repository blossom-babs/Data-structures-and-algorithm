/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.com/problems/squares-of-a-sorted-array/
// 0(n) - tc | 0(n) - sc
 

 const sortedSquares = function(nums) {
  let res = []
  let [l, r] = [0, nums.length - 1]
    
  while (l <= r){
      let [left, right] = [nums[l], nums[r]]
      
      if (Math.abs(right) > Math.abs(left)){
          res.unshift(right * right)
          r--
      } else{
          res.unshift(left * left)
          l++
      }
  }
    return res
};

describe('#Squares of sorted Array', () => {
  it('returns the sorted value of the values in the array', () => {
    expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual( [0,1,9,16,100])
    expect(sortedSquares([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121])
    expect(sortedSquares([-4,-1,3,10])).toStrictEqual([1,9,16,100])
    expect(sortedSquares([1, 2, 3, 4])).toStrictEqual([1,4,9,16])
  })
})
