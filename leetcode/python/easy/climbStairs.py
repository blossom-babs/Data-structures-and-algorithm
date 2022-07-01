import unittest

'''
https://leetcode.com/problems/climbing-stairs/
0(n) - TC | 0(n) - SC
'''

def climbStairs(n) -> int:
  one, two = 1, 1

  for i in range (n - 1):
    temp = one
    one = one + two
    two = temp

  return one

def climbStairsRecursive(n) -> int:
  memo = {}
  
  def recurse(n):
    if n in memo:
      return memo[n]
    if n == 1:
      return 1
    if n == 2:
      return 2
    memo[n] = recurse(n - 1) + recurse(n - 2)
    return memo[n]
  
  return recurse(n)
    
print(climbStairsRecursive(38))
class Test(unittest.TestCase):
  def test_climbStairs(self):
    self.assertEqual(climbStairsRecursive(2), 2)
    self.assertEqual(climbStairsRecursive(3), 3)
    self.assertEqual(climbStairsRecursive(5), 8)
    self.assertEqual(climbStairsRecursive(38), 63245986)


if __name__ == "__main__":
  unittest.main()