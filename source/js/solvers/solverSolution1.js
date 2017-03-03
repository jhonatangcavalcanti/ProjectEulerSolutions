let solveProblem1 = () => {
  let sum = 0
  for (let i = 3 ; i < 1000 ; i++) {
    if (!(i%3 || i%5)) {
      sum += i
    }
  }
  return sum
}

export default function work (self) {
  self.addEventListener('message', () => {
    let workerResult = solveProblem1()
    self.postMessage(workerResult)
  })
}
