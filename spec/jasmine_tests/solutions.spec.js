require('./../../source/scss/style.scss')
import work from 'webworkify-webpack'
import {isPrime, fib} from './../../source/js/utilities'
import {initializePage, addSolution, changeButtonStatus} from './../../source/js/main'

describe('Utilities', () => {

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

describe('Building document', () => {
  let problem, worker

  beforeAll(() => {
    initializePage() // add table and header to the document
    // setting data to test problem
    // table = $('#problems_table tbody')
    worker = work(require.resolve('./../../spec/jasmine_tests/test_worker'))

    problem = { id:1, title:'test1', worker }
  })

  it('should add a line to the table', () => {
    let count = document.getElementById('problems_table').rows.length

    addSolution(problem['id'], problem['title'], problem['worker']) // adding line

    expect(document.getElementById('problems_table').rows.length).toEqual(count + 1)
    // expect(Number($(`#column_id${id}`).text())).toEqual(id)
    // expect($(`#title_column_id${id}`).text()).toEqual(title)
  })

  describe('Flow of button', () => {
    let button_solution, text_solution, change

    beforeAll( () => {
      text_solution = document.getElementById(`solution${problem['id']}`)
      button_solution = document.getElementById(`button_solution${problem['id']}`)
      change = changeButtonStatus.bind({button:button_solution, answer:text_solution})
    })

    it('button should be initially setted to "Show"', () => {
      expect(button_solution.innerHTML).toEqual('Show')
    })

    it('should be "Running" when clicked', (done) => {
      worker.onmessage = function(e) {
        change(e.data)
        done()
      }
      button_solution.click()
      expect(button_solution.innerHTML).toEqual('Running')
    })

    it('should be "Hide" after "Running" ends', () => {
      expect(button_solution.innerHTML).toEqual('Hide')
    })

    it('When button is clicked again, should change status, from hide to show', () => {
      button_solution.click()
      expect(button_solution.innerHTML).toEqual('Show')
    })

    it('and from now on, should change status from hide to show or from show to hide', () => {
      button_solution.click()
      expect(button_solution.innerHTML).toEqual('Hide')
    })

    it('Leave answer hidden', () => {
      button_solution.click()
      expect(button_solution.innerHTML).toEqual('Show')
    })
  })

//   it('Answer must match', () => {
//     // expect(Number($(`#solution${id}`).text())).toEqual(solver()) // answer is always equals, will pass all tests
//   })
})
