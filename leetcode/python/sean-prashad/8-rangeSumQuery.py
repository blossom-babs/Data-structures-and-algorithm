from typing import List
import unittest

'''
https://leetcode.com/problems/range-sum-query-immutable/
0(n) - tc | 0(n) - sc
'''

class NumArray:

    def __init__(self, nums: List[int]):
        self.prefixSum = [0 for i in range(len(nums) + 1)]
        for i in range(len(nums)):
            self.prefixSum[i + 1] = self.prefixSum[i] + nums[i]

    def sumRange(self, left: int, right: int) -> int:
        return self.prefixSum[right + 1] - self.prefixSum[left]


class Test(unittest.TestCase):
    def test_NumArray(self):
        NumArray.__init__(self, [-2, 0, 3, -5, 2, -1])
        param = NumArray.sumRange(self, 0, 2)
        param2 = NumArray.sumRange(self, 2, 5)
        param3 = NumArray.sumRange(self, 0, 5)
        self.assertEqual(param, 1)
        self.assertEqual(param2, -1)
        self.assertEqual(param3, -3)


if __name__ == "__main__":
    unittest.main()

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
