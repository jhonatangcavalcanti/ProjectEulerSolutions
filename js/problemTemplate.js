import _ from 'underscore'
import {changeButtonStatus} from './utilities'

let template = _.template(
  `<tr class="tr_problem" id=<%= id %> >
    <td class="id_column" id="column_id<%= id %>"> <%= id %> </td>
    <td class="title_column" id="title_column_id<%= id %>"><a class="link link--problem" href="https://projecteuler.net/problem=<%= id %>" target="_blank"><%= title %></a></td>
    <td class="button_column"><button id="button_solution<%= id %>" class="button">Show</button></td>
    <td class="answer_column"><span id="solution<%= id %>" class="result"></span></td>
  </tr>`)

$( () => { // $(document).ready()
  let table = document.createElement('TABLE')

  table.setAttribute('class', 'table')
  table.setAttribute('id', 'problems_table')
  table.innerHTML +=
   `<caption class="table_title">Solutions of <a class="link link--black" href="https://projecteuler.net">projecteuler.net</a> problems:</caption>
    <tr class="tr">
      <th class="th">ID</th>
      <th class="th">Title</th>
      <th class="th">Answer</th>
      <th class="th">Value</th>
    </tr>`

  document.body.appendChild(table)

})

export let addSolution = (id, title) => {
  $('#problems_table').append(template( { id, title } )) // add new row to the table

  let ans = 0
  let text_solution = document.getElementById(`solution${id}`)
  let button_solution = document.getElementById(`button_solution${id}`)

  let myWorker = require(`worker-loader!./solvers/solverSolution${id}`)()

  myWorker.addEventListener('message', function (e) {
    ans = e.data
    changeButtonStatus(button_solution, text_solution, 'Show', ans) // change status to Hide when running ends
  })

  button_solution.addEventListener('click', () => {
    if (!ans && button_solution.innerHTML != 'Running') { // if not calculated yet and is not being calculated
      changeButtonStatus(button_solution, text_solution, 'Running') // change status initialy to running
      myWorker.postMessage({})
    }
    changeButtonStatus(button_solution, text_solution, button_solution.innerHTML, ans) // works only when running ends
  })
}
