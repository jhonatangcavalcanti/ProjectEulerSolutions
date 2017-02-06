import {changeButtonStatus} from './utilities'
import {solveProblem10} from './solvers/solverSolution10'
import {addSolution} from './problemTemplate'

$(document).ready(() => {
  let ans = 0

  addSolution(10, 'Summation of primes') // Add the row of solution to the page

  let text_solution10 = document.getElementById('solution10')
  let button_solution10 = document.getElementById('button_solution10')

  let solve10 = () => {
    if (!ans) { // if not calculated yet
      changeButtonStatus(button_solution10, text_solution10, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        ans = solveProblem10()
        changeButtonStatus(button_solution10, text_solution10, ans, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution10, text_solution10, ans, button_solution10.innerHTML)
  }
  button_solution10.addEventListener('click', solve10)
})
