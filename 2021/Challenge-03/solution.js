const isInvalid = ['{', '}', '[', ']', '()']

export default function isValid(letter) {
  const open = letter.indexOf('(')
  const close = letter.indexOf(')')

  if (close < open) return false

  for (let value of isInvalid) {
    if (letter.includes(value)) return false
  }

  return true
}