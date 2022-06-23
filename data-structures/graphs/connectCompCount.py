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