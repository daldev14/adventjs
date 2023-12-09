/*
function decode(message) {
  while (message.includes("(")) {
    const firstLevel = message.indexOf("(")
    const secondLevel = message.indexOf("(", firstLevel + 1)
    const indexToSlice = secondLevel !== -1 ? secondLevel : firstLevel
    const close = message.indexOf(")", secondLevel !== -1 ? secondLevel : -1)

    const revertMessage = message
      .slice(indexToSlice + 1, close)
      .split("")
      .reverse()
      .join("")

    message =
      message.slice(0, indexToSlice) +
      revertMessage +
      message.slice(message.indexOf(")", indexToSlice) + 1)
  }

  return message
}
*/

function decode (message) {
  while (message.includes('(')) {
    const firstLevel = message.indexOf('(')
    const secondLevel = message.indexOf('(', firstLevel + 1)

    let revertMessage = ''

    if (secondLevel !== -1) {
      revertMessage = message
        .slice(secondLevel + 1, message.indexOf(')', secondLevel))
        .split('')
        .reverse()
        .join('')

      message =
        message.slice(0, secondLevel) +
        revertMessage +
        message.slice(message.indexOf(')', secondLevel) + 1)

      continue
    }

    revertMessage = message
      .slice(firstLevel + 1, message.indexOf(')'))
      .split('')
      .reverse()
      .join('')

    message =
      message.slice(0, firstLevel) +
      revertMessage +
      message.slice(message.indexOf(')', firstLevel) + 1)
  }

  return message
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
