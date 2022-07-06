import unittest

'''
https://leetcode.com/problems/palindromic-substrings/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def countSubstrings(self, s: str) -> int:
        resLen = 0
        
        for i in range(len(s)):
            l, r = i, i
            
            while l >= 0 and r < len(s) and s[l] == s[r]:
                resLen += 1
                l -= 1
                r += 1
                
            # even numbers
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                resLen += 1
                l -= 1
                r += 1
        return resLen

class Test(unittest.TestCase):
  def test_countSubstrings(self):
    self.assertEqual(Solution.countSubstrings(self, 'abc'), 3)
    self.assertEqual(Solution.countSubstrings(self, 'aaa'), 6)
    self.assertEqual(Solution.countSubstrings(self, 'aa'), 3)
    self.assertEqual(Solution.countSubstrings(self, 'a'), 1)
    self.assertEqual(Solution.countSubstrings(self, ''), 0)
    self.assertEqual(Solution.countSubstrings(self, ' '), 1)
    
if __name__ == "__main__":
  unittest.main()