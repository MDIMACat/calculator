fixedValues = {
  classes: {
    clear: ".clear",
    negPos: ".negative-positive",
    percent: ".percentage",
    divide: ".divide",
    seven: ".seven",
    eight: ".eight",
    nine: ".nine",
    multiply: ".multiply",
    four: ".four",
    five: ".five",
    six: ".six",
    minus: ".minus",
    one: ".one",
    two: ".two",
    three: ".three",
    plus: ".plus",
    zero: ".zero",
    dot: ".dot",
    equal: ".equal",
    displayScreen: ".display-number",
  },
};

class Calculator {
  constructor() {
    this.numbers = {};
    this.operators = {};
    this.domElements = {};
    this.operator = "";
    this.answer = 0;
    this.currentNumber = "";
    this.numbersArray = [];
  }

  initialize() {
    this.setElements();
    this.getNumberToDisplay();
    this.getOperators();
    this.equal()
    this.reset()
  }

  setElements() {
    this.domElements.clear = document.querySelector(fixedValues.classes.clear);
    this.domElements.negPos = document.querySelector(
      fixedValues.classes.negPos
    );
    this.domElements.percent = document.querySelector(
      fixedValues.classes.percent
    );
    this.operators.divide = document.querySelector(fixedValues.classes.divide);
    this.numbers.seven = document.querySelector(fixedValues.classes.seven);
    this.numbers.eight = document.querySelector(fixedValues.classes.eight);
    this.numbers.nine = document.querySelector(fixedValues.classes.nine);
    this.operators.multiply = document.querySelector(
      fixedValues.classes.multiply
    );
    this.numbers.four = document.querySelector(fixedValues.classes.four);
    this.numbers.five = document.querySelector(fixedValues.classes.five);
    this.numbers.six = document.querySelector(fixedValues.classes.six);
    this.operators.minus = document.querySelector(fixedValues.classes.minus);
    this.numbers.one = document.querySelector(fixedValues.classes.one);
    this.numbers.two = document.querySelector(fixedValues.classes.two);
    this.numbers.three = document.querySelector(fixedValues.classes.three);
    this.operators.plus = document.querySelector(fixedValues.classes.plus);
    this.numbers.zero = document.querySelector(fixedValues.classes.zero);
    this.numbers.dot = document.querySelector(fixedValues.classes.dot);
    this.domElements.equal = document.querySelector(fixedValues.classes.equal);
    this.domElements.displayedNumber = document.querySelector(
      fixedValues.classes.displayScreen
    );
  }

  getNumberToDisplay() {
    for (const number in this.numbers) {
      this.numbers[number].addEventListener("click", () => {
        this.displayCurrent(this.numbers[number].textContent);
      });
    }
  }

  displayCurrent(digit) {
    if (this.currentNumber === "") {
      this.currentNumber = digit;
      this.domElements.displayedNumber.innerHTML = this.currentNumber;
    } else if (this.currentNumber !== "" && this.currentNumber.length < 10) {
      this.currentNumber += digit;
      this.domElements.displayedNumber.innerHTML = this.currentNumber;
    } else {
      console.error("Your number is too long");
    }
  }

  getOperators() {
    for (const operator in this.operators) {
      this.operators[operator].addEventListener("click", () => {
        this.operator = operator; 
        if (this.currentNumber !== "") {
          this.numbersArray.push(Number(this.currentNumber));
          this.currentNumber = ""; 
        }
      });
    }
  }
  
  updateDisplay() {
      this.domElements.displayedNumber.innerHTML = String(this.answer)
  }

  performCalculation() {
    if (this.numbersArray.length === 1 && this.currentNumber !== "") {
        this.numbersArray.push(Number(this.currentNumber));
        this.operate();
        this.updateDisplay(); 
        this.clearArray(); 
      }
  }

  operate(){
    const [num1, num2] = this.numbersArray;

    switch (this.operator) {
      case "plus":
        this.answer = num1 + num2
        break;
      case "minus":
        this.answer = num1 - num2;
        break;
      case "multiply":
        this.answer = num1 * num2;
        break;
      case "divide":
        if (num2 !== 0) {
          this.answer = num1 / num2;
        } else {
          console.error("Cannot divide by zero");
          this.answer = 0
        }
        break;
      default:
        console.error("Invalid operator");
    }
    
  }

  equal(){
    this.domElements.equal.addEventListener("click", () => {
      this.performCalculation()
      this.updateDisplay();
    })
   
  }

   clearArray() {
    this.numbersArray = [this.answer];
    this.currentNumber = ""; 
    this.operator = ""; 
  }

  reset(){
    this.domElements.clear.addEventListener("click", () => {
      this.operator = "";
      this.answer = 0;
      this.currentNumber = "";
      this.numbersArray = [];
      this.updateDisplay()
    })
  }
  
}


if (typeof document !== undefined) {
  const cal = new Calculator();
  cal.initialize();
}


// TO_DO LIST

//Work on logic for continuos adding before you click =
// work on negative / positive toggle
// work on percentage