import unittest

'''
https://leetcode.com/problems/longest-substring-without-repeating-characters/
0(n) - TC | 0(n) - SC
'''

def lengthOfLongestSubstring(s:str) -> int:
  l, res, charSet = 0, 0, set()

  for r in range(len(s)):
    while s[r] in charSet:
      charSet.remove(s[l])
      l += 1
    charSet.add(s[r])
    res = max(res, r - l + 1)

  return res

class Test(unittest.TestCase):
  def test_solution(self):
    self.assertEqual(lengthOfLongestSubstring(""), 0)
    self.assertEqual(lengthOfLongestSubstring(" "), 1)
    self.assertEqual(lengthOfLongestSubstring("dvdf"), 3)

if __name__ == "__main__":
  unittest.main()