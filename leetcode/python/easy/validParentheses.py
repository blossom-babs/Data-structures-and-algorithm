import unittest

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        
        for item in s:
            lastItem = stack and stack[-1]
            if lastItem == "(" and item == ")":
                stack.pop()
            elif lastItem == "[" and item == "]":
                stack.pop()
            elif lastItem == "{" and item == "}":
                stack.pop()
            else:
                stack.append(item)
        return len(stack) == 0

class Test(unittest.TestCase):
  def test_isValid(self):
    self.assertEqual(Solution.isValid(self, '([])'), True)
    self.assertEqual(Solution.isValid(self, '([)]'), False)
    self.assertEqual(Solution.isValid(self, '()[]{}'), True)
    
if __name__ == "__main__":
  unittest.main()
    
