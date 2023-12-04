function findNaughtyStep (original, modified) {
  for (let i = 0; i <= modified.length; i++) {
    if (modified[i] !== original[i]) {
      return original.length > modified.length ? original[i] : modified[i]
    }
  }

  return ''
}

let original = 'abcd'
let modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

original = 'stepfor'
modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

original = 'abcde'
modified = 'abcde'
findNaughtyStep(original, modified) // ''
