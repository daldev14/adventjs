export default function daysToXmas (date) {
  const navidad = new Date('Dec 25, 2021')
  const def = navidad.setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0)
  return def / (1000 * 60 * 60 * 24)
}
