// https://leetcode.com/problems/valid-palindrome/
// Test: npm test ./leetcode/easy/firstPalindrome.test.js
//0(n * k) - time | 0(1) - space

describe('#first palindrome in an array', () => {
  it('returns the first palindrome in an array of strings', () => {
    expect(firstPalindrome(["abc","car","ada","racecar","cool"])).toBe('ada')
    expect(firstPalindrome(["notapalindrome","racecar"])).toBe('racecar')
    expect(firstPalindrome([["def","ghi"]])).toBe('')
  })
})

const firstPalindrome = arr => {
  for (const word of arr) {
    if (validPalindrome(word)) return word
  }

  return ''
}

const validPalindrome = s => {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
    l++
    r--
  }
  return true
}


