'''
Depth first traversal
'''

# Iteratively 
adjacency_list = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
}

def dfs(graph, start):
  stack_ds = [start] # add the starting item to the stack
  
  while stack_ds: # run this loop until the stack is empty
    curr = stack_ds.pop() # remove the last item in the stack LIFO
    print(curr) # print the item
    
    for item in graph[curr]: # add the neighbors of the curr item to the stack
      stack_ds.append(item)
      
dfs(adjacency_list, 'a')

# recursively

def dfs_recursive(graph, start):
  print(start)
  for item in graph[start]:
    dfs_recursive(graph, item)
    
dfs_recursive(adjacency_list, 'a')