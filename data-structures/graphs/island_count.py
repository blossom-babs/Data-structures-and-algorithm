import unittest, collections

'''
Write a function, island_count, 
that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.
'''

test_00 = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]
#island_count(grid) # -> 3

test_01 = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
]
#island_count(grid) # -> 4

test_02 = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
]
#island_count(grid) # -> 1

test_03 = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
]
#island_count(grid) # -> 0

#tc = 0(rc) | sc 0(rc)

def island_count(grid):
  ROWS, COLS = len(grid), len(grid[0])
  visited = set()
  count = 0
  
  def explore(r, c):
    if r not in range(ROWS) or c not in range(COLS) or grid[r][c] == 'W' or (r, c) in visited:
      return False
    visited.add((r, c))
    explore(r + 1, c)
    explore(r - 1, c)
    explore(r, c + 1)
    explore(r, c - 1)
    return True

  for r in range(ROWS):
    for c in range(COLS):
      if grid[r][c] == "L":
        if explore(r, c) == True:
          count += 1
  return count
        
class Test(unittest.TestCase):
  def test_islandCount(self):
    self.assertEqual(island_count(test_00), 3)
    self.assertEqual(island_count(test_01), 4)
    self.assertEqual(island_count(test_02), 1)
    self.assertEqual(island_count(test_03), 0)
    
if __name__ == "__main__":
  unittest.main()
