import unittest

'''
Fibonacci

Write a function `fib(n)` that takes in a number as an argument. The function should
return the n-th number of the Fibonacci sequence

The 1st and 2nd number of the fibonacci sequence is 1. To generate the next number,
sum the previous two 
'''
#tc = 0(2^n) | sc = 0(n)

def fib(n, memo = {}):
  if n in memo:
    return memo[n]
  if n <= 2:
    return 1
  memo[n] = fib(n - 1) + fib(n -1)
  return memo[n]

class Test(unittest.TestCase):
  def test_fib(self):
    self.assertEqual(fib(9), 128)
    self.assertEqual(fib(50), 281474976710656)
    self.assertEqual(fib(2), 1)
    
if __name__ == "__main__":
  unittest.main()