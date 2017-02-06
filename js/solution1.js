import {changeButtonStatus} from './utilities'
import {solveProblem1} from './solvers/solverSolution1'

$(document).ready(() => {
  let ans = 0
  let text_solution1 = document.getElementById('solution1')
  let button_solution1 = document.getElementById('button_solution1')

  let solve1 = () => {
    if (!ans) { // if not calculted yet
      changeButtonStatus(button_solution1, text_solution1, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        ans = solveProblem1()
        changeButtonStatus(button_solution1, text_solution1, ans, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution1, text_solution1, ans, button_solution1.innerHTML)
  }
  button_solution1.addEventListener('click', solve1)
})
