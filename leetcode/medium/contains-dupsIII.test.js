
describe('#contains duplicates III', () => {
  it('returns true if array contains duplicates, diff of duplicates(index) <= k && diff of nums <= t', () => {
    expect(containsNearbyAlmostDuplicate([3], 3, 0)).toBe(false)
    expect(containsNearbyAlmostDuplicate([], 1, 3)).toBe(false)
    expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBe(true)
    expect(containsNearbyAlmostDuplicate([1,0,1,1,1], 1, 2)).toBe(true)
    expect(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3)).toBe(false)
    expect(containsNearbyAlmostDuplicate([-1, -2, 0, 5,-2], 3, 4)).toBe(true)
  })
})

var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const buckets = new Map();
  const w = t + 1;
  
  for(let i = 0; i < nums.length; i++){
      const idx = Math.floor(nums[i] / w)
      
      if(buckets.has(idx)){
          return true
      }
      
      if(buckets.has(idx - 1) && Math.abs(nums[i] - buckets.get(idx - 1)) < w){
          return true
      }
      
      if(buckets.has(idx + 1) && Math.abs(nums[i] - buckets.get(idx + 1)) < w){
          return true
      }
      
      buckets.set(idx, nums[i])
      
      if(i >= k){
          const idxOfBucket2Remove = Math.floor(nums[i-k] / w)
          
          buckets.delete(idxOfBucket2Remove)
      }
  }
  
  return false;
};

const containsNearbyAlmostDuplicate = (nums, k, t) => {
  let map = new Map()

  for(let i=0; i<nums.length; i++){
    let num = nums[i]

    if(map.has(num)){
      let diff = Math.abs(map.get(num) - i)
      if(diff <= k && Math.abs(i - i) <= t) return true
    }

    map.set(num, i)
  }

  return false
}