// https://leetcode.com/problems/contains-duplicate/
//Test: npm test ./leetcode/easy/contains-duplicates.test.js


describe('check if arr of integers contains duplicates', () => {
  it('returns true if duplicate value is found', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    expect(containsDuplicateTwo([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
    expect(containsDuplicateThree([-1, -1, 1, 2, 3, 4, 5, 5, 1])).toBe(true)
  })
  it('returns false if duplicate not found', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
    expect(containsDuplicateTwo([3, 4])).toBe(false)
    expect(containsDuplicateThree([])).toBe(false)
  })
})

// April 2022
// 0(n log n) - time | 0(log n) - space (quick sort)
const containsDuplicate = nums => {
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true
  }

  return false
}

//0(n) - time | 0(n) - space
const containsDuplicateTwo = nums => {
  let numsTable = {}
  let i = 0

  while (i < nums.length) {
    if ((nums[i] in numsTable)) {
      return true
    }
    numsTable[nums[i]] = i
    i++
  }
  return false
}

// May 20 2022 | 4am wat
// 0(n) - time | 0(n) - space

const containsDuplicateThree = nums => {
  let hash = {}

  for (const num of nums) {
    if (hash[num]) return true
    hash[num] = 1
  }
  return false
}
