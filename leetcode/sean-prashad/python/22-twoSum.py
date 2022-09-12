from typing import List
import unittest

# https://leetcode.com/problems/two-sum/
# 0(n) - time | 0(n) - space
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        
        for i in range(len(nums)):
            diff = target - nums[i]

            if diff in hash:
                return [i, hash[diff]]
            hash[nums[i]] = i

class Test(unittest.TestCase):
  def test_twoSum(self):
    self.assertEqual(Solution.twoSum(self, [2,7,11,15], 9), [1, 0])
    self.assertEqual(Solution.twoSum(self, [3,2,4], 6), [2, 1])
    self.assertEqual(Solution.twoSum(self, [3, 3], 6), [1, 0])
    
if __name__ == "__main__":
  unittest.main()