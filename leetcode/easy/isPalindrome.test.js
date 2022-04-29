// https://leetcode.com/problems/valid-palindrome/
// Test: npm test ./leetode/easy/isPalindrome.test.js
// 0(n) - time | 0(1) - space

describe('is valid palindrome', () => {
  it('returns true if phrase is a valid palindrome', () => {
    expect(isPalindrome("Don't nod")).toBeDefined()
    expect(isPalindrome('I did, did I?')).toBeDefined()
    expect(isPalindrome('Amore roma')).toBeDefined()
  })
  it('returns false if phrase is not a valid palindrome', () => {
    expect(isPalindrome('race a car')).toBeFalsy()
    expect(isPalindrome('Good job')).toBeFalsy()
  })
})

const isPalindrome = s => {
  s = s.replace(/[^a-zA-Z0-9]/g).toLowerCase()

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left++] !== s[right--]) return false
  }

  return true
}