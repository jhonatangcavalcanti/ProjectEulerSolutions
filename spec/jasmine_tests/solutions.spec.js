require('./../../source/scss/style.scss')
import work from 'webworkify-webpack'
import {isPrime, fib} from './../../source/js/utilities'
import {initializePage, addSolution} from './../../source/js/main'
// import _ from 'underscore'
// import {changeButtonStatus} from '../../js/utilities'
// import work from 'webworkify-webpack'

let teste_work = work(require.resolve('./../../source/js/solvers/solverSolution1'))

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
  let problem

  beforeAll(() => {
    initializePage() // add table and header to the document
    // setting data to test problem
    // table = $('#problems_table tbody')

    // problem = { id:1, title:'test1', worker:new Worker('base/spec/jasmine_tests/test_worker.js') }
    problem = { id:1, title:'test1', worker:teste_work }
  })

//   beforeAll(() => {
//     id += 1
//     title = `problem ${id}`
//
//     // console.log(worker)
//   })
  // it('should have a table and line with headers on the page', () => {
    // expect($('#problems_table')).not.toEqual(undefined)
    // expect($('#problems_table')).toEqual()
  // })
//
  it('should add a line to the table', () => {
    let count = document.getElementById('problems_table').rows.length
    // expect(1).toEqual(1)
//     worker = new Worker('/base/')
//     console.log(worker)
//     worker.onmessage = function(result) {
//       console.log('expect')
//       expect(result.data).toEqual(1)
//       console.log('end')
//     }
//     console.log('posting')
//     worker.postMessage({})
//     console.log('end')
    // console.log('worker in spec: ', problem['worker'])
    addSolution(problem['id'], problem['title'], problem['worker']) // adding line
    expect(document.getElementById('problems_table').rows.length).toEqual(count + 1)
    // expect(Number($(`#column_id${id}`).text())).toEqual(id)
    // expect($(`#title_column_id${id}`).text()).toEqual(title)
  })
  let button
  describe('Flow of button', () => {


    beforeAll( () => {
      button = document.getElementById(`button_solution${problem['id']}`)
    })

    beforeEach((done) => {
      button.click()
      done()
    })

    it('button should be initially setted to "Show"', () => {
      expect(button.innerHTML).toEqual('Show')

      // done()
      // console.log('hi')
    //   console.log(button.innerHTML)
    //   // process.nextTick(done) // ends execution of solver() inside addSolution()

      // button.click()
      // expect(button.innerHTML).toEqual('Show')
      // done()
      // button.click()
    //   expect(button.innerHTML).toEqual('Hide')
    //   button.click()
    //   expect(button.innerHTML).toEqual('Show')
    })

    it('should be "Running" when clicked', () => {
      // button.click()
      // expect(button.innerHTML).toEqual('Running')
      // process.nextTick(done)
    })

    it('should be "Hide" after "Running" ends', () => {
      // debugger
      // expect(button.innerHTML).toEqual('Hide')
    })

    it('should finish your tests when know how to work with workers on tests')

  })


  // describe('Status of button', () => {
  //   let button
  //
  //   beforeAll(() => {
  //     // button = document.getElementById(`button_solution${id}`)
  //   })
  //
  //   it('Initially button should be Show', () => {
  //     // expect(button.innerHTML).toEqual('Show')
  //   })

    // it('When click on Show for the first time, should be Running', function (done) { // function (done)
    //   button.click()
    //   expect(button.innerHTML).toEqual('Running')
    //   // done()
    //   // process.nextTick(done) // ends execution of solver() inside addSolution()
    // })
    //
    // it('When running ends, should be Hide', () => {
    //   expect(button.innerHTML).toEqual('Hide')
    // })
    //
    // it('When button is clicked again, should change status, from hide to show for now', () => {
    //   button.click()
    //   expect(button.innerHTML).toEqual('Show')
    // })
    //
    // it('and from now on, should change status from hide to show or from show to hide', () => {
    //   button.click()
    //   expect(button.innerHTML).toEqual('Hide')
    // })
    //
    // it('and from now on, should change status from hide to show or from show to hide', () => {
    //   button.click()
    //   expect(button.innerHTML).toEqual('Show')
    // })

  // })

//   it('Answer must match', () => {
//     // expect(Number($(`#solution${id}`).text())).toEqual(solver()) // answer is always equals, will pass all tests
//   })
})
