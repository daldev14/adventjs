export default function getCoins (change) {
  const changeConin = [1, 2, 5, 10, 20, 50]
  const res = Array(6).fill(0)

  function callBack (changeConin, res, change) {
    for (let i = changeConin.length - 1; i >= 0; i--) {
      if (change >= changeConin[i]) {
        res[i] += 1
        change -= changeConin[i]
        if (change === 0) return res
        return callBack(changeConin, res, change)
      }
    }
  }

  return callBack(changeConin, res, change)
}
