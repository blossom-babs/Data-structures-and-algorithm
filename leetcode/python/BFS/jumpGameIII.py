from typing import Deque, List
import unittest

'''
https://leetcode.com/problems/jump-game-iii/
0(n) - tc | 0(n) - sc
'''


class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        queue = Deque([start])
        visited = set()
        
        while queue:
            idx = queue.popleft()
            
            if idx in visited:
                continue
            visited.add(idx)
            
            if arr[idx] == 0:
                return True
            else:
                if idx - arr[idx] >= 0:
                    queue.append(idx - arr[idx])
                if idx + arr[idx] < len(arr):
                    queue.append(idx + arr[idx])
        return False
      
class Test(unittest.TestCase):
  def test_canReach(self):
    self.assertEqual(Solution.canReach(self, [3,0,2,1,2], 2), False)
    self.assertEqual(Solution.canReach(self, [4,2,3,0,3,1,2], 5), True)

if __name__ == "__main__":
  unittest.main()