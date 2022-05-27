import heapq
from typing import List
import unittest

"""
https://leetcode.com/problems/k-closest-points-to-origin/
0(k log n) - TC | 0(n) - SC
"""

class Solution:
  def KClosest(self, points:List[List[int]], k:int) -> List[List[int]]:
    minHeap = []

    for x,y in points:
      dist = (x**2) + (y**2)
      minHeap.append([dist, x, y])

    heapq.heapify(minHeap)
    res = []

    while k > 0:
      dist, x, y = heapq.heappop(minHeap)
      res.append([x,y])
      k -= 1
    
    return res

class TestKClosest(unittest.TestCase):
  def test_KClosest(self):
    points = [[1,3],[-2,2]]
    points_two = [[3,3],[5,-1],[-2,4]]
    k = 1
    k_two = 2
    result = Solution.KClosest(self, points, k)
    result_two = Solution.KClosest(self, points_two, k_two)
    self.assertEqual(result, [[-2, 2]])
    self.assertEqual(result_two, [[3,3],[-2,4]])

if __name__ == '__main__':
  unittest.main()
