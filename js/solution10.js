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

var solve10 = () => {
  var sum = 0;
  console.log("Calculando..");
  for(let i = 2 ; i < 2000000 ; i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  console.log("Finalizado!");
  
  alert("Answer: " + sum);
}
