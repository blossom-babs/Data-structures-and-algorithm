describe('Two sum II: 1-indexed array', () => {
  it('returns the indices of numbers that sum up to target', () =>{
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3])
    expect(twoSum([3, 3, 4, 9, 8], 12)).toStrictEqual([3, 5])
  })
})

/*
complexity analysis
*/

const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1

  while (left < right){
    let sum = numbers[left] + numbers[right]

    if(sum > target) right--
    else if (sum < target) left++
    else return [left+1, right+1]
  }
}