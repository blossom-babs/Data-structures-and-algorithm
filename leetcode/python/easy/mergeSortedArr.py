from typing import List
import unittest

def merge(nums1:List[int], nums2:List[int], m:int, n:int) -> None:
  last = m + n - 1

  while m > 0 and n > 0:
    if nums1[m - 1] > nums2[n - 1]:
      nums1[last] = nums1[m - 1]
      m -= 1
    else:
      nums1[last] = nums2[n - 1]
      n -= 1
    last -= 1

  
  while n > 0:
    nums1[last] = nums2[n - 1]
    n -= 1
    last -= 1
  
  return nums1


class Test(unittest.TestCase):
  def test_merge(self):
    fn = merge([1, 2, 3, 0, 0, 0], [2,5,6], 3, 3)
    self.assertEqual(fn, [1, 2,2,3,5,6])


if __name__ == '__main__':
  unittest.main()