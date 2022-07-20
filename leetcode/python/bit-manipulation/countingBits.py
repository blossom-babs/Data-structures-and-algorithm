from typing import List
import unittest

class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []
        
        for i in range(n + 1):
            convertToBin = bin(i)
            ans.append(convertToBin.count('1'))
        return ans
        
class Test(unittest.TestCase):