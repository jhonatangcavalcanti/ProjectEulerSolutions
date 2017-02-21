let longest_chain = 0
let number_longest_chain = 0
let chain_size = []

let collatz_steps = (n) => {
  let steps = 0
  while (n > 1) {
    if (chain_size[n] != undefined) {
      steps += chain_size[n]
      break
    }    else {
      if (n%2 == 0) {
        n /= 2
      }      else {
        n = 3*n + 1
      }
      steps++
    }
  }
  return steps
}

export let solveProblem14 = () => {
  for (let i = 1 ; i < 1000000 ; i++) {
    chain_size[i] = collatz_steps(i)
    if (longest_chain < chain_size[i]) {
      longest_chain = Math.max(longest_chain, chain_size[i])
      number_longest_chain = i
    }
  }
  return number_longest_chain
}

self.addEventListener('message', () => {
  let workerResult = solveProblem14()
  postMessage(workerResult)
})
