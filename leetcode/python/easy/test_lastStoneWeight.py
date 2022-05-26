import heapq
from typing import List
import unittest

"""
https://leetcode.com/problems/last-stone-weight/
"""


class Solution:
    """
    0(n^2 log n) - TC | 0(n) - space
    """
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()
        while len(stones) > 1:
            first = stones.pop()
            second = stones.pop()
            if second < first:
                stones.append(first - second)
                stones.sort()
        res = stones[0] if len(stones) > 0 else 0
        return res

    """
    0(n log n) - TC | 0(n) - space
    """

    def lastStoneWeightHeap(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            first = heapq.heappop(stones)
            second = heapq.heappop(stones)
            if second > first:
                heapq.heappush(stones, first - second)
        res = abs(stones[0]) if len(stones) > 0 else 0
        return res


class TestLargestStoneWeight(unittest.TestCase):
    def test_lastStoneWeight(self):
        data = Solution.lastStoneWeight(self, [2, 7, 4, 1, 8])
        # data = Solution.lastStoneWeight(self, [3,7,2])
        self.assertEqual(data, 0)

    def test_lastStoneWeightHeap(self):
        data_one = Solution.lastStoneWeightHeap(self, [2, 7, 4, 1, 8, 1])
        data_two = Solution.lastStoneWeightHeap(self, [])
        data_three = Solution.lastStoneWeightHeap(self, [2])
        data_four = Solution.lastStoneWeightHeap(self, [3, 7, 2])
        self.assertEqual(data_one, 1)
        self.assertEqual(data_two, 0)
        self.assertEqual(data_three, 2)
        self.assertEqual(data_four, 2)


if __name__ == "__main__":
    unittest.main()
