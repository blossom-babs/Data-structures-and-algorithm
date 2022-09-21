from typing import List
import unittest, collections

# https://leetcode.com/problems/squares-of-a-sorted-array/
# 0(n) - tc | 0(n) - sc

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        res = collections.deque()
        l, r = 0, len(nums) - 1
        
        while l <= r:

            left, right = nums[l], nums[r]
            
            if abs(right) > abs(left):
                res.appendleft(right * right)
                r -= 1
            else:
                res.appendleft(left * left)
                l += 1
                
        return list(res)
            
            
class Test(unittest.TestCase):
  def test_sortedSquare(self):
    self.assertEqual(Solution.sortedSquares(self, [-4,-1,0,3,10]), [0,1,9,16,100])
    self.assertEqual(Solution.sortedSquares(self, [-7,-3,2,3,11]), [4,9,9,49,121])
    self.assertEqual(Solution.sortedSquares(self, [-4,-1,3,10]), [1,9,16,100])
    self.assertEqual(Solution.sortedSquares(self, [1, 2, 3, 4]), [1,4,9,16])
    
if __name__ == "__main__":
  unittest.main()