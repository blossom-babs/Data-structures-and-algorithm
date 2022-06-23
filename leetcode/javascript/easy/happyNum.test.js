/*
https://leetcode.com/problems/happy-number/

complexity analysis
0(n) - space (hashtable was used)
0(n) - time
*/

describe('Happy numbers', () => {
  it('returns true if number is happy', () =>{
    expect(isHappy(7)).toBe(true)
    expect(isHappy(19)).toBe(true)
    expect(isHappy(1)).toBe(true)
  })
  it('returns false if number is not happy', () =>{
    expect(isHappy(2)).toBe(false)
    expect(isHappy(0)).toBe(false)
    expect(isHappy(-1)).toBe(false)
  })
})

const isHappy = n => {
  let numbers = {}

  while (!(n in numbers)) {
    if (n === 1) return true
    numbers[n] = n

    n = ('' + n).split('').map(num => parseInt(num * num))
      .reduce((curr, prev) => curr + prev)
    }
  return false
}