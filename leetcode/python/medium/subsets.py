from typing import List
import unittest

'''
https://leetcode.com/problems/subsets/
0(n * 2^n) - TC | 0(n) - SC
'''

def subsets(nums: List[int]) -> List[List[int]]:
  res, subset = [], []

  def backtrack(i):
    if i >= len(nums):
      res.append(subset[::])
      return

    subset.append(nums[i])
    backtrack(i + 1)

    subset.pop()
    backtrack(i + 1)

  backtrack(0)
  return res

class Test(unittest.TestCase):
  def test_subset(self):
    self.assertEqual(subsets([1, 2, 3]), [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []])
    self.assertEqual(subsets([1]), [[1], []])


if __name__ == '__main__':
  unittest.main()