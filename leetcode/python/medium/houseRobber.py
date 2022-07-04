from typing import List
import unittest

'''
https://leetcode.com/problems/house-robber/
0(n) - tc | 0(n) - sc
'''

def rob(nums:List[int]) -> int:
  rob1, rob2 = 0, 0
  
  for n in nums:
    temp = max(n + rob1, rob2)
    rob1 = rob2
    rob2 = temp
  return rob2

class Test(unittest.TestCase):
  def test_rob(self):
    self.assertEqual(rob([1, 2, 3, 1]), 4)
    self.assertEqual(rob([1, 2]), 2)
    self.assertEqual(rob([2, 7, 9, 3, 1]), 12)
    
if __name__ == "__main__":
  unittest.main()