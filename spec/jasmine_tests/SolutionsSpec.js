import {changeButtonStatus, isPrime} from '../../js/utilities'
import {addSolution} from '../../js/problemTemplate'

describe('Utilities and template', () => {

  it('should verify if prime test is working', () => {
    let even_number = 42846
    let not_prime = 15
    let prime = 2*3*5*7*11+1

    expect(isPrime(even_number)).not.toBe(true)
    expect(isPrime(prime)).toBe(true)
    expect(isPrime(not_prime)).not.toBe(true)
  })

  describe('Add a solution line', () => {
    let table, id=0, title, solver, ans
    beforeAll(() => {
      table = document.createElement('TABLE')
      table.setAttribute('id', 'problems_table')
      document.body.appendChild(table)
    })

    beforeAll(() => {
      id += 1
      title = `problem ${id}`
      solver = () => { return 0 }
      // console.log('id ', id)
    })

    it('Line has to be added to the table', () => {
      let count = table.rows.length
      addSolution(id, title, solver)
      ans = solver()
      expect(table.rows.length).toEqual(count + 1)
    })

    it('Data must match', () => {
      // console.log($('#solution' + id))
      expect(Number($(`#column_id${id}`).text())).toEqual(id)
      expect($(`#title_column_id${id}`).text()).toEqual(title)
      //expect(document.getElementById(id).innerHTML).toEqual(table.rows.namedItem(id).innerHTML)
    })

    describe('Status of button', () => {
      let button, solution

      beforeAll(() => {
        button = document.getElementById(`button_solution${id}`)
        solution = document.getElementById(`solution${id}`)
      })

      it('Initially button should be Show', () => {
        expect(button.innerHTML).toEqual('Show')
      })

      it('When click on Show for the first time, should be Running', () => {
        changeButtonStatus(button, solution, 'Running')
        expect(button.innerHTML).toEqual('Running')
      })

      it('When running ends, should be Hide', () => {
        changeButtonStatus(button, solution, 'Show', ans) // from show change to hide
        expect(button.innerHTML).toEqual('Hide')
      })

      it('When button is clicked again, should change status, from hide to show for now', () => {
        changeButtonStatus(button, solution, button.innerHTML, ans) // no more need to send .. text
        expect(button.innerHTML).toEqual('Show')
      })

      it('and from now on, should change status from hide to show or from show to hide', () => {
        changeButtonStatus(button, solution, button.innerHTML, ans) // no more need to send .. text
        expect(button.innerHTML).toEqual('Hide')
      })

      it('and from now on, should change status from hide to show or from show to hide', () => {
        changeButtonStatus(button, solution, button.innerHTML, ans) // no more need to send .. text
        expect(button.innerHTML).toEqual('Show')
      })
    })

    it('Answer must match', () => {
      expect(Number($(`#solution${id}`).text())).toEqual(solver())
    })
  })


})
