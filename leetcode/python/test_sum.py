import unittest

def my_sum(nums):
 total = 0
 for n in nums:
  total += n
 return total

class TestSum(unittest.TestCase):
  def test_sum(self):
    """
    test that the sum of the list is correct
    """
    data = [1,2,3]
    result = my_sum(data)
    self.assertEqual(result, 6, "should be 6")

  def test_sum_input(self):
    """
    test that the input is truthy
    """
    data = [2,4,6]
    result = my_sum(data)
    self.assertTrue(result)

if __name__ == "__main__":
  unittest.main()