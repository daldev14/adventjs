export default function wrapGifts (gifts) {
  if (gifts.length === 0) return []
  const a = '*'

  const res = gifts.map(item => a + item + a)

  res.unshift(a.repeat(gifts[0].length + 2))
  res.push(a.repeat(gifts[0].length + 2))

  return res
}
