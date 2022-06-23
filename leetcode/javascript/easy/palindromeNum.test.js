// https://leetcode.com/problems/palindrome-number/
// test: npm test ./leetcode/easy/palindromeNum.test.js

// FOLLOW UP: can you do it without converting the num to a string

describe('Palindrome number', () => {
  it('returns true if int is a palindrome', () => {
    expect(isPalindrome(121)).toBe(true)
    expect(isPalindrome(0)).toBe(true)
  })
  it('returns false if int is not a palindrome', () => {
    expect(isPalindrome(182)).toBe(false)
    expect(isPalindrome(-121)).toBe(false)
  })
})

const isPalindrome = num => {
  if(num < 0) return false
  if(num === 0) return true

  let reversed = ''
  let newNum = num
  let digits = 0

  while(newNum){
    digits = newNum % 10
    newNum = Math.round(newNum / 10)
    reversed += digits
  }

  return parseInt(reversed) === num
}