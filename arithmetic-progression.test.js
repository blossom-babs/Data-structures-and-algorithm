/*
https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

complexity analysis 
0(1) space
0(n) time
*/

const arithmeticProgression = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let diff = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) {
      return false;
    }
  }
  return true;
};

describe("can array make an arithmetic progression", () => {
  it("returns true", () => {
    expect(arithmeticProgression([5, 3, 1])).toBe(true);
    expect(arithmeticProgression([1, 200])).toBe(true);
    expect(arithmeticProgression([-1, -2, -3])).toBe(true);
    expect(arithmeticProgression([1, 1, 1])).toBe(true);
  });
  it("returns false", () => {
    expect(arithmeticProgression([1, 2, 4])).toBe(false);
  });
});
