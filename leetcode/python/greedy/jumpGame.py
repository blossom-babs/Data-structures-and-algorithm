from typing import List
import unittest

'''
Medium
https://leetcode.com/problems/jump-game/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums) - 1
        
        for i in range(len(nums) -1, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        return True if goal == 0 else False
        
class Test(unittest.TestCase):
  def test_canJump(self):
    self.assertEqual(Solution.canJump(self, [2,3,1,1,4]), True)
    self.assertEqual(Solution.canJump(self, [3,2,1,0,4]), False)

if __name__ == "__main__":
  unittest.main()