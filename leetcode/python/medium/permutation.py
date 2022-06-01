from typing import List
import unittest

def permute(nums:List[int]) -> List[List[int]]:
  res = []

  if (len(nums)) == 1:
    return [nums[:]]
  
  for i in range (len(nums)):
    n = nums.pop(0)
    perms = permute(nums)

    for perm in perms:
      perm.append(n)
    
    res.extend(perms)
    nums.append(n)

  return res

class TestPermutation(unittest.TestCase):
  def test_permute(self):
    one = permute([1,2,3])
    two = permute([1])
    three = permute([0, 1])

    self.assertEqual(one, [[3, 2, 1], [2, 3, 1], [1, 3, 2], [3, 1, 2], [2, 1, 3], [1, 2, 3]])
    self.assertEqual(two, [[1]])
    self.assertEqual(three, [[1, 0], [0, 1]])

if __name__ == "__main__":
  unittest.main()