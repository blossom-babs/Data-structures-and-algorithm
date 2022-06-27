import unittest, collections

'''
source: https://structy.net/problems/shortest-path

shortest path
Write a function, shortest_path, that takes in a list of edges for an 
undirected graph and two nodes (node_A, node_B). The function should return 
the length of the shortest path between A and B. Consider the length as the 
number of edges in the path, not the number of nodes. If there is no path between 
A and B, then return -1.
'''


def shortest_path(edges, nodeA, nodeB):
    graph = adj_list(edges)
    return bfs(graph, nodeA, nodeB)

def bfs(graph, nodeA, nodeB):
  '''
  use an iterative breadth-first search to find the shortest path
  '''
  visited = set(nodeA)
  queue = collections.deque([(nodeA, 0)])
  while queue:
    curr, dist = queue.popleft()
    if curr == nodeB:
      return dist
   
    for neighbor in graph[curr]:
      if neighbor not in visited:
        visited.add(neighbor)
        queue.append((neighbor, 1 + dist))
  return -1
  
def adj_list(edges):
    '''
    convert edge to adjacency list
    '''
    dict = {}

    for l, r in edges:
        if l not in dict.keys():
            dict[l] = []
        if r not in dict.keys():
            dict[r] = []
        dict[l].append(r)
        dict[r].append(l)
    return dict


test_00 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]
#shortest_path(edges, 'w', 'z') -> 2

test_01 = [ 
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]
#shortest_path(edges, 'y', 'x') # -> 1

test_02 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]
# shortest_path(edges, 'a', 'e') # -> 3

test_03 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]
# shortest_path(edges, 'e', 'c') # -> 2

test_04 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]
# shortest_path(edges, 'b', 'g') # -> -1

test_05 = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
]
#shortest_path(edges, 'w', 'e') # -> 1

test_06 = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
]
#shortest_path(edges, 'n', 'e') # -> 2

test_07 = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
]
# shortest_path(edges, 'm', 's') # -> 6


class Test(unittest.TestCase):
  def test_shortestPath(self):
    self.assertEqual(shortest_path(test_00, 'w', 'z'), 2)
    self.assertEqual(shortest_path(test_01, 'y', 'x'), 1)
    self.assertEqual(shortest_path(test_02, 'a', 'e'), 3)
    self.assertEqual(shortest_path(test_03, 'e', 'c'), 2)
    self.assertEqual(shortest_path(test_04, 'b', 'g'), -1)
    self.assertEqual(shortest_path(test_05, 'w', 'e'), 1)
    self.assertEqual(shortest_path(test_06, 'n', 'e'), 2)
    self.assertEqual(shortest_path(test_07, 'm', 's'), 6)
    
if __name__ == "__main__":
  unittest.main()