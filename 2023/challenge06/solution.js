function maxDistance (movements) {
  const obj = {
    '>': 0,
    '<': 0,
    '*': 0
  }

  for (const item of movements) obj[item]++

  let total = obj['>'] > obj['<'] ? obj['>'] - obj['<'] : obj['<'] - obj['>']
  total += obj['*']

  return total
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
