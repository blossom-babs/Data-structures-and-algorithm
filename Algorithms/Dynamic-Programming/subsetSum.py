'''
https://coderbyte.com/algorithm/subset-sum-problem?stay=true

The function would always return true unless the target sum is less than the
smallest number in the array, which is quite a clever trick.
'''

def canSum(targetSum, nums):
  if targetSum == 0:
    return True
  if targetSum < 0:
    return False
  
  for num in nums:
    res = targetSum - num
    if canSum(res, nums):
      return True
  
  return False

def canSumTwo(target, nums):
  smallest = min(nums)
  if target < smallest:
    return False
  return True
    
    
print(canSum(10, [2,3,4,5]))