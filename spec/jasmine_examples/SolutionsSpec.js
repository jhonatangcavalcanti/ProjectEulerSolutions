import {changeButtonStatus, isPrime} from "../../js/utilities"

describe("Utilities", () => {
  //var sol_10 = require("../../js/solution10");

  it("should verify if prime test is working", () => {
    var even_number = 42846;
    var not_prime = 15;
    var prime = 2*3*5*7*11+1;

    expect(isPrime(even_number)).not.toBe(true);
    expect(isPrime(prime)).toBe(true);
    expect(isPrime(not_prime)).not.toBe(true);
  });

  describe("Status of button", () => {
    var button, text_button, solution;

    beforeAll(function() {
      button = document.createElement("BUTTON");
      text_button = document.createTextNode("Show");
      solution = document.createElement("SPAN");
      button.appendChild(text_button);
    });

    it("Initially button should be Show", () => {
      expect(button.innerHTML).toEqual("Show");
    });

    it("When click on Show for the first time, should be Running", () => {
      changeButtonStatus(button, solution, "", "Running");
      expect(button.innerHTML).toEqual("Running");
    });

    it("When running ends, should be Hide", () => {
      changeButtonStatus(button, solution, "", "Show"); // from show change to hide
      expect(button.innerHTML).toEqual("Hide");
    });

    it("When button is clicked again, should change status, from hide to show for now", () => {
      changeButtonStatus(button, solution, "", button.innerHTML); // no more need to send .. text
      expect(button.innerHTML).toEqual("Show");
    });

    it("and from now on, should change status from hide to show or from show to hide", () => {
      changeButtonStatus(button, solution, "", button.innerHTML); // no more need to send .. text
      expect(button.innerHTML).toEqual("Hide");
    });

  })



});
