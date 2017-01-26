import {changeButtonStatus, isPrime} from "./utilities"
import {solution10} from "./solverSolution10"

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
  var text_solution10 = document.getElementById("solution10")

  var solve10 = () => {
    if(!sum){ // if not calculated yet
      changeButtonStatus(button_solution10, text_solution10, "", "Running"); // change status initialy to running
      process.nextTick(() => {
        sum = solution10();
        changeButtonStatus(button_solution10, text_solution10, sum, "Show"); // then, change status to Hide
      })
    }
    changeButtonStatus(button_solution10, text_solution10, sum, button_solution10.innerHTML);
  }
  button_solution10.addEventListener("click", solve10)
})
//
// });
