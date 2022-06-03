from typing import List
import unittest

"""
https://leetcode.com/problems/transpose-matrix/
0(R * C) TC | SC - rows * cols of given matrix
"""

class Solution:
  def transpose(self, matrix:List[List[int]]) -> List[List[int]]:
    rows, cols = len(matrix), len(matrix[0])
    transposed = []

    for i in range(rows):
      transposed.append([])
      for j in range(cols):
        transposed[i].append(matrix[j][i])
    
    return transposed

class TestTranspose(unittest.TestCase):
  def test_transpose(self):
    sol = Solution.transpose(self, [[2, 4, -1], [-10, 5, 11], [18, -7, 6]])
    self.assertEqual(sol, [[2, -10, 18], [4, 5, -7], [-1, 11, 6]])

if __name__ == "__main__":
  unittest.main()