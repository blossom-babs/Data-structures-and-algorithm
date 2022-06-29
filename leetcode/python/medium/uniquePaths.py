import unittest

'''
https://leetcode.com/problems/unique-paths/
0(m * n) - tc | 0(m + n) - sc
'''

def uniquePaths(m: int, n: int) -> int:
    def memoPath(m, n, memo={}):
        key = (m, n)
        if key in memo:
          return memo[key]
        if m == 1 and n == 1:
            return 1
        if m == 0 or n == 0:
            return 0

        memo[key] = (memoPath(m - 1, n) + memoPath(m, n - 1))
        return memo[key]
       
    return memoPath(m, n)


class Test(unittest.TestCase):
  def test_uniquePaths(self):
    self.assertEqual(uniquePaths(3,7), 28)
    self.assertEqual(uniquePaths(2,3), 3)
    self.assertEqual(uniquePaths(3, 3), 6)
    self.assertEqual(uniquePaths(18, 18), 2333606220 )
    
if __name__ == "__main__":
  unittest.main()

