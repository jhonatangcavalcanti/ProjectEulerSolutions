import {isPrime} from '../utilities'

export let solveProblem10 = () => {
  let sum = 0
  for (let i = 2 ; i < 2000000 ; i++) {
  //debugger
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}
