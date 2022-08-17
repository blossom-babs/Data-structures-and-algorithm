from typing import List
import unittest

# https://leetcode.com/problems/find-smallest-letter-greater-than-target
# 0(log n) - TC | 0(1) - SC
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        lower, upper = 0, len(letters) - 1
        
        if target < letters[lower] or target >= letters[upper]: return letters[0]
        
        while lower < upper:
            mid = (upper + lower) // 2
            
            if letters[mid] > target:
                upper = mid
            else:
                lower = mid + 1
                
        return letters[upper];
        
class Test(unittest.TestCase):
  def test_nextGreatestLetter(self):
    self.assertEqual(Solution.nextGreatestLetter(self, ['c', 'f', 'j'], 'a'), 'c')
    self.assertEqual(Solution.nextGreatestLetter(self, ['c', 'f', 'j'], 'c'), 'f')
    self.assertEqual(Solution.nextGreatestLetter(self, ['c', 'f', 'j'], 'd'), 'f')
    self.assertEqual(Solution.nextGreatestLetter(self, ['c', 'f', 'j'], 'j'), 'c')
    

if __name__ == "__main__":
  unittest.main()
