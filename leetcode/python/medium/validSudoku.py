import collections
from typing import Collection, List
import unittest

def validSudoku(board: List[List[int]]) -> bool:
  cols = collections.defaultdict(set)
  rows = collections.defaultdict(set)
  squares = collections.defaultdict(set)

  for r in range(9):
    for c in range(9):
      if board[r][c] == ".":
        continue
      if (board[r][c] in rows[r] or 
          board[r][c] in cols[c] or
          board[r][c] in squares[(r//3, c//3)]):
          return False
      rows[r].add(board[r][c])
      cols[c].add(board[r][c])
      squares[((r//3, c//3))].add(board[r][c])

  return True


class Test(unittest.TestCase):
  def test_validSudoku(self):
    board_one = [["5","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]]

    board_two = [["8","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]]


    self.assertEqual(validSudoku(board_one), True)
    self.assertEqual(validSudoku(board_two), False)


if __name__ == "__main__":
  unittest.main()