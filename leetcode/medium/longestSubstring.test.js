// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Test: npm test ./leetcode/medium/longestSubstring.test.js
// 0(n) - time | 0(1) - space

describe('longest substring without returning characters', () => {
  it('returns the count of the longest substring', () => {
    expect(lengthOfLongestSubstring('abcd08=ab')).toBe(7)
    expect(lengthOfLongestSubstring('wikew')).toBe(4)
  })
})

const lengthOfLongestSubstring = str => {
  let max = 0
  let left = 0
  let set = new Set()

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left])
      left++
    }

    set.add(str[right])
    max = Math.max(max, right - left + 1)
  }
  return max
};