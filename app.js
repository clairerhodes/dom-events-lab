/*-------------------------------- Constants --------------------------------*/
const equals = document.querySelector(`.equals`);
const numbers = document.querySelectorAll(`.number`);
const display = document.querySelector(`.display`);
const operators = document.querySelectorAll(`.operator`);

/*-------------------------------- Functions --------------------------------*/
const appendNumOp = () => {
    display.innerText += event.target.innerText;
};
const clearCalc = () => {
    display.innerText = ``;
}
const math = () => {
    display.innerText = eval(display.innerText);
}

const error = () => {
    display.innerText = `Err`;
}

/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach((number) => {
    number.addEventListener(`click`, (event) => {
        // this log is for testing purposes to verify we're getting the correct value
        // console.log(event.target.innerText);
        // future logic to capture the button's value would go here...
        appendNumOp();
    })
})

operators.forEach((operator) => {
    operator.addEventListener(`click`, (event) => {
        if (event.target.innerText === `C`) {
            clearCalc();
        } else {
            appendNumOp();
        }
    })
})

equals.addEventListener(`click`, (event) => {
   math();
})

