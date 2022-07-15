from typing import List
import unittest

'''
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
'''

class Solution:
    # 0(n) - tc | 0(n) - sc 
    def findDisappearedNumbers1(self, nums: List[int]) -> List[int]:
        numsSet, res = set(nums), []
            
        for i in range(1, len(nums) + 1):
            if i not in numsSet:
                res.append(i)
        return res
    
    # 0(n) - tc | 0(1) - sc 
    def findDisappearedNumbers2(self, nums: List[int]) -> List[int]:
        i = 0
        res = []
        
        while i < len(nums):
            j = nums[i] - 1
            
            if nums[i] != nums[j]:
                nums[i], nums[j] = nums[j], nums[i]
            else:
                i += 1
            
        for i in range(len(nums) + 1):
            if i < len(nums) and i + 1 != nums[i]:
                res.append(i + 1)
        return res

class Test(unittest.TestCase):
  def test_disappearedNum(self):
    self.assertEqual(Solution.findDisappearedNumbers1(self, [1, 1]), [2])
    self.assertEqual(Solution.findDisappearedNumbers1(self, [4,3,2,7,8,2,3,1]), [5, 6])
    
  def test_disappearedNum2(self):
    self.assertEqual(Solution.findDisappearedNumbers2(self, [1, 1]), [2])
    self.assertEqual(Solution.findDisappearedNumbers2(self, [4,3,2,7,8,2,3,1]), [5, 6])
    
    
if __name__ == "__main__":
  unittest.main()