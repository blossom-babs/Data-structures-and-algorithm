// https://leetcode.com/problems/valid-palindrome/
// Test: npm test ./leetcode/easy/isPalindrome.test.js

describe('is valid palindrome', () => {
  it('returns true if phrase is a valid palindrome', () => {
    expect(validPalindrome("Don't nod")).toBe(true)
    expect(validPalindrome('I did, did I?')).toBe(true)
    expect(validPalindrome('Amore roma')).toBe(true)
    expect(validPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(validPalindrome(' ')).toBe(true)
  })
  it('returns false if phrase is not a valid palindrome', () => {
    expect(validPalindrome('race a car')).toBe(false)
    expect(validPalindrome('Good job')).toBe(false)
  })
})

// may 2022 | 0(n) - time | 0(1) - space
const validPalindrome = s => {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (isAlphaNum(s[l]) === false) {
      l++
      continue
    }

    if (isAlphaNum(s[r]) === false) {
      r--
      continue
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
    l++
    r--
  }

  return true
}

const isAlphaNum = str => {
  str = str.charCodeAt(0)
  return (str >= ('0').charCodeAt(0) && str <= ('9').charCodeAt(0) ||
    str >= ('a').charCodeAt(0) && str <= ('z').charCodeAt(0) ||
    str >= ('A').charCodeAt(0) && str <= ('Z').charCodeAt(0))
}

// April 2022
// 0(n ^2) - time | 0(n) - space
const isPalindrome = s => {
  s = s.replace(/[^a-zA-Z0-9]/g).toLowerCase()
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left++] !== s[right--]) return false
  }

  return true
}

