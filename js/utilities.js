/*
  el = where the value will be writed
  value = new value to write
  status = this is the new status of the button
*/
export let changeButtonStatus = (button, el, value='', status='Show') => {
  //debugger
  if (status == 'Running') { // Running -> Runnning
    button.innerHTML = 'Running'
    button.className = 'button button--state-running'
  }  else if (status == 'Show') { // Show -> Hide (Show only changes to Hide after Running)
    button.className = 'button button--state-hidden'
    button.innerHTML = 'Hide'
    el.className = 'result result--state-show'
    el.innerHTML = value
  }  else { // status == "Hide" // Hide -> Show (Hide only changes to show)
    button.className = 'button button--state-show'
    button.innerHTML = 'Show'
    el.className = 'result result--state-hidden'
  }
}



/*

*/
export let isPrime = (number) => {

  if (number%2 == 0 && number != 2) {
    return false
  }
  for (let i = 3 ; i < parseInt(Math.sqrt(number)+2) ; i+=2) {
    if (number%i == 0) {
      return false
    }
  }
  return true
}

/*
*/
