import unittest

'''
https://leetcode.com/problems/decode-ways/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def numDecodings(self, s: str) -> int:
        dp = {len(s): 1}
        
        def dfs(i):
            if i in dp:
                return dp[i]
            if s[i] == "0":
                return 0
            
            res = dfs(i + 1)
            if (i + 1 < len(s) and (s[i] == "1" or s[i] == "2" and s[i + 1] in "0123456")):
                res += dfs(i + 2)
            dp[i] = res
            return res
        return dfs(0)

class Test(unittest.TestCase):
  def test_numDecodings(self):
    self.assertEqual(Solution.numDecodings(self, "12"), 2)
    self.assertEqual(Solution.numDecodings(self, "226"), 3)
    self.assertEqual(Solution.numDecodings(self, "06"), 0)
    
if __name__ == "__main__":
  unittest.main()