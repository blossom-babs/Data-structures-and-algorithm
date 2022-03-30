/* 
https://leetcode.com/problems/sign-of-the-product-of-an-array/ 

Complexity analysis
0(n) - time
0(1) - space
*/

const signFunc = (x) => {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
};

const arraySign = (nums) => {
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }

  return signFunc(product);
};

describe("sign of the product of an array", () => {
  it("returns 0 if product is 0", () => {
    expect(arraySign([1, 5, 0, 2, -3])).toBe(0);
  });

  it("returns 1 if product is +ve", () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
  });

  it("returns -1 if product is -ve", () => {
    expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1);
  });
});

/*
const arraySign = (nums) => {
  let sign = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    } else if (nums[i] < 0) {
      sign = -sign;
    }
  }

  return sign;
};
*/
