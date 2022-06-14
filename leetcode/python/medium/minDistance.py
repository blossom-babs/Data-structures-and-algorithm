import unittest

'''
https://leetcode.com/problems/delete-operation-for-two-strings/
0(m + n) - tc | 0(min(m + n)) - sc
'''

def minDistance(word1:str, word2:str) -> int:
  if len(word1) > len(word2):
    word2, word1 = word1, word2

  m, n = len(word1), len(word2)
  prev = [0] * (m + 1)

  for i in range(n-1, -1, -1):
    curr = [0] * (m + 1)
    for j in range(m-1, -1, -1):
      if word1[j] == word2[i]:
        curr[j] = 1 + prev[j + 1]
      else:
        curr[j] = max(curr[j + 1], prev[j])
    prev = curr
  
  return m + n - 2 * prev[0]

class Test(unittest.TestCase):
  def test_minDistance(self):
    self.assertEqual(minDistance('sea', 'eat'),2)
    self.assertEqual(minDistance('sea', 'cap'),0)
    self.assertEqual(minDistance('leetcode', 'etco'),4)

if __name__ == "__main__":
  unittest.main()