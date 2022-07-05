import unittest

'''
https://leetcode.com/problems/longest-palindromic-substring/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        for i in range(len(s)):
            # odd length
            l, r = i, i

            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1

            # even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if(r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1
        return res

class Test(unittest.TestCase):
  def test_longestPalindrome(self):
    self.assertEqual(Solution.longestPalindrome(self, 'babad'), 'bab')
    self.assertEqual(Solution.longestPalindrome(self, 'cbbd'), 'bb')
    self.assertEqual(Solution.longestPalindrome(self, 'b'), 'b')
    
if __name__ == "__main__":
  unittest.main()
    