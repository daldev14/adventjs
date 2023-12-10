function organizeGifts (gifts) {
  const regex = /(\d+[a-zA-Z])/g
  const allGifts = gifts.match(regex)

  const organizedGifts = allGifts.reduce((acc, value) => {
    const char = value.at(value.length - 1)
    let quantity = +value.slice(0, value.length - 1)
    let box = 0
    let pallet = 0
    let bag = 0

    while (quantity > 0) {
      if (quantity >= 10) {
        quantity -= 10
        box++
      }

      if (box === 5) {
        pallet++
        box = 0
      }

      if (quantity < 10) {
        bag = quantity
        quantity = 0
      }
    }

    let str = `[${char}]`.repeat(pallet) + `{${char}}`.repeat(box)

    str += bag !== 0 ? `(${char.repeat(bag)})` : ''

    return (acc += str)
  }, '')

  return organizedGifts
}

organizeGifts('76a11b') // [a]{a}{a}(aaaaaa){b}(b)
organizeGifts('20a') // {a}{a}
organizeGifts('70b120a4c') // [b]{b}{b}[a][a]{a}{a}(cccc)
organizeGifts('9c') // (ccccccccc)
organizeGifts('19d51e') // {d}(ddddddddd)[e](e)
