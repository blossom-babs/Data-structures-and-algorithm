import unittest

'''
https://leetcode.com/problems/valid-anagram/
'''

#0(n log n) - tc & sc
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        def sortStr(letter):
            letter = sorted(letter)
            newLetter = ''.join(letter)
            return newLetter
        
        return sortStr(s) == sortStr(t)
        
#0(s + t) - tc & sc        
class SolutionTwo:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        countS, countT = {}, {}
        
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
            
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False
        return True

class Test(unittest.TestCase):
  def test_solutionOne(self):
    self.assertEqual(Solution.isAnagram(self, 'anagram', 'nagaram'), True)
    self.assertEqual(Solution.isAnagram(self, 'rat', 'car'), False)
    self.assertEqual(Solution.isAnagram(self, 'rat', 'ca'), False)
    self.assertEqual(Solution.isAnagram(self, '', ''), True)
    self.assertEqual(Solution.isAnagram(self, '', 'b'), False)
    self.assertEqual(Solution.isAnagram(self, ' ', ' '), True)
    
  def test_solutionTwo(self):
    self.assertEqual(SolutionTwo.isAnagram(self, 'anagram', 'nagaram'), True)
    self.assertEqual(SolutionTwo.isAnagram(self, 'rat', 'car'), False)
    self.assertEqual(SolutionTwo.isAnagram(self, 'rat', 'ca'), False)
    self.assertEqual(SolutionTwo.isAnagram(self, '', ''), True)
    self.assertEqual(SolutionTwo.isAnagram(self, '', 'b'), False)
    self.assertEqual(SolutionTwo.isAnagram(self, ' ', ' '), True)
    
if __name__ == "__main__":
    unittest.main()