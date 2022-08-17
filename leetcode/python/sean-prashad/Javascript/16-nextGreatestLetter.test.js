/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// https://leetcode.com/problems/find-smallest-letter-greater-than-target
// Test: npm test ./sean-prashad/Javascript/16-nextGreatestLetter.test.js
// 0(log n) - time | 0(1) - space

describe('#nextGreatestLetter', () => {
  it('returns the Smallest Letter Greater Than Target', () => {
    expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c")
    expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f")
    expect(nextGreatestLetter(["c", "f", "j"], "d")).toBe("f")
    expect(nextGreatestLetter(["c", "f", "j"], "j")).toBe("c")
  })
})



 var nextGreatestLetter = function(letters, target) {
  let [left, right] = [0, letters.length - 1]
  
  if (target < letters[left] || target >= letters[right]){
      return letters[0]
  }
    
    while (left < right){
        let mid = Math.floor((left + right) / 2)
        
        if (letters[mid] > target){
            right = mid
        } else{
            left = mid + 1
        }
    }

    return letters[right]
};