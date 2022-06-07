from typing import List
import unittest

'''
https://leetcode.com/problems/product-of-array-except-self/
0(n) - TC | 0(1) - SC (the output array does not count as extra space)
'''

def productExceptSelf(nums:List[int]) -> List[int]:
  res = [1] * len(nums)
  prefix = 1

  for i in range (len(nums)):
    res[i] = prefix
    prefix *= nums[i]

  postfix = 1

  for i in range(len(nums) - 1, -1, -1):
    res[i] *= postfix
    postfix *= nums[i]
  
  return res


class Test(unittest.TestCase):
  def test_productExceptSelf(self):
    self.assertEqual(productExceptSelf([1,2,3,4]), [24, 12, 8, 6])
    self.assertEqual(productExceptSelf([-1,1,0,-3,3]), [0, 0, 9, 0, 0])


if __name__ == "__main__":
  unittest.main()