/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

Run test: npm test ./leetcode/two-pointers/bestTimeToBuyAndSellStock.test.js

0(n) - time | 0(1) - space
*/

describe('BEST TIME TO BUY AND SELL STOCK', () => {
  it('buys low, sells high and returns the maximum profit made', () => {
    expect(maxProfit([7, 1, 5, 3, 6])).toBe(5)
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2)
  })
})

const maxProfit = prices => {
  let maxProfit = 0
  let left = 0
  let right = 1

  while (right < prices.length) {
    let profit = prices[right] - prices[left]

    if (profit < 0) {
      left++
    } else {
      right++
    }

    maxProfit = Math.max(maxProfit, profit)
  }
  return maxProfit
}