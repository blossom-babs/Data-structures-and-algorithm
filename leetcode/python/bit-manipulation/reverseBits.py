'''
https://leetcode.com/problems/reverse-bits/
0(1) - tc & sc
'''

class Solution:
    def reverseBits(self, n: int) -> int:
        pos = 31
        rvd = 0
        
        while pos >= 0 and n:
            if n & 1:
                rvd = rvd | (1 << pos)
            n >>= 1
            pos -= 1
        return rvd
        
        