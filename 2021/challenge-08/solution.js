export default function maxProfit (prices) {
  const maxPrice = Math.max(...prices.slice(1))
  const index = prices.indexOf(maxPrice)
  let maxProfit = 0

  for (let i = 0; i < index; i++) {
    if (maxPrice - prices[i] > maxProfit) maxProfit = maxPrice - prices[i]
  }
  return maxProfit > 0 ? maxProfit : -1
}
