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
