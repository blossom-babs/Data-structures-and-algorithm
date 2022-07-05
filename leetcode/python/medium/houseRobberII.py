from typing import List
import unittest

'''
https://leetcode.com/problems/house-robber/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def rob(self, nums: List[int]) -> int:
        def helper(nums):
          rob1, rob2 = 0, 0

          for n in nums:
              newRob = max(rob1 + n, rob2)
              rob1 = rob2
              rob2 = newRob
          return rob2
        return max(nums[0], helper(nums[1:]), helper(nums[:-1]))


class Test(unittest.TestCase):
    def test_rob(self):
        self.assertEqual(Solution.rob(self, [2, 3, 2]), 3)
        self.assertEqual(Solution.rob(self, [1, 2, 3]), 3)
        self.assertEqual(Solution.rob(self, [1, 2, 3, 1]), 4)


if __name__ == "__main__":
    unittest.main()
