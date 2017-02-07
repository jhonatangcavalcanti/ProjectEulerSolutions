import {changeButtonStatus} from './utilities'
import {solveProblem10} from './solvers/solverSolution10'
import {addSolution} from './problemTemplate'

$(document).ready(() => {
  let ans = 0

  let items = addSolution(10, 'Summation of primes') // Add the row of solution to the page
  let text_solution = items['text_solution']
  let button_solution = items['button_solution']

  let solve10 = () => {
    if (!ans) { // if not calculated yet
      changeButtonStatus(button_solution, text_solution, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        ans = solveProblem10()
        changeButtonStatus(button_solution, text_solution, ans, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution, text_solution, ans, button_solution.innerHTML)
  }
  button_solution.addEventListener('click', solve10)
})
