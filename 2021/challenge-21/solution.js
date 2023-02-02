export default function canCarry (capacity, trip) {
  let aux = 0
  let result = true
  const max = Math.max(...trip.flatMap((el) => [el[1], el[2]])) + 1

  for (let i = 0; i < max; i++) {
    trip.forEach((el) => {
      const amount = el[0]
      const start = el[1]
      const end = el[2]

      if (amount > capacity) return (result = false)
      if (start === i) aux += amount
      if (end === i) aux -= amount
      if (aux > capacity) return (result = false)
    })

    if (!result) return result
  }

  return result
}
