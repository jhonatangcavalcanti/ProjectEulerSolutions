import {changeButtonStatus} from './utilities'
import {solveProblem14} from './solvers/solverSolution14'
import {addSolution} from './problemTemplate'

$(document).ready(() => {
  let ans = 0

  let items = addSolution('14', 'Longest Collatz sequence')
  let text_solution = items['text_solution']
  let button_solution = items['button_solution']

  let solve14 = () => {
    if (!ans) {
      changeButtonStatus(button_solution, text_solution, '', 'Running')
      process.nextTick(() => {
        ans = solveProblem14()
        changeButtonStatus(button_solution, text_solution, ans, 'Show')
      })
    }
    changeButtonStatus(button_solution, text_solution, ans, button_solution.innerHTML)
  }
  button_solution.addEventListener('click', solve14)
})
