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

print(fib(4))
print(fib(6))
print(fib(50))