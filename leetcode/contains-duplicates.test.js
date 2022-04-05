/* https://leetcode.com/problems/contains-duplicate/

complexity analysis
0(n) - time
0(1) - space
 */

describe('check if arr of integers contains duplicates', () => {
  it('returns true if duplicate value is found', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  })
  it('returns false if duplicate not found', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
})

const containsDuplicate = nums => {
  nums = nums.sort((a,b) => a -b)

  for(let i = 0; i<nums.length; i++){
    if(nums[i] === nums[i + 1]) return true
  }

  return false
}

/* 
A different approach

0(n) - time
0(n) - space

const containsDuplicate = nums => {
  let numsTable = {}
  let i = 0

  while(i < nums.length){
    if((nums[i] in numsTable)){
      return true
    }
    numsTable[nums[i]] = i
    i++
  }
  return false
}

*/