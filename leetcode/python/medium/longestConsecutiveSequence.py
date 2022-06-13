from typing import List
import unittest

'''
https://leetcode.com/problems/longest-consecutive-sequence/
0(n) tc & sc
'''

def consecutiveSeq(nums:List[int]) -> int:
  numsSet = set(nums)
  longest = 0

  for n in nums:
    if (n - 1) not in numsSet:
      length = 0
      while (n + length) in numsSet:
        length += 1
      longest = max(longest, length)
  
  return longest

class Test(unittest.TestCase):
  def test_consecutiveSeq(self):
    self.assertEqual(consecutiveSeq([100,4,200,1,3,2]), 4)
    self.assertEqual(consecutiveSeq([0,3,7,2,5,8,4,6,0,1]), 9)


if __name__ == "__main__":
  unittest.main()