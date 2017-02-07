import {changeButtonStatus} from './utilities'
import {solveProblem1} from './solvers/solverSolution1'
import {addSolution} from './problemTemplate'

$(document).ready(() => {
  let ans = 0

  let items = addSolution('1', 'Multiples of 3 and 5') // add the row of solution to the page
  let text_solution = items['text_solution']
  let button_solution = items['button_solution']

  let solve1 = () => {
    if (!ans) { // if not calculated yet
      changeButtonStatus(button_solution, text_solution, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        ans = solveProblem1()
        changeButtonStatus(button_solution, text_solution, ans, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution, text_solution, ans, button_solution.innerHTML) // works only when nextTick ends
  }
  button_solution.addEventListener('click', solve1)
})
