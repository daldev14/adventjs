# 📦 Las cajas en 3D
Santa está experimentando con nuevos diseños de regalos y `necesita tu ayuda para visualizarlos en 3D`.

Tu tarea es escribir una función que, dado un tamaño n (entero), `genere un dibujo de un regalo en 3D utilizando caracteres ASCII`.

Las líneas de los regalos se dibujan con `#` y las caras con el símbolo que nos pasan como parámetro.

Importante: Nos han dicho que `siempre hay que dejar un salto de línea al final del dibujo`.

`Nota`: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

## 👾 Solución

### JavaScript

```js
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
```