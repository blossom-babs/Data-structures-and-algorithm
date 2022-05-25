import heapq
import unittest
from pip import List

"""
https://leetcode.com/problems/kth-largest-element-in-a-stream/
0(n log k) - TC | 0(1) - space
"""

class KthLargest:
  def __init__(self, k:int, nums: List[int]):
    self.minHeap = nums
    self.k = k
    heapq.heapify(self.minHeap)
    while len(self.minHeap) > k:
      heapq.heappop(self.minHeap)

  def add(self, val:int) -> int:
    heapq.heappush(self.minHeap, val)
    if len(self.minHeap) > self.k:
      heapq.heappop(self.minHeap)
    return self.minHeap[0]

class TestKthLargest(unittest.TestCase):
  def test_kthLargest(self):
    heap = KthLargest(3, [4,5,8,2])
    result = heap.add(3)
    self.assertEqual(result, 4)

if __name__ == "__main__":
  unittest.main()