const oddishOrEvenish = (number) => {
  let sum = 0

  while (number > 0) {
    mod = number % 10
    sum = sum + mod
    number = (number - mod) / 10
  }

  if (sum % 2 === 0) {
    return 'even'
  }

  return 'odd'
}

const randomNumber = () => {
  const upperLimit = 9999999
  const number = Math.floor(Math.random() * upperLimit)
  return number
}

if (process.argv.length > 2) {
  const userNumber = process.argv[2]
  const result = oddishOrEvenish(userNumber)
  console.log(`${userNumber} is ${result}`)
  return
}

const random = randomNumber()
const result = oddishOrEvenish(random)
console.log(`${random} is ${result}`)
