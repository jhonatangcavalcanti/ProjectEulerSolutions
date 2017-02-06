import _ from 'underscore'

let template = _.template(
  '<tr class="tr_problem" id=<%= id %> > ' +
    '<td class="id_column"> <%= id %> </td> ' +
    '<td class="title_column"><a class="link_problem" href="https://projecteuler.net/problem=<%= id %>" target="_blank"> <%= title %> </a></td> ' +
    '<td class="button_column"><button id="button_solution<%= id %>" class="button">Show</button></td> ' +
    '<td class="answer_column"><span id="solution<%= id %>" ></span></td> ' +
  '</tr>')

let table = document.createElement('TABLE')

$( () => { // $(document).ready()

  table.setAttribute('class', 'table')
  table.setAttribute('id', 'problems_table')
  table.innerHTML +=
    '<caption class="table_title">Solutions of <a class="link_black" href="https://projecteuler.net">projecteuler.net</a> problems:</caption>' +
    '<tr class="tr">' +
      '<th class="th">ID</th>' +
      '<th class="th">Title</th>' +
      '<th class="th">Answer</th>' +
      '<th class="th">Value</th>' +
    '</tr>'

  document.body.appendChild(table)

})

export let addSolution = (id, title) => {
  $('#problems_table').append(template( { id, title } )) // add new row to the table
  return {text_solution:document.getElementById('solution' + id), button_solution:document.getElementById('button_solution' + id)}
}
