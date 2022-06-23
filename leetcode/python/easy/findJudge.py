from typing import List
import unittest


def findJudge(n: int, trust: List[List[int]]) -> int:
    def adj_list(edges):
        dict = {}

        for l, r in edges:
            if l not in dict.keys():
                dict[l] = []
            if r not in dict.keys():
                dict[r] = []
            dict[l].append(r)
        return dict

    graph = adj_list(trust)

    def find_judge(graph, n):
        if len(graph[n]) < 1:
            return n
        while n >= 2:
            return find_judge(graph, n - 1)
        return -1

    def count(graph, n):
        dict = {}
        if n!= 0 and len(graph[n]):
            for item in graph[n]:
                dict[item] = 1 + dict.get(item, 0)
                while n >= 1:
                    return count(graph, n - 1)

        return dict

    print(count(graph, n))
    return find_judge(graph, n)


res = findJudge(3,
                [[1, 2], [2, 3]])
print(res)
