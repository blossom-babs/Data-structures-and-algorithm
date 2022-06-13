from typing import List
import unittest

'''
https://leetcode.com/problems/triangle/
0(n) - sc | 0(2 ^ n) - tc
'''

def minTotal(triangle:List[List[int]]) -> int:
  dp = [0] * (len(triangle) + 1)

  for row in triangle[::-1]:
    for i, n in enumerate(row):
      dp[i] = n + min(dp[i], dp[i + 1])

  return dp[0]


class Test(unittest.TestCase):
  def test_minTotal(self):
    self.assertEqual(minTotal([[-1],[2,3],[1,-1,-3]]), -1)
    self.assertEqual(minTotal([[2],[3,4],[6,5,7],[4,1,8,3]]), 11)
    self.assertEqual(minTotal([[-10]]), -10)

if __name__ == "__main__":
  unittest.main()