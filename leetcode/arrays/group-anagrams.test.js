/* https://leetcode.com/problems/group-anagrams/

Test: npm test ./leetcode/arrays/group-anagrams.test.js

 */

describe('Group Anagrams', () => {
  it('groups anagrams together', () => {
    expect (groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toBe([["bat"],["nat","tan"],["ate","eat","tea"]])
    expect (groupAnagrams([" "])).toBe([[[" "]]])
    expect (groupAnagrams(["a"])).toBe([[["a"]]])
  })
})