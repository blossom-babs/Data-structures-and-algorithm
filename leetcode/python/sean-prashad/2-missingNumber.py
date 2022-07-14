from typing import List
import unittest

class Solution:
  
    # intuitive traversal  0(n) - tc | 0(1) - sc
    
    def missingNumber1(self, nums:List[int]) -> int:
      for i in range(len(nums) + 1):
        if i not in nums:
          return i
  
    # sort traversal 0(n) - tc | 0(1) - sc
    def missingNumber2(self, nums:List[int]) -> int:
      i = 0
      
      while i < len(nums):
        j = nums[i]
        if nums[i] < len(nums) and nums[i] != i:
          nums[i], nums[j] = nums[j], nums[i]
        else:
          i += 1
      
      for idx in range(len(nums)):
        if idx != nums[idx]:
          return idx
        
      return len(nums)
  
    # math solution - 0(n) - tc | 0(1) - sc
    def missingNumber3(self, nums: List[int]) -> int:
        total = 0
        n = len(nums)
        
        for i in range(len(nums)):
            total += nums[i]
            
        return n * (n + 1) // 2 - total
      
      
class Test(unittest.TestCase):
  def test_missingNumber1(self):
    self.assertEqual(Solution.missingNumber1(self, [9,6,4,2,3,5,7,0,1]), 8)
    self.assertEqual(Solution.missingNumber1(self, [3, 0, 1]), 2)
    self.assertEqual(Solution.missingNumber1(self, [0,1]), 2)
    self.assertEqual(Solution.missingNumber1(self, [1]), 0)
    self.assertEqual(Solution.missingNumber1(self, []), 0)
    
  def test_missingNumber2(self):
    self.assertEqual(Solution.missingNumber1(self, [9,6,4,2,3,5,7,0,1]), 8)
    self.assertEqual(Solution.missingNumber1(self, [3, 0, 1]), 2)
    self.assertEqual(Solution.missingNumber1(self, [0,1]), 2)
    self.assertEqual(Solution.missingNumber1(self, [1]), 0)
    self.assertEqual(Solution.missingNumber1(self, []), 0)
    
    
  def test_missingNumber3(self):
    self.assertEqual(Solution.missingNumber3(self, [9,6,4,2,3,5,7,0,1]), 8)
    self.assertEqual(Solution.missingNumber3(self, [3, 0, 1]), 2)
    self.assertEqual(Solution.missingNumber3(self, [0,1]), 2)
    self.assertEqual(Solution.missingNumber3(self, [1]), 0)
    self.assertEqual(Solution.missingNumber3(self, []), 0)
    
if __name__ == "__main__":
  unittest.main()