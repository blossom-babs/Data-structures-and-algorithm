// https://leetcode.com/problems/reverse-integer/
// test: npm test ./leetcode/medium/reverseInteger.test.js
// 0(n) - time | 0(1) - space

describe('reverse 2 bit integer', () => {
  it('expects to reverse 32 bit integer', () => {
    expect(reverse(120)).toBe(21)
    expect(reverse(-123)).toBe(-321)
  })
  it('expects to return 0 for integers larger or less than 32 bit', () => {
    expect(reverse(1534236469)).toBe(0)
    expect(reverse(-(2**31))).toBe(0)
  })
})

const reverse = x => {
  let res = 0
  let sign = Math.sign(x)
  let min = -(2**31)
  let max = (2**31) - 1
  
  console.log({min, max})
  console.log(Math.floor(max / 10))

  if(sign === -1){
    x = x * sign
  }
  

  while(x){
    let digit = x % 10
    x = Math.floor(x/10)

    if (res > Math.floor(max/10) || res === Math.floor(max/10) && digit >= max % 10){ return 0}
    if (res < Math.floor(min/10) || res === Math.floor(min/10) && digit <= min % 10) { return 0 }
      
    res = (res * 10) + digit
  }

  return res*sign
}

