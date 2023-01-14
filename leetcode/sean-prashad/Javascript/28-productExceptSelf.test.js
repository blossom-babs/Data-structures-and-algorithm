//https://leetcode.com/problems/product-of-array-except-self/

// brute force
const productExceptSelfB = (nums) => {
  const N = nums.length
  let prod = new Array(N)

  for (let i = 0; i < N; i++) {
    let prodExclCurr = 1

    for (let j = 0; j < N; j++) {
      if (i == j) continue

      prodExclCurr *= nums[j]
    }
    prod[i] = prodExclCurr
  }

  return prod
};

describe('#Product of Array Except Self', () => {
  describe('it returns the product of elements in the array except its self', () => {

    test('brute force', () => {
      expect(productExceptSelfB([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6])
      // expect(productExceptSelfB([-1, 1, 0, -3, 3])).toStrictEqual([-0, 0, 9, -0, 0])
      expect(productExceptSelfB([5, 2, 8, 4, 5])).toStrictEqual([320, 800, 200, 400, 320])
      expect(productExceptSelfB([1, 0, 4, 3, 5])).toStrictEqual([0, 60, 0, 0, 0])
      expect(productExceptSelfB([1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1])
      expect(productExceptSelfB([0, 4, 0, 3])).toStrictEqual([0, 0, 0, 0])
    })


  })
})

