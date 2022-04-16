/* https://leetcode.com/problems/group-anagrams/

Test: npm test ./leetcode/arrays/group-anagrams.test.js

0(n) - space | 0(m * nlogn) - time
 */

describe('Group Anagrams', () => {
  it('groups anagrams together', () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
    expect(groupAnagrams([" "])).toStrictEqual([[" "]])
    expect(groupAnagrams(["a"])).toStrictEqual([["a"]])
  })
})

const groupAnagrams = strs => {
  let hash = {}

  for (let str of strs) {
    let sorted = str.split('').sort().join('')

    if (hash[sorted]) {
      hash[sorted].push(str)
    } else {
      hash[sorted] = [str]
    }
  }

  return Object.values(hash)
}