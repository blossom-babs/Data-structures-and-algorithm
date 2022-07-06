from typing import List
import unittest

'''
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = {}
        
        def dfs(i, canBuy):
            if i >= len(prices):
                return 0
            if (i, canBuy) in dp:
                return dp[(i, canBuy)]
            
            if canBuy:
                buy = dfs(i + 1, not canBuy) - prices[i]
                cooldown = dfs(i + 1, canBuy)
                dp[(i, canBuy)] = max(buy, cooldown)
            else:
                sell = dfs(i + 2, not canBuy) + prices[i]
                cooldown = dfs(i + 1, canBuy)
                dp[(i, canBuy)] = max(sell, cooldown)
            return dp[(i, canBuy)]
            
        return dfs(0, True)

class Test(unittest.TestCase):
  def test_maxProfit(self):
    self.assertEqual(Solution.maxProfit(self, [1,2,3,0,2]), 3)
    self.assertEqual(Solution.maxProfit(self, [1]), 0)
    
if __name__ == "__main__":
  unittest.main()