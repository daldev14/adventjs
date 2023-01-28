export default function sumPairs(numbers, result) {
  for (let k = 0; k < numbers.length; k++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j !== k && (numbers[j] + numbers[k] === result)) return [numbers[k], numbers[j]]
    }
  }
  return null
}