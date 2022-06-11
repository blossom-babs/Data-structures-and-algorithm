'''
Good morning! Here's your coding interview problem for today.
This problem was asked by Uber.
Given an array of integers, return a new array such that each element 
at index i of the new array is the product of all the numbers in 
the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?
'''

import unittest
#0(n) - tc | 0(n^2) - sc

def productExceptI(nums):
    prefix = [1] * len(nums)
    postfix = [1] * len(nums)

    pre = nums[0]
    post = nums[-1]

    for i in range(1, len(nums)):
        prefix[i] *= pre
        pre *= nums[i]

    for i in range(len(nums) - 2, -1, -1):
        postfix[i] *= post
        post *= nums[i]

    for i in range(len(nums)):
        nums[i] = prefix[i] * postfix[i]

    return nums

class Test(unittest.TestCase):
  def test_productExceptI(self):
    self.assertEqual(productExceptI([3, 2, 1]), [2, 3, 6])
    self.assertEqual(productExceptI([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24])

if __name__ == "__main__":
  unittest.main()
