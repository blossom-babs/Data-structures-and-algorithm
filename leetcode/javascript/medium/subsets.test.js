//https://leetcode.com/problems/subsets/
//Test: npm test ./leetcode/medium/subsets.test.js
//0(n * 2^n) - time | 0(n) - space

describe('#subsets', () => {
  it('returns the subsets of a given array', () => {
    expect(subsets([1, 2, 3])).toStrictEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []])
    expect(subsets([0])).toStrictEqual([[0], []])
  })
})

const subsets = nums => {
  let res = []
  let subsets = []

  const dfs = i => {
    if (i >= nums.length) {
      res.push([...subsets])
      return
    }

    subsets.push(nums[i])
    dfs(i + 1)

    subsets.pop()
    dfs(i + 1)
  }
  dfs(0)
  return res
}