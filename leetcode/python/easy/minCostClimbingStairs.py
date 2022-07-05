from typing import List
import unittest

'''
https://leetcode.com/problems/min-cost-climbing-stairs/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cost.append(0)
        
        for i in range(len(cost) - 3, -1, -1):
            cost[i] += min(cost[i + 1], cost[i + 2])
            
        return min(cost[0], cost[1])
      
class Test(unittest.TestCase):
  def test_minCost(self):
    self.assertEqual(Solution.minCostClimbingStairs(self, [10,15,20]), 15)
    self.assertEqual(Solution.minCostClimbingStairs(self, [1,100,1,1,1,100,1,1,100,1]), 6)
    
if __name__ == "__main__":
  unittest.main()
        