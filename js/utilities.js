
export let changeButtonStatus = function (value='') {
  /**
   * @description Change status of the button when it's clicked
   * @param {Number} value The problem's answer to insert in the answer field.
   */
  if (value || this.answer.innerHTML) { // true when the worker sends the answer or when it was previous calculated
    if (value || this.button.innerHTML == 'Show') {
      this.button.className = 'button button--state-hidden'
      this.button.innerHTML = 'Hide'
      this.answer.className = 'result result--state-show'
      if (value)
        this.answer.innerHTML = value
    } else {
      this.button.className = 'button button--state-show'
      this.button.innerHTML = 'Show'
      this.answer.className = 'result result--state-hidden'
    }
  } else { // answer was not calculated yet, so solver starts to run
    this.button.className = 'button button--state-running'
    this.button.innerHTML = 'Running'
  }
}

export let isPrime = (number) => {
  /**
   * @description Verify if any number is prime.
   * @param {Number} number The number to test primarily.
   * @returns {Boolean} True if is prime or False otherwise.
   */
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

export let fib = (term) => {
  /**
   * @description Calculate any number in the Fibonacci sequence.
   * @param {Number} term The index of the sequence to calculate; one-based.
   * @returns {Number} the nth element of the Fibonacci sequence.
   */

  let current = 1, previous = 1, before_previous = 0

  for (let n = 1 ; n < term ; n++) {
    current = previous + before_previous
    before_previous = previous
    previous = current
  }
  return term > 0 ? current : 0
}
