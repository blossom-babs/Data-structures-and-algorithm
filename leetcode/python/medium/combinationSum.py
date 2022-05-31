from typing import List
import unittest

"""
https://leetcode.com/problems/combination-sum/
"""

class Solution:
  def combinationSum(self, candidates:List[int], target:int) -> List[List[int]]:
    res = []

    def dfs(i, cur, total):
      if total == target:
        res.append(cur.copy())
        return
      
      if i >= len(candidates) or total > target:
        return

      cur.append(candidates[i])
      dfs(i, cur, total + candidates[i])
      cur.pop()
      dfs(i + 1, cur, total)

    dfs(0, [], 0)
    return res


class TestCombination(unittest.TestCase):
  def test_combinationSum(self):
    one = Solution.combinationSum(self, [2,3,6,7], 7)
    two = Solution.combinationSum(self, [2,3,5], 8)
    three = Solution.combinationSum(self, [2], 1)

    self.assertEqual(one, [[2,2,3],[7]])
    self.assertEqual(two, [[2,2,2,2],[2,3,3],[3,5]])
    self.assertEqual(three, [])

if __name__ == "__main__":
  unittest.main()
