from typing import List
import unittest

def subsetsWithDup(nums:List[int]) -> List[List[int]]:
  res, subset = [], []

  def backtrack(i):
    if i >= len(nums):
      res.append(subset[::])
      return

    subset.append(nums[i])
    backtrack(i + 1)
    subset.pop()

    while i + 1 < len(nums) and nums[i] == nums [i + 1]:
      i += 1

    backtrack(i + 1)

  backtrack(0)
  return res

class Test(unittest.TestCase):
  def test_subsetWithDup(self):
    self.assertEqual(subsetsWithDup([1, 2, 2]), [[1, 2, 2], [1, 2], [1], [2, 2], [2], []])
    self.assertEqual(subsetsWithDup([0]), [[0], []])

if __name__ == "__main__":
  unittest.main()