from typing import List
import unittest

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        visited = set()

        def dfs(r, c):
            if (r < 0 or r == ROWS or c < 0 or c == COLS or grid[r][c] == 0 or (r, c) in visited):
                return 0
            visited.add((r, c))
            return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)

        area = 0

        for r in range(ROWS):
            for c in range(COLS):
                area = max(area, dfs(r, c))
        return area

grid_one= [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
grid_two = [[0,0,0,0,0,0,0,0]]

class Test(unittest.TestCase):
  def test_maxAreaOfIslands(self):
    self.assertEqual(Solution.maxAreaOfIsland(self, grid_one), 6)
    self.assertEqual(Solution.maxAreaOfIsland(self, grid_two), 0)
    
if __name__ == "__main__":
  unittest.main()
    