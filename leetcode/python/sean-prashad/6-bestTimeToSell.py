from typing import List
import unittest

'''
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy, sell = 0, 1
        profit = 0
        
        while sell < len(prices):
            sale = prices[sell] - prices[buy]
            
            if sale < 0:
                buy += 1
            else:
                profit = max(profit, sale)
                sell += 1
        return profit


class Test(unittest.TestCase):
  def test_maxProfit(self):
    self.assertEqual(Solution.maxProfit(self, [7,1,5,3,6,4]), 5)
    self.assertEqual(Solution.maxProfit(self, [7,4,5,3,6,4]), 3)
    self.assertEqual(Solution.maxProfit(self, [7,6,4,3,1]), 0)
    
if __name__ == "__main__":
  unittest.main()