from typing import List
import unittest

class Solution:
  
    # math solution - 0(n) - tc | 0(1) - sc
    def missingNumber3(self, nums: List[int]) -> int:
        total = 0
        n = len(nums)
        
        for i in range(len(nums)):
            total += nums[i]
         
        return n * (n + 1) // 2 - total
      
      
class Test(unittest.TestCase):
  def test_missingNumber3(self):
    self.assertEqual(Solution.missingNumber3(self, [9,6,4,2,3,5,7,0,1]), 8)
    self.assertEqual(Solution.missingNumber3(self, [3, 0, 1]), 2)
    self.assertEqual(Solution.missingNumber3(self, [0,1]), 2)
    self.assertEqual(Solution.missingNumber3(self, [1]), 0)
    self.assertEqual(Solution.missingNumber3(self, []), 0)
    
if __name__ == "__main__":
  unittest.main()