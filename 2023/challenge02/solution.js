function manufacture (gifts, materials) {
  return gifts.filter((gift) => {
    for (const character of gift) {
      const isFabricacle = materials.includes(character)
      if (!isFabricacle) return
    }

    return gift
  })
}

let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

manufacture(gifts, materials) // []
