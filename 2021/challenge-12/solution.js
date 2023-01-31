export default function getMinJump (obstacles) {
  const lastObstacle = Math.max(...obstacles)
  let minJump = 1
  for (let i = 0; i <= lastObstacle; i += minJump) {
    if (obstacles.includes(i)) {
      minJump++
      i = 0
    }
  }

  return minJump
}
