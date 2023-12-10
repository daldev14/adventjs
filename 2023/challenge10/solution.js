function createChristmasTree (ornaments, height) {
  let tree = ''
  let position = 0

  for (let i = 0; i < height; i++) {
    let line = ''

    for (let j = 0; j <= i; j++) {
      line += i > j ? ornaments[position] + ' ' : ornaments[position]
      position++
      if (position === ornaments.length) position = 0
    }

    if (i <= height - 2) line = ' '.repeat(height - 1 - i) + line

    tree += line + '\n'
  }

  return tree + ' '.repeat(height - 1) + '|' + '\n'
}

createChristmasTree('x', 3)

/*
"  x
 x x
x x x
  |
"
*/

createChristmasTree('xo', 4)
/*
"   x
  o x
 o x o
x o x o
   |
"
*/
