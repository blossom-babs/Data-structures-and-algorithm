import heapq
from typing import List
import unittest

"""
https://leetcode.com/problems/kth-largest-element-in-an-array/
"""


class Solution:
    """
    sort method
    0(n log n) - TC | 0(n) - SC
    """

    def KthLargestArr(self, nums: List[int], k: int) -> int:
        nums.sort()
        idx = len(nums) - k
        return nums[idx]

    """
  Heap method
  0(k log n) - TC | 0(1) - SC
  """

    def KthLargestHeap(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        while len(nums) > k:
            heapq.heappop(nums)
        return nums[0]


class TestKthLargestArr(unittest.TestCase):
    def test_kthLargest(self):
        nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
        res = Solution.KthLargestArr(self, nums, 4)
        res_two = Solution.KthLargestHeap(self, [3, 2, 1, 5, 6, 4], 2)
        self.assertEqual(res, 4)
        self.assertEqual(res_two, 5)


if __name__ == "__main__":
    unittest.main()
