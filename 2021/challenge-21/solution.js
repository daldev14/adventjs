export default function canCarry (capacity, trip) {
  let aux = 0
  let res = true
  const max = Math.max(...trip.flatMap((el) => [el[1], el[2]])) + 1

  for (let i = 0; i < max; i++) {
    trip.forEach((el) => {
      const cantidad = el[0]
      const tomar = el[1]
      const entrega = el[2]

      if (cantidad > capacity) return (res = false)
      if (tomar === i) aux += cantidad
      if (entrega === i) aux -= cantidad
      if (aux > capacity) return (res = false)
    })

    if (!res) return res
  }

  return res
}
