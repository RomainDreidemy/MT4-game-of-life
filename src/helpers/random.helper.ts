export const getRandomInt = (max: number, randomizer: number = Math.random()): number => {
  return Math.floor(randomizer * max)
}
