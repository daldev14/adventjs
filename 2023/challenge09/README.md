# 🚦 Alterna las luces

Están encendiendo las `luces de Navidad` 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, `siempre deben estar alternadas`. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el `número mínimo` de luces que hay que cambiar para que estén los colores alternos.

## 👾 Solución

### JavaScript

```js
function adjustLights (lights) {
  const lightChange = {
    '🟢': '🔴',
    '🔴': '🟢'
  }

  return lights.reduceRight((acc, value, index) => {
    if (value === lights[index - 1]) {
      acc++
      lights[index - 1] = lightChange[value]
    }

    return acc
  }, 0)
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)
```