export default function shouldBuyFidelity (times) {
  const ticket = 12 * times
  let tarjeta = 250

  for (let i = 1; i <= times; i++) tarjeta += 12 * 0.75 ** i
  if (ticket < tarjeta) return false

  return true
}
