from typing import List
import unittest

'''
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def maxProfit(self, nums: List[int]) -> int:
        left, right = 0, 1
        profit = 0
        
        while right < len(nums):
            if nums[right] < nums[left]:
                left += 1
            else:
                profit = max(profit, nums[right] - nums[left])
                right += 1
        return profit
      
class Test(unittest.TestCase):
  def test_maxProfit(self):
    self.assertEqual(Solution.maxProfit(self, [7,1,5,3,6,4]), 5)
    self.assertEqual(Solution.maxProfit(self,  [7,6,4,3,1]), 0)
    self.assertEqual(Solution.maxProfit(self,  [1]), 0)
    self.assertEqual(Solution.maxProfit(self,  [1, 1]), 0)
    self.assertEqual(Solution.maxProfit(self,  [0, 1]), 1)
    self.assertEqual(Solution.maxProfit(self,  []), 0)
    
if __name__ == "__main__":
  unittest.main()
        