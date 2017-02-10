require('./../scss/style.scss')
import {addSolution} from './problemTemplate'
import {solveProblem1} from './solvers/solverSolution1'
import {solveProblem8} from './solvers/solverSolution8'
import {solveProblem10} from './solvers/solverSolution10'
import {solveProblem14} from './solvers/solverSolution14'

let solveds = [
  {id:1, title:'Multiples of 3 and 5', solver: solveProblem1},
  {id:8, title:'Largest product in a series', solver: solveProblem8},
  {id:10, title:'Summation of primes', solver: solveProblem10},
  {id:14, title:'Longest Collatz sequence', solver: solveProblem14},
]

$(document).ready(() => {
  for (let sol of solveds) {
    addSolution(sol['id'], sol['title'], sol['solver'])
  }
})
