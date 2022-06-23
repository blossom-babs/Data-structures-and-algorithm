// https://leetcode.com/problems/longest-palindromic-substring/
// Test npm test ./leetcode/medium/longestPalindrome.test.js

describe('longest palindrome', () => {
  it('returns the longest palindrome substring in a string', () => {
    expect(bruteForceLongestPalindrome('lcnvoknqgejxbfhijmxglisfzjwbtvhodwummdqeggzfczmetrdnoetmcydwddmtubcqmdjwnpzdqcdhplxtezctvgnpobnnscrmeqkwgiedhzsvskrxwfyklynkplbgefjbyhlgmkkfpwngdkvwmbdskvagkcfsidrdgwgmnqjtdbtltzwxaokrvbxqqqhljszmefsyewwggylpugmdmemvcnlugipqdjnriythsanfdxpvbatsnatmlusspqizgknabhnqayeuzflkuysqyhfxojhfponsndytvjpbzlbfzjhmwoxcbwvhnvnzwmkhjxvuszgtqhctbqsxnasnhrusodeqmzrlcsrafghbqjpyklaaqximcjmpsxpzbyxqvpexytrhwhmrkuybtvqhwxdqhsnbecpfiudaqpzsvfaywvkhargputojdxonvlprzwvrjlmvqmrlftzbytqdusgeupuofhgonqoyffhmartpcbgybshllnjaapaixdbbljvjomdrrgfeqhwffcknmcqbhvulwiwmsxntropqzefwboozphjectnudtvzzlcmeruszqxvjgikcpfclnrayokxsqxpicfkvaerljmxchwcmxhtbwitsexfqowsflgzzeynuzhtzdaixhjtnielbablmckqzcccalpuyahwowqpcskjencokprybrpmpdnswslpunohafvminfolekdleusuaeiatdqsoatputmymqvxjqpikumgmxaxidlrlfmrhpkzmnxjtvdnopcgsiedvtfkltvplfcfflmwyqffktsmpezbxlnjegdlrcubwqvhxdammpkwkycrqtegepyxtohspeasrdtinjhbesilsvffnzznltsspjwuogdyzvanalohmzrywdwqqcukjceothydlgtocukc')).toBe('lbabl')
    expect(longestPalindrome('cbbd')).toBe('bb')
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


// 0(n^2) - time | 0(1) - space

const longestPalindrome = function (string) {
  let max = 0
  let str = '';
  let left, right;

  for (let i = 0; i < string.length; i++) {
    left = i; right = i

    while (left >= 0 && right < string.length && string[left] === string[right]) {
      if (right - left + 1 > max) {
        str = string.substring(left, right + 1)
        max = right - left + 1
      }
      left--
      right++
    }

    left = i; right = i + 1

    while (left >= 0 && right < string.length && string[left] === string[right]) {
      if (right - left + 1 > max) {
        str = string.substring(left, right + 1)
        max = right - left + 1
      }
      left--
      right++
    }
  }
  return str
};

