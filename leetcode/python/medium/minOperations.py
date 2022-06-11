from typing import List
import unittest

'''
https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
0(n) - tc | 0(1) - sc
'''

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        total, n = sum(nums), len(nums)
        target = total - x
        maxLen = -1
        left, currSum = 0, 0
        
        for right, num in enumerate(nums):
            currSum += num
            
            while currSum > target and left <= right:
                currSum -= nums[left]
                left += 1
            
            if currSum == target:
                maxLen = max(maxLen, right - left + 1)
            
        return n - maxLen if maxLen != -1 else - 1

class Test(unittest.TestCase):
  def test_minOperations(self):
    self.assertEqual(Solution.minOperations(self, [1,1,4,2,3], 5), 2)
    self.assertEqual(Solution.minOperations(self, [5,6,7,8,9], 4), -1)
    self.assertEqual(Solution.minOperations(self, [3,2,20,1,1,3], 10), 5)
    self.assertEqual(Solution.minOperations(self, [6016,5483,541,4325,8149,3515,7865,2209,9623,9763,4052,6540,2123,2074,765,7520,4941,5290,5868,6150,6006,6077,2856,7826,9119],
31841), 6)
        
if __name__ == "__main__":
  unittest.main()