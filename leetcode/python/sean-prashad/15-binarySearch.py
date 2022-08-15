# https://leetcode.com/problems/binary-search/submissions/

#0(n) - TC | 0(1) - SC
from typing import List
import unittest


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lower, upper = 0, len(nums) - 1
        
        while lower <= upper:
            mid =  (upper + lower) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                upper = mid - 1
            else:
                lower = mid + 1
                
        return -1
      
class Test(unittest.TestCase):
  def test_search(self):
    self.assertEqual(Solution.search(self, [-1,0,3,5,9,12], 9), 4)
    self.assertEqual(Solution.search(self, [-1,0,3,5,9,12], 2), -1)
    
if __name__ == "__main__":
  unittest.main()