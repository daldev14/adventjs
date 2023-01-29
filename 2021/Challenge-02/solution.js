export default function listGifts (letter) {
  const filterGifts = letter.trim().split(' ').filter(gifts => !gifts.includes('_'))

  const countGifts = {}
  for (const gift of filterGifts) {
    countGifts[gift] ??= 0
    countGifts[gift]++
  }

  return countGifts
}
