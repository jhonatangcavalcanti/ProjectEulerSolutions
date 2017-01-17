import changeButtonStatus from "./utilities";
var sum = 0;
//require("utilities")

export var solve1 = () => {
  //let sum = 0;
  if(!sum){
    for(let i = 3 ; i < 1000 ; i++){
      if(!(i%3 || i%5)){
        sum += i;
      }
    }
  }
  //document.write(sum);
  var solution1 = document.getElementById("solution1");
  var button = document.getElementById("button_solution1");
  //console.log(sum);
  app.changeButtonStatus(button, solution1, sum);
  // alert("Answer: " + sum);
}
//solve1();
