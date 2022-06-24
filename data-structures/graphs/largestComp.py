'''
source: structy

LARGEST COMPONENT

write a function, largestComponent, that takes in the adjacency list of an undirected graph
(that is you need a set to avoid cyclic graphs). 
The function should return the size of the largest connected component in the graph.

test__00:
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}) # 4
'''
import unittest, collections
# 0(e) tc | 0(n) - sc

test_0 = { # 4
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}  

test_1 = { # 6
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}  

test_2 = { # 5
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
} 

test_3 = {} # 0

test_4 = { # 3
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
} 

def largestComp(graph):
  visited, count = set(), 0
  for key in graph:
    res = dfs(graph, key, visited)
    count = max(res, count)
  return count
    
# iterative bfs REVISIT
def bfs(graph, key, visited):
  size = 0
  queue = collections.deque([key])
  while queue:
    curr = queue.popleft()
    if curr in visited:
      break
    visited.add(curr)
    size += 1
    for neighbor in graph[curr]:
      queue.append(neighbor)
  return size

# recursive dfs
def dfs(graph, key, visited):
  if key in visited:
    return 0
  visited.add(key)
  size = 1
  for neighbor in graph[key]:
    size += dfs(graph, neighbor, visited)
  return size


class Test(unittest.TestCase):
  def test_connectComp(self):
    self.assertEqual(largestComp(test_0), 4)
    self.assertEqual(largestComp(test_1), 6)
    self.assertEqual(largestComp(test_2), 5)
    self.assertEqual(largestComp(test_3), 0)
    self.assertEqual(largestComp(test_4), 3)


if __name__ == "__main__":
  unittest.main()