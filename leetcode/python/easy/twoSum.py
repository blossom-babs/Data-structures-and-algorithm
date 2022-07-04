from typing import List
import unittest

'''
Leetcode 1: https://leetcode.com/problems/two-sum/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        store = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in store:
                return [store[diff], i]
            store[nums[i]] = i
        
        
class Test(unittest.TestCase):
  def test_twoSum(self):
    self.assertEqual(Solution.twoSum(self, [3, 3], 6), [0, 1])
    self.assertEqual(Solution.twoSum(self, [2,7,11,15], 9), [0, 1])
    self.assertEqual(Solution.twoSum(self, [3,2,4], 6), [1, 2])
    
    
if __name__ == "__main__":
  unittest.main()