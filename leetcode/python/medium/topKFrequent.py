import heapq
from typing import List
import unittest

"""
https://leetcode.com/problems/top-k-frequent-elements/
"""

class Solution:
  """
  Heap method
  0(k log n) - TC | 0(n) - SC
  """
  def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    count = {}
    minHeap = []
    res = []

    # Count each number in the nums array
    for n in nums:
      count[n] = 1 + count.get(n, 0) 

    # Add the (num, count to the heap)
    for n, c in count.items():
      heapq.heappush(minHeap, (c, n))
      if len(minHeap) > k:
        heapq.heappop(minHeap)
    
    # append the numbers with k occurence to res
    for c, n in minHeap:
      res.append(n)
    
    return res

    """
    Bucket sort
    0(n) - TC | 0(n) - SC
    """

  def topKFrequentBucket(self, nums:List[int], k:int) -> List[int]:
    count = {}
    freq = [[] for i in range (len (nums) + 1)]

    for n in nums:
      count[n] = 1 + count.get(n, 0)

    for n, c in count.items():
      freq[c].append(n)

    res = []
    for i in range(len(freq) -1, 0, -1):
      for n in freq[i]:
        res.append(n)
        if len(res) == k:
          return res


class TestTopK(unittest.TestCase):
  def test_topK(self):
    data = Solution.topKFrequent(self, [5,5,5,5,6,6,6,7], 2)
    self.assertEqual(data, [6,5])
  
  def test_topKBucket(self):
    data = Solution.topKFrequentBucket(self, [2,2,2,3,3], 1)
    self.assertEqual(data, [2])

if __name__ == "__main__":
  unittest.main()
