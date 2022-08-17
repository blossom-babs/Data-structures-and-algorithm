from typing import List
import unittest

'''
https://leetcode.com/problems/range-sum-query-immutable/
0(n) - tc | 0(n) - sc
'''

# prefix sum
class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = [0]
        for num in nums:
            self.nums.append(self.nums[-1] + num)
            
    
    def sumRange(self, left: int, right: int) -> int:
        return self.nums[right + 1] - self.nums[left]
        
#  Brute force
class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        

    def sumRange(self, left: int, right: int) -> int:
        return sum(self.nums[left: right + 1])
        


class Test(unittest.TestCase):
    def test_NumArray(self):
        NumArray.__init__(self, [-2, 0, 3, -5, 2, -1])
        param = NumArray.sumRange(self, 0, 2)
        param2 = NumArray.sumRange(self, 2, 5)
        param3 = NumArray.sumRange(self, 0, 5)
        self.assertEqual(param, 1)
        self.assertEqual(param2, -1)
        self.assertEqual(param3, -3)


if __name__ == "__main__":
    unittest.main()

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
