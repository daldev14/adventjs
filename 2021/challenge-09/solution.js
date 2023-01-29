export default function groupBy (collection, it) {
  const res = {}
  const evaluate = typeof (it) === 'function' ? it : (item) => item[it]
  const values = collection.map(evaluate)

  values.forEach((el, index) => {
    if (!res[el]) res[el] = []
    res[el].push(collection[index])
  })

  return res
}
