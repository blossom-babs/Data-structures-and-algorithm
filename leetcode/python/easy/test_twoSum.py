from typing import List
import unittest


class Solution:
  def twoSum(self, nums:List[int], target:int )->int:
    hash = {}
    i = 0

    while i < len(nums):
      diff = target - nums[i]
      if diff in hash:
        return [hash[diff], i]
      hash[nums[i]] = i
      i += 1

  
class TestTwoSum(unittest.TestCase):
  def test_twoSum(self):
    result = Solution.twoSum(self, [2,7,11,15], 9)
    result_two = Solution.twoSum(self, [3,2,4], 6)
    self.assertEqual(result, [0,1])
    self.assertEqual(result_two, [1,2])

if __name__ == "__main__":
  unittest.main()

