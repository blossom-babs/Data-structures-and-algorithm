import unittest

'''
Write a function, minimum_island, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
'''

test_00 = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]
#minimum_island(grid) # -> 2

test_01 = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
]
#minimum_island(grid) # -> 1

test_02 = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
]
#minimum_island(grid) # -> 9

test_03 = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
]
#minimum_island(grid) # -> 1

#tc = 0(rc) | sc 0(rc)

def minIsland(grid):
  ROWS, COLS = len(grid), len(grid[0])
  visited = set()
  count = float('inf')
  
  def explore(r, c):
    size = 1
    if r not in range(ROWS) or c not in range(COLS) or grid[r][c] == 'W' or (r, c) in visited:
      return 0
    visited.add((r, c))
    size += explore(r + 1, c)
    size += explore(r - 1, c)
    size += explore(r, c + 1)
    size += explore(r, c - 1)
    return size

  for r in range(ROWS):
    for c in range(COLS):
      if grid[r][c] == "L":
        res = explore(r, c)
        if res > 0:
          count = min(res, count)
  return count
        
class Test(unittest.TestCase):
  def test_islandCount(self):
    self.assertEqual(minIsland(test_00), 2)
    self.assertEqual(minIsland(test_01), 1)
    self.assertEqual(minIsland(test_02), 9)
    self.assertEqual(minIsland(test_03), 1)
    
if __name__ == "__main__":
  unittest.main()
