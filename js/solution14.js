import {changeButtonStatus} from "./utilities"

var longest_chain = 0;
var number_longest_chain = 0;
let chain_size = [];

var collatz_steps = (n) => {
  let steps = 0;
  while(n > 1){
    if(chain_size[n] != undefined){
      steps += chain_size[n];
      break;
    }
    else{
      if(n%2 == 0){
        n /= 2;
      }
      else{
        n = 3*n + 1;
      }
      steps++;
    }
  }
  return steps;
}

$(document).ready(function () {
  var solution14 = document.getElementById("solution14");
  var button_solution14 = document.getElementById("button_solution14");

  var solve14 = () => {
    if(!longest_chain){
      console.log("Calculating...")
      changeButtonStatus(button_solution14, solution14, "", "Running")
      process.nextTick(() => {
        for(let i = 1 ; i < 1000000 ; i++){
          chain_size[i] = collatz_steps(i);
          if(longest_chain < chain_size[i]){
            longest_chain = Math.max(longest_chain, chain_size[i]);
            number_longest_chain = i;
          }
        }
        console.log("Finished")
        changeButtonStatus(button_solution14, solution14, number_longest_chain, "Show");
      })
    }
    changeButtonStatus(button_solution14, solution14, number_longest_chain, button_solution14.innerHTML);
  }

  button_solution14.addEventListener("click", solve14);

})
