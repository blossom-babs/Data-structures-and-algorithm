// https://leetcode.com/problems/longest-palindromic-substring/
// Test npm test ./leetcode/medium/longestPalindrome.test.js

describe('longest palindrome', () => {
  it('returns the longest palindrome substring in a string', () => {
    expect(bruteForceLongestPalindrome('lcnvoknqgejxbfhijmxglisfzjwbtvhodwummdqeggzfczmetrdnoetmcydwddmtubcqmdjwnpzdqcdhplxtezctvgnpobnnscrmeqkwgiedhzsvskrxwfyklynkplbgefjbyhlgmkkfpwngdkvwmbdskvagkcfsidrdgwgmnqjtdbtltzwxaokrvbxqqqhljszmefsyewwggylpugmdmemvcnlugipqdjnriythsanfdxpvbatsnatmlusspqizgknabhnqayeuzflkuysqyhfxojhfponsndytvjpbzlbfzjhmwoxcbwvhnvnzwmkhjxvuszgtqhctbqsxnasnhrusodeqmzrlcsrafghbqjpyklaaqximcjmpsxpzbyxqvpexytrhwhmrkuybtvqhwxdqhsnbecpfiudaqpzsvfaywvkhargputojdxonvlprzwvrjlmvqmrlftzbytqdusgeupuofhgonqoyffhmartpcbgybshllnjaapaixdbbljvjomdrrgfeqhwffcknmcqbhvulwiwmsxntropqzefwboozphjectnudtvzzlcmeruszqxvjgikcpfclnrayokxsqxpicfkvaerljmxchwcmxhtbwitsexfqowsflgzzeynuzhtzdaixhjtnielbablmckqzcccalpuyahwowqpcskjencokprybrpmpdnswslpunohafvminfolekdleusuaeiatdqsoatputmymqvxjqpikumgmxaxidlrlfmrhpkzmnxjtvdnopcgsiedvtfkltvplfcfflmwyqffktsmpezbxlnjegdlrcubwqvhxdammpkwkycrqtegepyxtohspeasrdtinjhbesilsvffnzznltsspjwuogdyzvanalohmzrywdwqqcukjceothydlgtocukc')).toBe('lbabl')
  })
})

// 0(1) - space | 0(n^3) - time
const bruteForceLongestPalindrome = string => {
  let max = -Infinity;
  let longestStr = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const sub = string.substring(i, j + 1)
      if (checkIfPalindrome(sub)) {
        if (sub.length > max) longestStr = sub
        max = Math.max(sub.length, max)

      }
    }
  }
  return longestStr
}

const checkIfPalindrome = string => {
  let palindrome = '';

  for (let i = string.length - 1; i >= 0; i--) {
    palindrome += string[i]
  }

  return palindrome === string
}
