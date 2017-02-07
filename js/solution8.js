import {changeButtonStatus} from './utilities'
import {solveProblem8} from './solvers/solverSolution8'
import {addSolution} from './problemTemplate'

$(document).ready(() => {
  let ans = 0

  let items = addSolution(8, 'Largest product in a series')
  let text_solution = items['text_solution']
  let button_solution = items['button_solution']

  let solve8 = () => {
    if (!ans) { // if not calculated yet
      changeButtonStatus(button_solution, text_solution, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        ans = solveProblem8()
        changeButtonStatus(button_solution, text_solution, ans, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution, text_solution, ans, button_solution.innerHTML)
  }
  button_solution.addEventListener('click', solve8)
})
