import {changeButtonStatus} from './utilities'
import {solution10} from './solverSolution10'

let sum = 0

$(document).ready(function () {
  let button_solution10 = document.getElementById('button_solution10')
  let text_solution10 = document.getElementById('solution10')

  let solve10 = () => {
    if (!sum) { // if not calculated yet
      changeButtonStatus(button_solution10, text_solution10, '', 'Running') // change status initialy to running
      process.nextTick(() => {
        sum = solution10()
        changeButtonStatus(button_solution10, text_solution10, sum, 'Show') // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution10, text_solution10, sum, button_solution10.innerHTML)
  }
  button_solution10.addEventListener('click', solve10)
})
//
// });
