// https://leetcode.com/problems/valid-parentheses/
// Test: npm test ./leetcode/medium/isValid.test.js
//0(n) - time | 0(n) - space

describe('is valid parentheses', () => {
  it('expects closing bracket for open bracket', () => {
    expect(isValid('([)]')).toBe(false)
    expect(isValid('([])]')).toBe(false)
    expect(isValid('()[]{}')).toBe(true)
  })
})
const isValid = (s) => {
  let stack = []

  for (let el of s) {
    let prev = stack[stack.length - 1]

    if (prev === '(' && el === ')') {
      stack.pop()
    } else if (prev === '[' && el === ']') {
      stack.pop()
    } else if (prev === '{' && el === '}') {
      stack.pop()
    } else {
      stack.push(el)
    }
  }

  return stack.length === 0
};