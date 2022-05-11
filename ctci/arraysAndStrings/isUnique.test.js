// test: npm test ./ctci/arraysAndStrings/isUnique.test.js

// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures ? 

// input: string
// output: boolean (true if string is unique)


describe('is Unique', () => {
  it('uses extra space to check if string is unique', () => {
    expect(isUniqueExtraspace('blossom')).toBe(false)
    expect(isUniqueExtraspace('a')).toBe(true)
    expect(isUniqueExtraspace('')).toBe(true)
    expect(isUniqueExtraspace('abcd')).toBe(true)
    expect(isUniqueExtraspace('Jesus')).toBe(false)
  })

  it('checks if string is unique without extra space', () => {
    expect(isUnique('')).toBe(true)
    expect(isUnique('ab')).toBe(true)
    expect(isUnique('coca cola')).toBe(false)
  })
})

// with extra space | 0(n) - time & space

const isUniqueExtraspace = (string) => {
  let hash = {}

  for(let i = 0; i < string.length; i++){
    if(hash[string[i]]){
      return false
    } else{
      hash[string[i]] = i
    }
  }

  return true
}

// without extra space | 0(n log n) - time | 0 (1) - space

const isUnique = (string) => {
  string = string.split('').sort().join('')

  for(let i = 1; i < string.length; i++){
    if(string[i + 1] === string[i]){
      return false
    }
  }

  return true
}
