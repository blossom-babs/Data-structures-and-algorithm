import unittest

'''
https://leetcode.com/problems/longest-repeating-character-replacement/
0(n) - tc & 0(n) - sc
'''

def characterReplacement(s:str, k:int) -> int:
  l, res = 0, 0
  count = {}

  for r in range(len(s)):
    count[s[r]] = 1 + count.get(s[r], 0)
    while (r - l + 1) - max(count.values()) > k:
      count[s[l]] -= 1
      l += 1
    res = max(res, r - l + 1)
  return res

class Test(unittest.TestCase):
  def test_characterReplacement(self):
    self.assertEqual(characterReplacement('ABAB', 2), 4)
    self.assertEqual(characterReplacement('AABABBA', 1), 4)

if __name__ == "__main__":
  unittest.main()