import unittest

'''
https://leetcode.com/problems/sum-of-two-integers/
0(1) - tc & sc
'''

class Solution:
    def getSum(self, a: int, b: int) -> int:
        def add(a, b):
            if not a or not b:
                return a or b
            return add(a^b, (a & b) << 1)
        if a * b < 0:
            if a > 0:
                return self.getSum(b, a)
            if add(~a, 1) == b:
                return 0
            if add(~a, 1) < b:
                return add(~add(add(~a, 1), add(~b, 1)), 1)
        return add(a, b)

class Test(unittest.TestCase):
  def test_getSum(self):
    self.assertEqual(Solution.getSum(self, 2, 3), 5)
    self.assertEqual(Solution.getSum(self, 1, 2), 3)
    
if __name__ == "__main__":
  unittest.main()