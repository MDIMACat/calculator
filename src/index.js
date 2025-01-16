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
        equal: ".equal"
    }
}


class Calculator {
    constructor() {
        this.numbers = {};
        this.operators = {};
        this.domElements = {};
        this.firstNumber = "";
        this.operator = "";
        this.secondNumber = "";
        this.answer = "";
    }

    initialize() {
        this.setElements()
        this.addEvents()

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
        this.domElements.dot = document.querySelector(fixedValues.classes.dot)
        this.domElements.equal = document.querySelector(fixedValues.classes.equal)
    }

    addEvents() {
        
    }

}



if(typeof document !== undefined){
    const cal = new Calculator()
    cal.initialize()
}