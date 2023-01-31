export default function decodeNumbers (symbols) {
  const symbolsKeys = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  const KEYS = Object.keys(symbolsKeys)
  const symbolsToArray = Array.from(symbols)
  const simbolsToNumber = symbolsToArray.map((symbol) => symbolsKeys[symbol])
  let symbolsDecrypt = 0

  if (symbolsToArray.some((symbol) => !KEYS.includes(symbol))) return NaN

  /*
  const operation = simbolsToNumber.map((number, index, array) =>{
    if (number < array[index+1]) return -number
    return number
  })

  operation.map((number) => symbolsDecrypt+=number)
  */

  /*
  const operation = simbolsToNumber.map((number, index, array) => {
    if (number < array[index + 1]) return symbolsDecrypt -= number
    return symbolsDecrypt += number
  })
  */

  for (let i = 0; i < simbolsToNumber.length; i++) {
    if (simbolsToNumber[i] < simbolsToNumber[i + 1]) symbolsDecrypt -= simbolsToNumber[i]
    else symbolsDecrypt += simbolsToNumber[i]
  }

  return symbolsDecrypt
}
