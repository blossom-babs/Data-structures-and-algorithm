// https://leetcode.com/problems/max-number-of-k-sum-pairs
// Test: npm test ./leetcode/medium/maxOperations.test.js

describe('max operation', () => {
  it('returns the number of possible sums for k', () =>{
    expect(maxOperationsTwo([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 3)).toBe(4)
    expect(maxOperations([3,1,3,4,3], 6)).toBe(1)
    expect(maxOperations([], 2)).toBe(0)
  })
})

// 0(n) - time | 0(n) - space
const maxOperations =  (nums, k) => {
  let map = new Map()
  let count = 0

  for (let n of nums){
    let diff = k - n

    if(diff > 0 && map.get(diff) > 0){
      count++
      map.set(diff, map.get(diff) - 1)
    } else{
      map.set(n, (map.get(n) || 0) + 1)
    }
  }

  return count
}

// 0(nlogn) - time | 0(1) - space
 const maxOperationsTwo = (nums, k) => {
  nums = nums.sort((a,b) => a - b)
  
  let left = 0
  let right = nums.length - 1
  let count = 0
    
  while(left < right){
    if (nums[left] + nums[right] < k) left++
    else if (nums[left] + nums[right] > k) right--
    else{
      left++
      right--
      count++
    }
  }
  
    return count
  };