//https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number}
 */

// 0(n) - TC | 0(n) - SC
 const majorityElement = function(nums) {
  const map = new Map()
  let [maxCount, res] = [0, 0]
  
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i]) + 1 || 1)
        
        if(map.get(nums[i]) > maxCount){
            res = nums[i]
            maxCount = map.get(nums[i])
        } 
    }  
  
    return res
  };

  describe('#Majority Element', () => {
    describe('it returns the element that occurs more than half the length in the array', () => {
  
      it('function 1', () => {
        expect(majorityElement( [2,2,1,1,1,2,2])).toBe(2)
        expect(majorityElement( [2,1,1,1,1,2,2])).toBe(1)
        expect(majorityElement( [2,3,1,2,2,2,2])).toBe(2)
      })
  
      // it('function 2', () => {
      //   expect(backspaceCompareTwo('ab#cd#', 'ac#d#c')).toBe(true)
      //   expect(backspaceCompareTwo("ab#c", 'ad#c')).toBe(true)
      //   expect(backspaceCompareTwo("ab##", 'c#d#')).toBe(true)
      //   expect(backspaceCompareTwo('a#c', 'b')).toBe(false)
      // })
    })
  })
  