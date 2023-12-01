// 01
function findFirstRepeated(gifts) {
  return gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1
}

// 02
function findFirstRepeated (gifts) {
  const seen = {}

  for (const id of gifts) {
    if (seen[id]) return id
    seen[id] = 1
  }

  return -1
}
