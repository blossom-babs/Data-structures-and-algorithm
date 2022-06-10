import unittest

'''
https://leetcode.com/problems/longest-substring-without-repeating-characters/
0(n) - TC | 0(n) - SC
'''

def lengthOfLongestSubstring(s:str) -> int:
  l, res, charSet = 0, 0, set()

  for r in range(len(s)):
    while s[r] in charSet:
      charSet.remove(s[l])
      l += 1
    charSet.add(s[r])
    res = max(res, r - l + 1)

  return res

#solution 2

def lengthOfLongestSubstring(s):   
    res, count, hash = 0, 0, set()
        
    for i in range(len(s)):
        while s[i] in hash:
            hash.pop()
            count -= 1
                
        hash.add(s[i])
        count += 1
        res = max(count, res)
            
    return res

class Test(unittest.TestCase):
  def test_solution(self):
    self.assertEqual(lengthOfLongestSubstring(""), 0)
    self.assertEqual(lengthOfLongestSubstring(" "), 1)
    self.assertEqual(lengthOfLongestSubstring("dvdf"), 3)

if __name__ == "__main__":
  unittest.main()