/* https://leetcode.com/problems/sign-of-the-product-of-an-array/ */

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
