from typing import List
import unittest, heapq

'''
https://leetcode.com/problems/hand-of-straights/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        
        count = {}
        for n in hand:
            count[n] = 1 + count.get(n, 0)
        
        minHeap = list(count.keys())
        heapq.heapify(minHeap)
        
        while minHeap:
            minVal = minHeap[0]
            
            for num in range(minVal, minVal + groupSize):
                if num not in count:
                    return False
                count[num] -= 1
                
                if count[num] == 0:
                    if num != minHeap[0]:
                        return False
                    heapq.heappop(minHeap)
        return True

class Test(unittest.TestCase):
  def test_isNStraightHand(self):
    self.assertEqual(Solution.isNStraightHand(self, [1, 0], 3), False)
    self.assertEqual(Solution.isNStraightHand(self, [8, 10, 12], 3), False)
    self.assertEqual(Solution.isNStraightHand(self, [1,2,3,6,2,3,4,7,8], 3), True)
    self.assertEqual(Solution.isNStraightHand(self, [1,2,3,4,5], 4), False)
    
if __name__ == "__main__":
  unittest.main()