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

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)

adjustLights([
  '🔴',
  '🔴',
  '🟢',
  '🔴',
  '🟢',
  '🔴',
  '🟢',
  '🔴',
  '🟢',
  '🔴',
  '🟢',
  '🔴',
  '🟢',
  '🔴',
  '🟢',
  '🔴',
  '🟢'
])

/* function adjustLights(lights) {
  const redLight = "🔴"
  const greenLight = "🟢"
  lights = lights.reverse()
  let nextLight = lights[0] === redLight ? greenLight : redLight
  let counter = 0

  for (let i = 1; i < lights.length; i++) {
    if (lights[i] !== nextLight) counter++

    nextLight = nextLight === redLight ? greenLight : redLight
  }

  return counter
} */
