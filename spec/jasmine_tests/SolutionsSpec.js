import {changeButtonStatus, isPrime, fib} from '../../js/utilities'
import {addSolution} from '../../js/problemTemplate'

describe('Utilities functions', () => {

  describe('isPrime function', () => {
    it('should return false if given number is even', () => {
      expect(isPrime(20)).toBe(false)
    })

    it('should return true for 2', () => {
      expect(isPrime(2)).toBe(true)
    })

    it('should return true for prime', () => {
      expect(isPrime(7)).toBe(true)
    })

    it('should return false for composite number', () => {
      expect(isPrime(2*3*5)).toBe(false)
    })
  })

  describe('fibSequence function', () => {
    it('should return 1 for first term of series', () => {
      expect(fib(1)).toEqual(1)
    })

    it('should return 1 again for the second term', () => {
      expect(fib(2)).toEqual(1)
    })

    it('should return 2 for the third term', () => {
      expect(fib(3)).toEqual(2)
    })

    it('should return 55 for 10 term of the series', () => {
      expect(fib(10)).toEqual(55)
    })

    it('should return 0 for negative numbers', () => {
      expect(fib(-1)).toEqual(0)
    })
  })

})

describe('Adding solutions', () => {
  let table, id=0, title, solver, ans

  beforeAll(() => {
    table = document.createElement('TABLE')
    table.setAttribute('id', 'problems_table')
    document.body.appendChild(table)
  })

  beforeEach(() => {
    id += 1
    title = `problem ${id}`
    solver = () => { return 0 }
    ans = solver()
    // console.log('id ', id)
  })

  it('should add a line to the table and data must match', () => {
    let count = table.rows.length
    addSolution(id, title, solver) // adding line

    expect(table.rows.length).toEqual(count + 1)
    expect(Number($(`#column_id${id}`).text())).toEqual(id)
    expect($(`#title_column_id${id}`).text()).toEqual(title)
  })

  // it('Data must match', () => {
  //   // console.log($('#solution' + id))
  //
  //   //expect(document.getElementById(id).innerHTML).toEqual(table.rows.namedItem(id).innerHTML)
  // })

  describe('Status of button', () => {
    let button, solution

    beforeAll(() => {
      button = document.getElementById(`button_solution${id}`)
      console.log(id)
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
    console.log(id)
    expect(Number($(`#solution${id}`).text())).toEqual(solver()) // answer is always equals, will pass all tests
  })
})
