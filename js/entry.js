require('./../scss/style.scss')

import {addSolution} from './problemTemplate'

let solveds = [
  {id:1, title:'Multiples of 3 and 5'},
  {id:8, title:'Largest product in a series'},
  {id:10, title:'Summation of primes'},
  {id:14, title:'Longest Collatz sequence'},
]

$(document).ready(() => {
  for (let sol of solveds) {
    addSolution(sol['id'], sol['title'])
  }
})
