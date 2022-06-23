//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Test: npm test ./leetcode/medium/maxProfitII.test.js
//0(n) - time | 0(1) - space

describe('#max profit', () => {
  it('returns the max profit from buying and selling stocks', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(7)
    expect(maxProfit([1,2,3,4,5])).toBe(4)
    expect(maxProfit([7,6,4,3,1])).toBe(0)
    expect(maxProfit([])).toBe(0)
    expect(maxProfit([0, -1, 4, 5])).toBe(6)
  })
})

const maxProfit = nums => {
  let profit = 0

  for(let i = 0; i < nums.length; i++){
    if(nums[i + 1] > nums[i]){
      profit += (nums[i + 1] - nums[i])
    }
  }

  return profit
}