import {changeButtonStatus} from './utilities'
import {solveProblem14} from './solvers/solverSolution14'

$(document).ready(() => {
  let ans = 0
  let text_solution14 = document.getElementById('solution14')
  let button_solution14 = document.getElementById('button_solution14')

  let solve14 = () => {
    if (!ans) {
      changeButtonStatus(button_solution14, text_solution14, '', 'Running')
      process.nextTick(() => {
        ans = solveProblem14()
        changeButtonStatus(button_solution14, text_solution14, ans, 'Show')
      })
    }
    changeButtonStatus(button_solution14, text_solution14, ans, button_solution14.innerHTML)
  }
  button_solution14.addEventListener('click', solve14)
})
