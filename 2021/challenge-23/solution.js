export default function canReconfigure (from, to) {
  if (from.length !== to.length) return false

  const assignments = {}
  let result = true

  Array.from(from).forEach((el, index) => {
    for (const [key, value] of Object.entries(assignments)) {
      if (
        (el === key && value !== to.at(index)) ||
        (value === to.at(index) && el !== key)
      ) {
        return (result = false)
      }
    }
    assignments[el] ??= to.at(index)
  })
  return result
}
