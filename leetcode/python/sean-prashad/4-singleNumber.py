'''
https://leetcode.com/problems/single-number/
'''

from typing import List
import unittest


class Solution:
    # 0(N) - tc | 0(1) - sc
    def singleNumberXOR(self, nums: List[int]) -> int:
        res = 0
        for n in nums:
            res ^= n
        return res

    # 0(n log n) - tc | 0(1) -sc
    def singleNumberSort(self, nums: List[int]) -> int:
        nums.sort()
        for i in range(0, len(nums) - 1, 2):
            if nums[i] != nums[i + 1]:
                return nums[i]
        return nums[-1]

    #0(n) - tc | 0(n) - sc
    def singleNumberHash(self, nums: List[int]) -> int:
        count = {}
        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for num in count:
            if count[num] == 1:
                return num

    #0(n ^2) - tc | 0(1) - sc
    def singleNumberBruteForce(self, nums: List[int]) -> int:
        for i in range(0, len(nums)):
            for j in range(0, len(nums)):
                if nums[i] == nums[j] and i != j:
                    break
            else:
                return nums[i]


class Test(unittest.TestCase):
    def test_singleNumberXOR(self):
        self.assertEqual(Solution.singleNumberXOR(self, [4, 1, 2, 1, 2]), 4)
        self.assertEqual(Solution.singleNumberXOR(self, [2, 2, 1]), 1)
        self.assertEqual(Solution.singleNumberXOR(self, [1]), 1)

    def test_singleNumberSort(self):
        self.assertEqual(Solution.singleNumberXOR(self, [4, 1, 2, 1, 2]), 4)
        self.assertEqual(Solution.singleNumberXOR(self, [2, 2, 1]), 1)
        self.assertEqual(Solution.singleNumberXOR(self, [1]), 1)

    def test_singleNumberHash(self):
        self.assertEqual(Solution.singleNumberXOR(self, [4, 1, 2, 1, 2]), 4)
        self.assertEqual(Solution.singleNumberXOR(self, [2, 2, 1]), 1)
        self.assertEqual(Solution.singleNumberXOR(self, [1]), 1)

    def test_singleNumberBruteForce(self):
        self.assertEqual(Solution.singleNumberXOR(self, [4, 1, 2, 1, 2]), 4)
        self.assertEqual(Solution.singleNumberXOR(self, [2, 2, 1]), 1)
        self.assertEqual(Solution.singleNumberXOR(self, [1]), 1)


if __name__ == "__main__":
    unittest.main()
