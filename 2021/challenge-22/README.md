# 🎄 ¿Cuantos adornos necesita el árbol?

¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.

Lo mejor es que veamos un ejemplo:

```js
// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

/* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

countDecorations(tree); // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

countDecorations(bigTree); // 28
```

## 👾 Solución

### JavaScript

```js
export default function canCarry(capacity, trip) {
  let aux = 0;
  let result = true;
  const max = Math.max(...trip.flatMap((el) => [el[1], el[2]])) + 1;

  for (let i = 0; i < max; i++) {
    trip.forEach((el) => {
      const amount = el[0];
      const start = el[1];
      const end = el[2];

      if (amount > capacity) return (result = false);
      if (start === i) aux += amount;
      if (end === i) aux -= amount;
      if (aux > capacity) return (result = false);
    });

    if (!result) return result;
  }

  return result;
}
```
