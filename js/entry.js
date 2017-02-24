require('./../scss/style.scss')

import {addSolution} from './problemTemplate'
// import Worker from 'worker-loader!./solvers/solverSolution10'
// let test = require('worker-loader!./solvers/solverSolution1')()

import work from 'webworkify-webpack'

let solveds = [
  {id:1, title:'Multiples of 3 and 5', worker: work(require.resolve('./solvers/solverSolution1'))},
  {id:8, title:'Largest product in a series', worker: work(require.resolve('./solvers/solverSolution8'))},
  {id:10, title:'Summation of primes', worker: work(require.resolve('./solvers/solverSolution10'))},
  {id:14, title:'Longest Collatz sequence', worker: work(require.resolve('./solvers/solverSolution14'))},
]

let fn = function () {
  for (let sol of solveds) {
    addSolution(sol['id'], sol['title'], sol['worker'])
  }
}

if (document.readyState != 'loading') { // should verify alternative solution
  fn()
} else {
  document.addEventListener('DOMContentLoaded', fn)
}

// $(document).ready(() => {
//
// })
