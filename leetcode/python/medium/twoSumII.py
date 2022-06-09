from typing import List
import unittest

def TwoSumII(nums, target) -> List[int]:
  i, j = 0, len(nums) - 1

  while i < j:
    sum = nums[i] + nums[j]

    if sum == target:
      return [i + 1, j + 1]
    elif sum < target:
      i += 1
    else:
      j -= 1


class Test(unittest.TestCase):
  def test_TwoSumII(self):
    self.assertEqual(TwoSumII([2,3,5,7,11], 9), [1, 4])
    self.assertEqual(TwoSumII([0, -1], -1), [1, 2])


if __name__ == "__main__":
  unittest.main()