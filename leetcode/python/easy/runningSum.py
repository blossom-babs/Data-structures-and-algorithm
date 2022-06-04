from typing import List
import unittest

"""
https://leetcode.com/problems/running-sum-of-1d-array/
0(n) - TC | 0(1) - SC
"""

def runningSum(nums:List[int]) -> List[int]:
  for i in range(1, len(nums)):
    nums[i] = nums[i] + nums[i - 1]

  return nums


class Test(unittest.TestCase):
  def test_runningSum(self):
    self.assertEqual(runningSum([1,1,1,2,2,3]), [1,2,3,5,7,10])
    self.assertEqual(runningSum([]), [])
    self.assertEqual(runningSum([1]), [1])
    self.assertEqual(runningSum([-1, 1, 2]), [-1, 0, 2])


if __name__ == "__main__":
  unittest.main()