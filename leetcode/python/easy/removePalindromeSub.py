import unittest

'''
https://leetcode.com/problems/remove-palindromic-subsequences/
0(n) - TC | 0(1) - SC
'''

def removePalindromeSub(str) -> int:
  i, j = 0, len(str) - 1

  while i < j:
    if str[i] != str[j]:
      return 2
    i += 1
    j -= 1
  return 1

class Test(unittest.TestCase):
  def test_solution(self):
    self.assertEqual(removePalindromeSub('baabb'), 2)
    self.assertEqual(removePalindromeSub("bbaabaaa"), 2)
    self.assertEqual(removePalindromeSub('ababa'), 1)

if __name__ == "__main__":
  unittest.main()