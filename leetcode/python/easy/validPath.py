
#Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, 

def vp(n, edges):
  adjacencyList = [[] for _ in range(n)]
  for node1, node2 in edges:
    adjacencyList[node1].append(node2)
    adjacencyList[node2].append(node1)
  print(adjacencyList)
  
vp(6, [[0,1],[0,2],[3,5],[5,4],[4,3]])