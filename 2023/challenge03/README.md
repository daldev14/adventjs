# 😏 El elfo travieso

En el taller de Santa, `un elfo travieso` ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es `escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación`. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

## 👾 Solución

### JavaScript

```js
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
```