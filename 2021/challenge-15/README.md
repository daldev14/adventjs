# 🦘 El salto perfecto

¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que **los números suben y bajan de forma correcta.** También nos avisa que sólo pasaremos **arrays de, como mínimo, tres posiciones.**

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

```js
checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
checkSledJump([1, 2, 3]); // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
```

**Lo importante:** recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

## 👾 Solución

### JavaScript

```js
function compair(arr) {
  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr.slice(i + 1);
    if (arr2.includes(arr[i])) return true;
  }
}

export default function checkSledJump(heights) {
  if (heights.length < 3) return false;

  const maxHeight = Math.max(...heights);
  if (heights.indexOf(maxHeight) === heights.length - 1) return false;

  const right = heights
    .slice(0, heights.indexOf(maxHeight))
    .sort((a, b) => a - b);
  const left = heights
    .slice(heights.indexOf(maxHeight) + 1)
    .sort((a, b) => a - b);

  if (right.includes(maxHeight)) return false;
  if (left.includes(maxHeight)) return false;

  if (compair(right)) return false;
  if (compair(left)) return false;

  return true;
}
```
