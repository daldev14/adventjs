function drawGift (size, symbol) {
  if (size === 1) return '#\n'

  const lineSymbol = '#'
  const firstLine = lineSymbol.repeat(size)
  const currentLine = lineSymbol + symbol.repeat(size - 2) + lineSymbol
  const middleLine = lineSymbol.repeat(size - 1) + currentLine
  const arr = [firstLine + '\n']

  for (let index = 1; index < size - 1; index++) {
    let newLine = currentLine

    if (index >= 2) {
      newLine += symbol.repeat(index - 1)
    }

    newLine += lineSymbol + '\n'

    arr.push(newLine)
  }

  let str = middleLine + '\n'
  for (let index = arr.length - 1; index >= 0; index--) {
    str = ' '.repeat(arr.length - index) + arr[index] + str + arr[index]
  }

  return str
}

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
