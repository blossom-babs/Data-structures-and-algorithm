from typing import List
import unittest

'''
https://leetcode.com/problems/container-with-most-water/
0(n) - tc | 0(1) - sc
'''

def maxArea(height:List[int]) -> int:
  res, l, r = 0, 0, len(height) - 1

  while l < r:
    res = max(res, (r - l) * min(height[l], height[r]))
    if height[l] <= height[r]:
      l += 1
    else:
      r -= 1

  return res

class Test(unittest.TestCase):
  def test_maxArea(self):
    self.assertEqual(maxArea([1,8,6,2,5,4,8,3,7]), 49)
    self.assertEqual(maxArea([1,1]), 1)
    self.assertEqual(maxArea([5,4,8,3,7]), 20)


if __name__ == "__main__":
  unittest.main()