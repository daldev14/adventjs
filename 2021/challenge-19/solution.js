export default function learn (time, courses) {
  const list = []
  let sum = 0
  for (let i = 0; i < courses.length; i++) {
    for (let k = 0; k < courses.length; k++) {
      if (i !== k) {
        sum = courses[i] + courses[k]
        if (sum <= time) list.push([i, k, sum])
      }
    }
  }
  if (list.length === 0) return null

  let max = 0
  let res = []

  list.forEach((el) => {
    if (el[2] <= time && el[2] > max) {
      res = [el[0], el[1]]
      max = el[2]
    }
  })

  return res
}
