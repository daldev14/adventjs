export default function countDecorations (bigTree) {
  let numbersOfDecorations = 0

  const fn = (arg) => {
    if (typeof arg === 'number') numbersOfDecorations += arg

    if (typeof arg === 'object' && arg !== null) {
      Object.values(arg).forEach((single) => fn(single))
    }

    return numbersOfDecorations
  }

  return fn(bigTree)
}
