import unittest

'''
https://leetcode.com/problems/valid-palindrome/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def isPalindrome(self, s: str) -> bool:        
        s = s.lower().replace(' ', '')
        l, r = 0, len(s) - 1
        
        
        while l < r:
            if not s[l].isalnum():
                l += 1
                continue
            if not s[r].isalnum():
                r -= 1
                continue
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True
        
class Test(unittest.TestCase):
  def test_validPalindrom(self):
    self.assertEqual(Solution.isPalindrome(self, "A man, a plan, a canal: Panama"), True)
    self.assertEqual(Solution.isPalindrome(self, ",."), True)
    self.assertEqual(Solution.isPalindrome(self, "race a car"), False)
    self.assertEqual(Solution.isPalindrome(self, " "), True)
    
if __name__ == "__main__":
  unittest.main()