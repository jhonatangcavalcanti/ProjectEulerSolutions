import {changeButtonStatus} from './utilities'

let sum = 0

$(document).ready(function () {
  let solution1 = document.getElementById('solution1')
  let button = document.getElementById('button_solution1')

  let solve1 = () => {
    if (!sum) { // if not calculted yet
      for (let i = 3 ; i < 1000 ; i++) {
        if (!(i%3 || i%5)) {
          sum += i
        }
      }
      solution1.innerHTML = sum
    }

    changeButtonStatus(button, solution1, sum, button.innerHTML)
  }

  button.addEventListener('click', solve1)
})
