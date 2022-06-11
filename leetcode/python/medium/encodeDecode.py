from typing import List
import unittest

"""
https://leetcode.com/problems/encode-and-decode-strings/
"""

class Solution:
  """
  @param: list of strings
  @return: encode string of list to a single string
  0(n) - tc | o(1) - sc
  """

  def encode(self, strs:List[str]) -> str:
    res = ""
    for s in strs:
      res += str(len(s)) + "#" + s
    return res

  """
  @param: string
  @return: decides a single string to a list of strings
  0(n) - tc | o(1) - sc
  """

  def decode(self, str:str) -> List[str]:
    res, i = [], 0
    
    while i < len(str):
      j = i
      while str[j] != '#':
        j += 1
      length = int(str[i:j])
      res.append(str[j + 1: j + 1 + length])
      i = j + 1 + length
   
    return res

class Test(unittest.TestCase):
  def test_solution(self):
    self.assertEqual(Solution.encode(self, ["Church", "go"]), "6#Church2#go")
    self.assertEqual(Solution.decode(self, "6#Church2#go"), ["Church", "go"])

if __name__ == "__main__":
  unittest.main()