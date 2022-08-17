/* Run test: npm test ./meta/rotational-ciphers.test.js

https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=238827593802550&ppid=454615229006519&practice_plan=1


0(n) - time | 0(1) - space
 */

const { ord, ordFrom, isUpper, isLower } = require('js-ord')

describe('rotational ciphers', () => {
  it('encrypts a string by return the third value of every string and number', () => {
    expect(rotationalCipher("Zebra-493?", 3)).toBe("Cheud-726?")
    expect(rotationalCipher("abcdefghijklmNOPQRSTUVWXYZ0123456789", 39)).toBe("nopqrstuvwxyzABCDEFGHIJKLM9012345678")
  })
})

const rotationalCipher = (string, rotation) => {
  let cipher = []
  for (let str of string) {
    let validChar = str.match(/[a-zA-Z0-9]/g)

    if (str === '0') {
      cipher.push(9)
    }
    else if (Number(str)) {
      str = (Number(str) + rotation) % 10
      cipher.push(str)
    }
    else if (validChar && isUpper(str)) {
      str = ((ord(str) - ord('A')) + rotation) % 26
      cipher.push(ordFrom(ord('A') + str))
    }
    else if (validChar && isLower(str)) {
      str = ((ord(str) - ord('a')) + rotation) % 26
      cipher.push(ordFrom(ord('a') + str))
    }
    else {
      cipher.push(str)
    }
  }

  return cipher.join('')
}