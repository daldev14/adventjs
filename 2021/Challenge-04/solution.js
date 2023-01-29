export default function createXmasTree (height) {
  const a = '*'
  const b = '#'
  const c = '_'
  const ancho = (height * 2) - 1
  const cambio = (ancho - 1) / 2

  let tallo = ''
  tallo = tallo.concat(c.repeat(cambio), b, c.repeat(cambio))

  let arbol = ''
  let count = 1
 	for (let i = 1; i <= height; i++) {
    const space = c.repeat(height - i)
    const hoja = a.repeat(count)
    arbol = arbol.concat(space, hoja, space, '\n')
    count += 2
  }
  console.log(arbol.concat(tallo, '\n', tallo))

  return arbol.concat(tallo, '\n', tallo)
}
