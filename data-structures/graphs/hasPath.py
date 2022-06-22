'''
source: structy

write a function, hasPath, that takes in an object representing the adjacency list of a 
directed acyclic graph and two nodes(src, dst). The function should return a boolean 
indicating whether or not there exists a directed path between the source and destination nodes.

test_00:
adjacency_list = {
  f: [g, i],
  g: [h],
  h: [],
  i: [g, k],
  j: [i],
  k: []
}
hasPath(f, k) # True

1. function hasPath
2. It takes in these param - obj(adjacency_list), two nodes (source and destination)
  ---> adjacency list is an object representing the relationship between nodes (or vertices) in a graph
3. Fancy Terms: this graph is directed: has an arrow head and is unidirectional
   --> the graph is acyclic: has no cycles
4. return a boolean if a path exists between nodes
'''
import unittest, collections

adjacency_list = {
  'f': ['g', 'i'],
  'g': ['h'],
  'h': [],
  'i': ['g', 'k'],
  'j': ['i'],
  'k': []
}

# recursive dfs
def hasPath(edge, src, dst):
  if src == dst:
      return True
  for item in edge[src]:
    if hasPath(edge, item, dst) == True:
      return True
  return False

# iterative bfs
def hasPath_bfs(edge, src, dst):
  queue = collections.deque([src])
  
  while queue:
    curr = queue.pop()
    if curr == dst:
      return True
    for neighbor in edge[src]:
      queue.append(neighbor)

class Test(unittest.TestCase):
  def test_hashPath(self):
    self.assertEqual(hasPath(adjacency_list, 'f', 'j'), False)
    self.assertEqual(hasPath(adjacency_list, 'f', 'k'), True)
    
  def test_hashPathBFS(self):
    self.assertEqual(hasPath(adjacency_list, 'f', 'p'), False)
    self.assertEqual(hasPath(adjacency_list, 'f', 'k'), True)

if __name__ == "__main__":
  unittest.main()