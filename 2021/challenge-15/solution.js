function compair (arr) {
  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr.slice(i + 1)
    if (arr2.includes(arr[i])) return true
  }
}

export default function checkSledJump (heights) {
  if (heights.length < 3) return false

  const maxHeight = Math.max(...heights)
  if (heights.indexOf(maxHeight) === heights.length - 1) return false

  const right = heights.slice(0, heights.indexOf(maxHeight)).sort((a, b) => a - b)
  const left = heights.slice(heights.indexOf(maxHeight) + 1).sort((a, b) => a - b)

  if (right.includes(maxHeight)) return false
  if (left.includes(maxHeight)) return false

  if (compair(right)) return false
  if (compair(left)) return false

  return true
}
