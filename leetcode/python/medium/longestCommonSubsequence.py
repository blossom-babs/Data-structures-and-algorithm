import unittest

'''
https://leetcode.com/problems/longest-common-subsequence/
0(mn) - tc | 0(mn) - sc
'''

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        dp = [[0 for j in range(len(text2) + 1)] for i in range(len(text1) + 1)]
        
        for i in range(len(text1) -1, -1, -1):
            for j in range(len(text2) -1, -1, -1):
                if text1[i] == text2[j]:
                    dp[i][j] = 1 + dp[i + 1][j + 1]
                else:
                    dp[i][j] = max(dp[i][j + 1], dp[i + 1][j])
        return dp[0][0]
        
        
class Test(unittest.TestCase):
  def test_lcs(self):
    self.assertEqual(Solution.longestCommonSubsequence(self, 'abcde', 'ace'), 3)
    self.assertEqual(Solution.longestCommonSubsequence(self, 'abc', 'abc'), 3)
    self.assertEqual(Solution.longestCommonSubsequence(self, 'abc', 'def'), 0)
    self.assertEqual(Solution.longestCommonSubsequence(self, 'abc', ''), 0)
    self.assertEqual(Solution.longestCommonSubsequence(self, '', 'def'), 0)
    self.assertEqual(Solution.longestCommonSubsequence(self, '', ''), 0)
    self.assertEqual(Solution.longestCommonSubsequence(self, ' ', ' '), 1)
    
if __name__ == "__main__":
  unittest.main()