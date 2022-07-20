import unittest

'''
https://leetcode.com/problems/number-of-1-bits/
0(1) - tc | 0(1) - sc
'''

class Solution:
    def hammingWeight(self, n) -> int:
        n = int(n)
        count = 0
        while n:
            count += n % 2
            n = n // 2
        return count

    def hammingWeightTwo(self, n) -> int:
        n = int(n)
        print(n)
        count = 0
        while n:
            if n & 1:
                count += 1
            n = n >> 1
        return count


