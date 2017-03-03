import _ from 'underscore'
import templateProblem from './../html/templateProblem.html'
import templateTableProblems from './../html/templateTableProblems.html'

export let initializePage = function () {
  let templateTeste = _.template(templateTableProblems)
  $(document.body).append( templateTeste( {} ) )
}

$( () => { // $(document).ready()
  if (!document.getElementById('problems_table')) // fix duplicate table problem on testing script
    initializePage()
})

export let addSolution = (id, title, worker) => {
  let template_problem = _.template(templateProblem)

  $('#problems_table tbody').append(template_problem( { id, title } )) // add new row to the table

  let ans = 0
  let text_solution = document.getElementById(`solution${id}`)
  let button_solution = document.getElementById(`button_solution${id}`)
  // change is the function where this refers to the specific button and answer fields on the page
  let change = changeButtonStatus.bind({button:button_solution, answer:text_solution})

  worker.addEventListener('message', function (e) {
    ans = e.data
    change(ans) // sends answer to be visible
  })

  button_solution.addEventListener('click', function () {
    if (!ans && this.innerHTML != 'Running') { // if not calculated yet and is not being calculated
      worker.postMessage({}) // send message to work start to run the solver
    }
    change() // change status of button after click on it
  })
}

function changeButtonStatus(value='') {
  /**
   * @description Change status of the button when it's clicked
   * @param {Number} value The problem's answer to insert in the answer field.
   */
  if (value || this.answer.innerHTML) { // true when the worker sends the answer or when it was previous calculated
    if (value || this.button.innerHTML == 'Show') {
      this.button.className = 'button button--state-hidden'
      this.button.innerHTML = 'Hide'
      this.answer.className = 'result result--state-show'
      if (value)
        this.answer.innerHTML = value
    } else {
      this.button.className = 'button button--state-show'
      this.button.innerHTML = 'Show'
      this.answer.className = 'result result--state-hidden'
    }
  } else { // answer was not calculated yet, so solver starts to run
    this.button.className = 'button button--state-running'
    this.button.innerHTML = 'Running'
  }
}
