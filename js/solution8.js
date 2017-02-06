import {changeButtonStatus} from './utilities'
import {solveProblem8} from './solvers/solverSolution8'
import {addSolution} from './problemTemplate'

$(document).ready(() => {
  let ans = 0

  addSolution(8, 'Largest product in a series')

  let text_solution8 = document.getElementById('solution8')
  let button_solution8 = document.getElementById('button_solution8')

  let solve8 = () => {
    if (!ans) { // if not calculated yet
      changeButtonStatus(button_solution8, text_solution8, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        ans = solveProblem8()
        changeButtonStatus(button_solution8, text_solution8, ans, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution8, text_solution8, ans, button_solution8.innerHTML)
  }
  button_solution8.addEventListener('click', solve8)
})
