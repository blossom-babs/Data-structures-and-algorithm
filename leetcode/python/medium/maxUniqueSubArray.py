from typing import List
import unittest

'''
https://leetcode.com/problems/maximum-erasure-value/
0(n) - tc & sc
'''

def maximumUniqueSubArray(nums:List[int]) -> int:
  l, total, sum = 0, 0, 0
  hash = set()

  for r in range(len(nums)):
    while nums[r] in hash:
      hash.remove(nums[l])
      sum -= nums[l]
      l += 1
    
    hash.add(nums[r])
    sum += nums[r]
    total = max(total, sum)

  return total


class Test(unittest.TestCase):
  def test_maxUniqueSubArray(self):
    self.assertEqual(maximumUniqueSubArray([4,2,4,5,6]), 17)
    self.assertEqual(maximumUniqueSubArray([5,2,1,2,5,2,1,2,5]), 8)

  
if __name__ == "__main__":
  unittest.main()