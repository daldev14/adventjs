export default function missingReindeer (ids) {
  const maxNumber = Math.max(...ids)
  for (let i = 0; i <= maxNumber; i++) {
    if (!ids.includes(i)) return i
  }
  return maxNumber + 1
}
