from typing import List
import unittest

'''
https://leetcode.com/problems/gas-station/
0(n) - tc | 0(1) - sc
'''


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1

        total, res = 0, 0

        for i in range(len(gas)):
            total += (gas[i] - cost[i])

            if total < 0:
                total = 0
                res = i + 1
        return res


class Test(unittest.TestCase):
    def test_canCompleteCircuit(self):
        self.assertEqual(Solution.canCompleteCircuit(self, [2, 3, 4], [3, 4, 3]), -1)
        self.assertEqual(Solution.canCompleteCircuit(self, [1,2,3,4,5], [3,4,5,1,2]), 4)


if __name__ == "__main":
    unittest.main()
