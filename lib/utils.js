export const getRandomNum = (Min, Max) => {
  const Range = Max - Min + 1
  const Rand = Math.random()
  return Min + Math.floor(Rand * Range)
}
