import {isPrime} from '../utilities'

let solveProblem10 = () => {
  let sum = 0
  for (let i = 2 ; i < 2000000 ; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}

// onmessage = function() {
export default function worker (self) {
  self.addEventListener('message', () => {
    let workerResult = solveProblem10()
    self.postMessage(workerResult)
  })
}
