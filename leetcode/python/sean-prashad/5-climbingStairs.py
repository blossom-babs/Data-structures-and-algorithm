'''
https://leetcode.com/problems/climbing-stairs/
'''
import unittest


class Solution:
    #0(n) - tc | 0(n) - sc
    def climbStairs(self, n: int) -> int:
        count = [1, 2]

        for i in range(2, n):
            count.append((n - 1) + (n - 2))
        return count[n - 1]

    #0(2^n) - tc | 0(n) - sc
    def climbStairsRecurse(self, n: int) -> int:
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


class Test(unittest.TestCase):
    def test_climbingStairs(self):
        self.assertEqual(Solution.climbStairs(self, 2), 2)
        self.assertEqual(Solution.climbStairs(self, 3), 3)
        self.assertEqual(Solution.climbStairs(self, 1), 1)

    def test_climbingStairsRecurse(self):
        self.assertEqual(Solution.climbStairsRecurse(self, 2), 2)
        self.assertEqual(Solution.climbStairsRecurse(self, 3), 3)
        self.assertEqual(Solution.climbStairsRecurse(self, 1), 1)
        
if __name__ == "__main__":
  unittest.main()
