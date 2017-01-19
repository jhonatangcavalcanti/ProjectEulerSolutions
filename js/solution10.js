import {changeButtonStatus} from "./utilities"

var sum = 0;

var isPrime = (number) => {

  if(number%2 == 0 && number != 2){
    return 0;
  }
  for(let i = 3 ; i < parseInt(Math.sqrt(number)+2) ; i+=2){
    if(number%i == 0){
      return 0;
    }
  }
  return 1;
}

$(document).ready(function () {
  var button_solution10 = document.getElementById("button_solution10")
  var solution10 = document.getElementById("solution10")

  var solve10 = () => {
    if(!sum){ // if not calculated yet
      console.log("Calculating...")
      changeButtonStatus(button_solution10, solution10, "", "Running") // change status initialy to running
      process.nextTick(() => {
        for(let i = 2 ; i < 2000000 ; i++){
        //debugger
          if(isPrime(i)){
            sum += i;
          }
        }
        console.log("Finished!");
        changeButtonStatus(button_solution10, solution10, sum, "Show") // then, change status to Hide
      })
    }
    //TODO: Better solution to fix status of the button
    changeButtonStatus(button_solution10, solution10, sum, button_solution10.innerHTML)
  }
  button_solution10.addEventListener("click", solve10)
})
