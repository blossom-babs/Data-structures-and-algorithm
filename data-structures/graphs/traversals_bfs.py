'''
Breadth first traversal
'''

import collections

adjacency_list = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
}

def dfs(graph, start):
  queue = collections.deque([start]) # add the starting item to the queue
  
  while queue: # run this loop until the queue is empty
    curr = queue.popleft() # remove the FIRST item in the queue FIFO
    print(curr) # print the item
    
    for item in graph[curr]: # add all the neighbors of the curr item to the queue
      queue.append(item)
      
dfs(adjacency_list, 'a')