import unittest

# https://leetcode.com/problems/backspace-string-compare/solutions/?orderBy=most_votes&languageTags=javascript&topicTags=two-pointers
# 0(n) - TC | 0(1) - SC

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        sLen = len(s) - 1
        tLen = len(t) - 1

        sSkip, tSkip = 0, 0
        sNew, tNew = '', ''

        while(sLen >= 0 or tLen >= 0):
            while(sLen >= 0):
                if s[sLen] == '#':
                    sSkip += 1
                elif sSkip > 0:
                    sSkip -= 1
                else:
                    sNew += s[sLen]
                sLen -= 1

            while tLen >= 0:
                if t[tLen] == '#':
                    tSkip += 1
                elif tSkip > 0:
                    tSkip -= 1
                else:
                    tNew += t[tLen]
                tLen -= 1

        return tNew == sNew
      
class Test(unittest.TestCase):
  def test_backspaceCompare(self):
    self.assertEqual(Solution.backspaceCompare(self, 'ab#cd#', 'ac#d#c'), True)
    self.assertEqual(Solution.backspaceCompare(self, "ab#c", 'ad#c'), True)
    self.assertEqual(Solution.backspaceCompare(self, "ab##", 'c#d#'), True)
    self.assertEqual(Solution.backspaceCompare(self, 'a#c', 'b'), False)
    
if __name__ == "__main__":
  unittest.main()