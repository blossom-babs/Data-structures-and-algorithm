'''
https://coderbyte.com/algorithm/subset-sum-problem?stay=true

The function would always return true unless the target sum is less than the
smallest number in the array, which is quite a clever trick.
'''

import unittest
memo = {}
# 0(m * n) - tc | 0(m) - sc

def canSum(targetSum, nums):
  if targetSum in memo:
    return memo[targetSum]
  if targetSum == 0:
    return True
  if targetSum < 0:
    return False
  
  for num in nums:
    res = targetSum - num
    if canSum(res, nums):
      memo[targetSum] = True
      return True
  
  memo[targetSum] = False
  return False

def canSumTwo(target, nums):
  smallest = min(nums)
  if target < smallest:
    return False
  return True

print('print statement', canSum(7, [2, 4]))
print('print statement', canSum(7, [2, 3]))
    
class Test(unittest.TestCase):
  def test_canSum(self):
    self.assertEqual(canSum(7, [2, 3]), True)    
    self.assertEqual(canSum(7, [5, 3, 4, 7]), True)    
    self.assertEqual(canSum(7, [2, 4]), False)    
    self.assertEqual(canSum(8, [2, 3, 5]), True)    
    self.assertEqual(canSum(300, [7, 14]), False)    

if __name__ == "__main__":
  unittest.main()