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


class Test(unittest.TestCase):
  def test_climbStairs(self):
    self.assertEqual(climbStairs(2), 2)
    self.assertEqual(climbStairs(3), 3)
    self.assertEqual(climbStairs(5), 8)


if __name__ == "__main__":
  unittest.main()