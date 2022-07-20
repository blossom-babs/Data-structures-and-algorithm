from typing import List
import unittest

'''
https://leetcode.com/problems/counting-bits/
0(n log n) - tc | 0(n) - sc
'''

class Solution:
    def countBitsDp(self, n:int) -> List[int]:
        dp = [0] * (n + 1)
        offset = 1
        
        for i in range(1, n + 1):
            if offset * 2 == i:
                offset = i
            dp[i] = 1 + dp[i - offset]
        return dp
    
    def countBits(self, n: int) -> List[int]:
        ans = []
        
        for i in range(n + 1):
            convertToBin = bin(i)
            ans.append(convertToBin.count('1'))
        return ans
        
class Test(unittest.TestCase):
    def test_countBits(self):
        self.assertEqual(Solution.countBits(self, 2), [0,1,1])
        self.assertEqual(Solution.countBits(self, 5), [0,1,1,2,1,2])
        
    def test_countBitsDP(self):
        self.assertEqual(Solution.countBits(self, 1), [0,1])
        self.assertEqual(Solution.countBits(self, 0), [0])
        
        
if __name__ == "__main__":
    unittest.main()