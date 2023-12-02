# 🏭 Ponemos en marcha la fábrica

En el taller de Santa, los elfos tienen una `lista de regalos` que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una `lista de los regalos que se pueden fabricar.`

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

## 👾 Solución

### JavaScript

```js
function manufacture (gifts, materials) {
  return gifts.filter((gift) => {
    for (const character of gift) {
      const isFabricacle = materials.includes(character)
      if (!isFabricacle) return
    }

    return gift
  })
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
```