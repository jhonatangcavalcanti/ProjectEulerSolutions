import {isPrime} from '../utilities'

export let solveProblem10 = () => {
  let sum = 0
  for (let i = 2 ; i < 2000000 ; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}

// onmessage = function() {
self.addEventListener('message', () => {
  let workerResult = solveProblem10()
  postMessage(workerResult)
})
