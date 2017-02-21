import {isPrime, fib} from '../../js/utilities'
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
  let table, id=0, title, solver

  beforeAll(() => {
    table = document.createElement('TABLE')
    table.setAttribute('id', 'problems_table')
    document.body.appendChild(table)
  })
  // beforeEach((done) => {
  //   done()
  // })
  beforeAll(() => {
    id += 1
    title = `problem ${id}`
    solver = function () {
      return 1
    }
  })

  it('should add a line to the table and data must match', () => {
    let count = table.rows.length
    addSolution(id, title, solver) // adding line

    expect(table.rows.length).toEqual(count + 1)
    expect(Number($(`#column_id${id}`).text())).toEqual(id)
    expect($(`#title_column_id${id}`).text()).toEqual(title)
  })
  // let button
  // it('flow of button should work, from initial "show" to "running" to "hide" and then swap between "show" and "hide"', (done) => {
  //   button = document.getElementById(`button_solution${id}`)
  //   expect(button.innerHTML).toEqual('Show')
  //   button.click()
  //   console.log(button.innerHTML)
  //   expect(button.innerHTML).toEqual('Running')
  //   console.log(button.innerHTML)
  //   //done()
  //   console.log(button.innerHTML)
  //   // process.nextTick(done) // ends execution of solver() inside addSolution()
  //   expect(button.innerHTML).toEqual('Hide')
  //   button.click()
  //   expect(button.innerHTML).toEqual('Show')
  //   button.click()
  //   expect(button.innerHTML).toEqual('Hide')
  //   button.click()
  //   expect(button.innerHTML).toEqual('Show')
  //   // done()
  // })


  describe('Status of button', () => {
    let button

    beforeAll(() => {
      button = document.getElementById(`button_solution${id}`)
    })

    it('Initially button should be Show', () => {
      expect(button.innerHTML).toEqual('Show')
    })

    it('When click on Show for the first time, should be Running', function (done) {
      button.click()
      expect(button.innerHTML).toEqual('Running')
      //process.nextTick(done) // ends execution of solver() inside addSolution()
    })

    it('When running ends, should be Hide', () => {
      expect(button.innerHTML).toEqual('Hide')
    })

    it('When button is clicked again, should change status, from hide to show for now', () => {
      button.click()
      expect(button.innerHTML).toEqual('Show')
    })

    it('and from now on, should change status from hide to show or from show to hide', () => {
      button.click()
      expect(button.innerHTML).toEqual('Hide')
    })

    it('and from now on, should change status from hide to show or from show to hide', () => {
      button.click()
      expect(button.innerHTML).toEqual('Show')
    })

  })

  it('Answer must match', () => {
    expect(Number($(`#solution${id}`).text())).toEqual(solver()) // answer is always equals, will pass all tests
  })
})
