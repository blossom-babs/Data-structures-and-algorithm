import unittest
from typing import List

'''
https://leetcode.com/problems/maximum-subarray/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = nums[0]
        currSum = 0
        
        for num in nums:
            currSum += num
            res = max(res, currSum)
            if currSum < 0:
                currSum = 0
           
        return res
        
        
class Test(unittest.TestCase):
  def test_maxSubArray(self):
    self.assertEqual(Solution.maxSubArray(self, [-1]), -1)
    self.assertEqual(Solution.maxSubArray(self, [1]), 1)
    self.assertEqual(Solution.maxSubArray(self, [-2,1,-3,4,-1,2,1,-5,4]), 6)
    self.assertEqual(Solution.maxSubArray(self, [5,4,-1,7,8]), 23)
    
if __name__ == "__main__":
  unittest.main()