from typing import List
import unittest

'''
https://leetcode.com/problems/n-queens/
0(2 ^ N) - TC | 0(N ^ 2) - SC
'''

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        col = set()
        posDiag = set()
        negDiag = set()
        
        res = []
        board = [["."] * n for i in range(n)]
        
        def backtrack(r):
            if r == n:
                copy = ["".join(row) for row in board]
                res.append(copy)
                return
            
            for c in range(n):
                if c in col or (r + c) in posDiag or (r - c) in negDiag:
                    continue
                    
                col.add(c)
                posDiag.add(r + c)
                negDiag.add(r - c)
                board[r][c] = "Q"
                
                backtrack(r + 1)
                
                col.remove(c)
                posDiag.remove( r + c)
                negDiag.remove(r - c)
                board[r][c] = "."
                
        backtrack(0)
        return res
      

class TestSolution(unittest.TestCase):
  def test_solveNQueens(self):
    self.assertEqual(Solution.solveNQueens(self, 4), [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]])
    self.assertEqual(Solution.solveNQueens(self, 1), [["Q"]])


if __name__ == "__main__":
  unittest.main()