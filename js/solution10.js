import {changeButtonStatus, isPrime} from "./utilities"

// var jsdom = require('jsdom');

var sum = 0;

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//
//     var $ = window.$;
//
$(document).ready(function () {
  var button_solution10 = document.getElementById("button_solution10")
  var solution10 = document.getElementById("solution10")

  var solve10 = () => {
    if(!sum){ // if not calculated yet
      changeButtonStatus(button_solution10, solution10, "", "Running") // change status initialy to running
      process.nextTick(() => {
        for(let i = 2 ; i < 2000000 ; i++){
        //debugger
          if(isPrime(i)){
            sum += i;
          }
        }
        changeButtonStatus(button_solution10, solution10, sum, "Show") // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution10, solution10, sum, button_solution10.innerHTML)
  }
  button_solution10.addEventListener("click", solve10)
})
//
// });
