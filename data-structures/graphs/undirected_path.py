'''
source: structy.net

write a function, undirectedPath, that takes in an array of edges for an undirected graph and
two nodes(nodeA and nodeB). The function should return a boolean
indicating whether or not there exists a path between nodeA and nodeB.

test_00:
adjacency_list = [
['i', 'j'],
['k', 'i'],
['m', 'k'],
['k', 'l'],
['o', 'n']
]
undirectedPath(edges, 'j', 'm') # True

NOTE:
1. function undirectedPath
2. This is an undirectedPath, so a good edge case to prepare for is the cycle
3. convert to adjacency list
4. store visited graph in a set
'''

import unittest
import collections

# 0(e) - tc | 0(n) - sc
# recursive dfs


def undirectedPath(edges, nodeA, nodeB):

    def validPath(graph, nodeA, nodeB, visited):
        if nodeA == nodeB:
            return True
        if nodeA in visited:
            return False

        visited.add(nodeA)

        for item in graph[nodeA]:
            if validPath(graph, item, nodeB, visited) == True:
                return True

        return False
    # convert array of edges to adjacency list

    def adjList(edges):
        dict = {}
        for l, r in edges:
            if l not in dict.keys():
                dict[l] = []
            if r not in dict.keys():
                dict[r] = []
            dict[l].append(r)
            dict[r].append(l)
        return dict

    graph = adjList(edges)
    return validPath(graph, nodeA, nodeB, set())


adjacency_list = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]


class Test(unittest.TestCase):
    def test_undirectedPath(self):
        self.assertEqual(undirectedPath(adjacency_list, 'j', 'o'), False)
        self.assertEqual(undirectedPath(adjacency_list, 'j', 'm'), True)


if __name__ == "__main__":
    unittest.main()

# BFS
#     def validPath_BFS(graph, nodeA, nodeB, visited):
#         queue = collections.deque([nodeA])
#         while queue:
#             curr = queue.popleft()
#             print(curr)
#             if curr == nodeB:
#               return True
#             if curr in visited:
#               return False
#             visited.add(curr)
#             for item in graph[curr]:
#               queue.append(item)

#         return False
