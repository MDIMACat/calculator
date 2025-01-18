fixedValues = {
    classes : {
        clear : ".clear",
        negPos : ".negative-positive",
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
        displayScreen : ".display-number"
    }
}


class Calculator {
    constructor() {
        this.numbers = {};
        this.operators = {};
        this.domElements = {};
        this.operator = "";
        this.answer = "";
        this.currentNumber = "";
        this.total = "";
    }

    initialize() {
        this.setElements()
        this.getNumber()
        this.trackNumbers()
        this.add()
        this.multiply()
        this.subtract()
        this.divide()
    }

    setElements() {
        this.domElements.clear = document.querySelector(fixedValues.classes.clear)
        this.domElements.negPos = document.querySelector(fixedValues.classes.negPos)
        this.domElements.percent = document.querySelector(fixedValues.classes.percent)
        this.operators.divide = document.querySelector(fixedValues.classes.divide)
        this.numbers.seven = document.querySelector(fixedValues.classes.seven)
        this.numbers.eight = document.querySelector(fixedValues.classes.eight)
        this.numbers.nine = document.querySelector(fixedValues.classes.nine)
        this.operators.multiply = document.querySelector(fixedValues.classes.multiply)
        this.numbers.four = document.querySelector(fixedValues.classes.four)
        this.numbers.five = document.querySelector(fixedValues.classes.five)
        this.numbers.six = document.querySelector(fixedValues.classes.six)
        this.operators.minus = document.querySelector(fixedValues.classes.minus)
        this.numbers.one = document.querySelector(fixedValues.classes.one)
        this.numbers.two = document.querySelector(fixedValues.classes.two)
        this.numbers.three = document.querySelector(fixedValues.classes.three)
        this.operators.plus = document.querySelector(fixedValues.classes.plus)
        this.numbers.zero = document.querySelector(fixedValues.classes.zero)
        this.numbers.dot = document.querySelector(fixedValues.classes.dot)
        this.domElements.equal = document.querySelector(fixedValues.classes.equal)
        this.domElements.displayedNumber = document.querySelector(fixedValues.classes.displayScreen)
    }

    getNumber() {
        for(const number in this.numbers){
            this.numbers[number].addEventListener("click", () => {
                this.displayDigits(this.numbers[number].textContent)
            })
        }
    }

    displayDigits(digit) {
        if(this.currentNumber === ""){
            this.currentNumber = digit
            this.total = this.currentNumber
            this.domElements.displayedNumber.innerHTML = this.currentNumber 
        } else if (this.currentNumber !== "" && this.currentNumber.length < 10) {
            this.currentNumber += digit
            this.total = this.currentNumber
            this.domElements.displayedNumber.innerHTML = this.currentNumber
        } else {
            console.error("Your number is too long")
        }
    }

    trackNumbers() {
        for(const signs in this.operators){
            this.operators[signs].addEventListener("click", () => {
                this.operators[signs].style.backgroundColor = "#efb680"
                switch (signs) {
                    case "plus":
                        this.add(Number(this.total), Number(this.currentNumber));
                        break;
                    case "multiply":
                        this.total = Number(1)
                        this.multiply(this.total);
                        break;
                    case "divide":
                        this.divide();
                        break;
                    case "subtract":
                        this.subtract();
                        break;
                    default:
                        console.error("Not a valid operation");
                }
                
            })
        }

    }

    add(firstNumber, secondNumber) {
        console.log(firstNumber, secondNumber)

    }

    multiply() {

    }

    divide() {

    }

     subtract() {

     }
}



if(typeof document !== undefined){
    const cal = new Calculator()
    cal.initialize()
}