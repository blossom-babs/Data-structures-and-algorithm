'''
source: structy

CONNECTED COMPONENTS COUNT

write a function, connectedComponentCount, that takes in the adjacency list of an undirected graph
(that is you need a set to avoid cyclic graphs). 
The function should return the number of connected components in the graph.

test__00:
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}) # 2
'''
import unittest
# 0(e) tc | 0(n) - sc

cc = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}  # 2

cc_2 = {
    3: [],
    4: [6],
    6: [4,5,7,8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}  # 3


def connectedComponentsCount(graph):
    count, visited = 0, set()
    for key in graph:
        if dfs(graph, key, visited) == True:
          count += 1
    return count


def dfs(graph, key, visited):
    if key in visited:
        return False
    visited.add(key)
    for neighbor in graph[key]:
        dfs(graph, neighbor, visited)
    return True


class Test(unittest.TestCase):
  def test_connectComp(self):
    self.assertEqual(connectedComponentsCount(cc), 2)
    self.assertEqual(connectedComponentsCount(cc_2), 3)

if __name__ == "__main__":
  unittest.main()