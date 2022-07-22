import math, unittest

class Solution:
    def reverse(self, x: int) -> int:
        MIN = -2147483648
        MAX = 2147483647
        res = 0
        
        while x:
            digit = int(math.fmod(x, 10))
            x = int(x / 10)
            
            if (res > MAX // 10 or (res == MAX // 10 and digit >= MAX % 10)):
                return 0
            
            if (res < MIN // 10 or (res == MIN // 10 and digit <= MIN % 10)):
                return 0
            
            res = (res * 10) + digit
            
        return res

class Test(unittest.TestCase):
  def test_reverse(self):
    self.assertEqual(Solution.reverse(self, -123), -321)
    self.assertEqual(Solution.reverse(self, 1534236469), 0)
    
if __name__ == "__main__":
  unittest.main()