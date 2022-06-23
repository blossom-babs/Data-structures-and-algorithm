// https://leetcode.com/problems/sort-array-by-parity/
// Test: npm test ./leetcode/easy/sortArrayByParity.test.js
// 0(n) - time | 0(1) -space

describe('sort array by parity', () => {
  it('odds number comes after even numbers', () => {
    expect(sortArrayByParity([1, 0, 3])).toStrictEqual([0, 1, 3])
    expect(sortArrayByParity([0, 1, 2])).toStrictEqual([0, 2, 1])
    expect(sortArrayByParity([1, 3, 2, 4])).toStrictEqual([4, 2, 3, 1])
  })
})

// l = left pointer, r = right poiter
const sortArrayByParity = function (nums) {
  let l = 0
  let r = nums.length - 1


  while (l < r) {
    if (isEven(nums[l]) && isEven(nums[r])) {
      l++
    }

    else if (!isEven(nums[l]) && !isEven(nums[r])) {
      r--
    }

    else if (!isEven(nums[l]) && isEven(nums[r])) {
      swap(nums, l, r)
      l++
      r--
    }

    else {
      l++
      r--
    }

  }

  return nums
};

const isEven = num => {
  return num % 2 === 0
}

var swap = (arr, s1, s2) => {
  [arr[s1], arr[s2]] = [arr[s2], arr[s1]];
}
