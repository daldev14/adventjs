function cyberReindeer (road, time) {
  const timeLine = [road]
  let roadToArray = road.split('')
  let prevSymbol = null

  for (let i = 1; i < time; i++) {
    const santasPosition = roadToArray.indexOf('S')
    let nextSymbol = roadToArray[santasPosition + 1]

    if (i === 5) {
      roadToArray = roadToArray.map((item) => {
        if (item === '|') return '*'
        return item
      })

      nextSymbol = roadToArray[santasPosition + 1]
    }

    if (nextSymbol !== '|') {
      roadToArray[santasPosition + 1] = 'S'
      roadToArray[santasPosition] = prevSymbol ?? '.'
    }

    if (nextSymbol === '*') prevSymbol = nextSymbol
    else prevSymbol = null

    timeLine.push(roadToArray.join(''))
  }

  return timeLine
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
