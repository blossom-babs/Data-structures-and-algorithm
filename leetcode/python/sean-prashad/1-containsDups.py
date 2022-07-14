from typing import List
import unittest

'''
https://leetcode.com/problems/contains-duplicate/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        storage = set()
        
        for num in nums:
            if num in storage:
                return True
            storage.add(num)
            
        return False
      
class Test(unittest.TestCase):
  def test_containsDuplicate(self):
    self.assertEqual(Solution.containsDuplicate(self, [1,1,1,3,3,4,3,2,4,2]), True)
    self.assertEqual(Solution.containsDuplicate(self, [1,1]), True)
    self.assertEqual(Solution.containsDuplicate(self, [1,2]), False)
    self.assertEqual(Solution.containsDuplicate(self, []), False)
    self.assertEqual(Solution.containsDuplicate(self, [1]), False)
    self.assertEqual(Solution.containsDuplicate(self, [-1, 2, 3, 4]), False)
    self.assertEqual(Solution.containsDuplicate(self, [-1, 2, 3, -1]), True)
    
if __name__ == "__main__":
  unittest.main()