# 🔓 Descifrando los números...

Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

```
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
```

Lara, además, ha notado una cosa. **Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱**

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un `NaN`:

```js
decodeNumbers("..."); // 3
decodeNumbers(".,"); // 4 (5 - 1)
decodeNumbers(",."); // 6 (5 + 1)
decodeNumbers(",..."); // 8 (5 + 3)
decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers(".;"); // 49 (50 - 1)
decodeNumbers("..,"); // 5 (-1 + 1 + 5)
decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumbers(".;!"); // 49 (-1 -50 + 100)
decodeNumbers("!!!"); // 300
decodeNumbers(";!"); // 50
decodeNumbers(";.W"); // NaN
```

## 👾 Solución

### JavaScript

```js
export default function decodeNumbers(symbols) {
  const symbolsKeys = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  const KEYS = Object.keys(symbolsKeys);
  const symbolsToArray = Array.from(symbols);
  const simbolsToNumber = symbolsToArray.map((symbol) => symbolsKeys[symbol]);
  let symbolsDecrypt = 0;

  if (symbolsToArray.some((symbol) => !KEYS.includes(symbol))) return NaN;

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
    if (simbolsToNumber[i] < simbolsToNumber[i + 1])
      symbolsDecrypt -= simbolsToNumber[i];
    else symbolsDecrypt += simbolsToNumber[i];
  }

  return symbolsDecrypt;
}
```
