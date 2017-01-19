import {changeButtonStatus} from "./utilities"

var sum = 0;

$(document).ready(function () {
  var solution1 = document.getElementById("solution1");
  var button = document.getElementById("button_solution1");

  var solve1 = () => {
    if(!sum){ // if not calculted yet
      for(let i = 3 ; i < 1000 ; i++){
        if(!(i%3 || i%5)){
          sum += i;
        }
      }
      solution1.innerHTML = sum;
    }

    changeButtonStatus(button, solution1, sum, button.innerHTML);
  }

  button.addEventListener("click", solve1);
})
