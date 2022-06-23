from typing import List

'''
https://leetcode.com/problems/find-the-town-judge/
0(n) - sc | 0(n) -tc
'''

def trustJudge(n, trust:List[List[int]]) -> int:
  trust_board = [0] * (n + 1)
  
  for person1, person2 in trust:
    trust_board[person2] += 1
    trust_board[person1] -= 1
    
  for i in range(1, n + 1):
    if trust_board[i] == n - 1:
      return i
  return -1


print(trustJudge(3, [[1,2], [2,3]]))