// https://leetcode.com/problems/backspace-string-compare/solutions/?orderBy=most_votes&languageTags=javascript&topicTags=two-pointers
// 0(n + m ) - TC | 0(1) - SC

const backspaceCompare = function (s, t) {
  function trimStr(str) {
    let ptr = str.length - 1
    let skips = 0
    let newStr = ''

    while (ptr >= 0) {
      if (str[ptr] === '#') {
        skips++
      } else if (skips > 0) {
        skips--
      } else {
        newStr += str[ptr]
      }
      ptr--
    }

    return newStr
  }


  let s1 = trimStr(s)
  let t1 = trimStr(t)

  return s1 === t1
};

// 0(n) - TC || 0(1) - sc

const backspaceCompareTwo = (s, t) => {
  let sPtr = s.length - 1
  let tPtr = t.length - 1

  let sSkip = 0
  let tSkip = 0

  let sNew = ''
  let tNew = ''

  while(sPtr >= 0 || tPtr >= 0){
    
    while(sPtr >= 0){
      if (s[sPtr] === '#'){
        sSkip++
      } else if(sSkip > 0){
        sSkip--
      } else{
        sNew += s[sPtr]
      }
      sPtr--
    }

    while(tPtr >= 0){
      if (t[tPtr] === '#'){
        tSkip++
      } else if(tSkip > 0){
        tSkip--
      } else{
        tNew += t[tPtr]
      }
      tPtr--
    }
  }

  return sNew === tNew
}

describe('#Backspace String compare', () => {
  describe('it returns true if the strings are the same', () => {

    it('function 1', () => {
      expect(backspaceCompare('ab#cd#', 'ac#d#c')).toBe(true)
      expect(backspaceCompare("ab#c", 'ad#c')).toBe(true)
      expect(backspaceCompare("ab##", 'c#d#')).toBe(true)
      expect(backspaceCompare('a#c', 'b')).toBe(false)
    })

    it('function 2', () => {
      expect(backspaceCompareTwo('ab#cd#', 'ac#d#c')).toBe(true)
      expect(backspaceCompareTwo("ab#c", 'ad#c')).toBe(true)
      expect(backspaceCompareTwo("ab##", 'c#d#')).toBe(true)
      expect(backspaceCompareTwo('a#c', 'b')).toBe(false)
    })
  })
})
