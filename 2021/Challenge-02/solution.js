export default function listGifts(letter) {
  const filterGifts = letter.trim().split(" ").filter(gifts => !gifts.includes("_"))

  let countGifts = {}
  for (let gift of filterGifts) {
    countGifts[gift] ??= 0
    countGifts[gift]++
  }

  return countGifts
}