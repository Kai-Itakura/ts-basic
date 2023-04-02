export default function genericAdvanceSample() {
  /* map関数のシグネチャ */
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStingsToNumber: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStingsToNumber(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advance sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log('Generics advance sample 2:', strings)
}
