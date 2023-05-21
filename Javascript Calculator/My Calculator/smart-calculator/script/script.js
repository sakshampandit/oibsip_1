
// little message for new users
if (localStorage.getItem('newUser') == null) {
    if (window.innerWidth > 768) {
        window.alert('You can use your computer keyboard for giving input to this calculator');
    } else {
        window.alert('I guess you are new here. At last you are in the right place!')
    }
    localStorage.setItem('newUser', false);
}



// white and dark theme function

let savedTheme = (localStorage.getItem('themeDark') === 'true');
if (savedTheme == null) { localStorage.setItem('themeDark', 'false') };
let themeDark = false;
document.getElementById('toggle').addEventListener('click', () => {
    document.body.style.transition = 'background 1s ease-in-out';
    document.querySelector('.toggler').style.transition = '500ms ease-in-out';
    document.documentElement.classList.toggle('dark');
    themeDark = !themeDark;
    savedTheme = !savedTheme;
    localStorage.setItem('themeDark', themeDark.toString());
    themeIcon();
})
if (savedTheme != themeDark) {
    document.documentElement.classList.toggle('dark');
    themeDark = !themeDark;
    themeIcon();
}
function themeIcon() {
    if (themeDark === false) {
        document.getElementsByClassName('toggler')[0].innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-9.184-5.599l-3.594-3.594-1.414 1.414 3.594 3.595c.402-.537.878-1.013 1.414-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.594-3.595-1.414-1.414-3.594 3.595c.536.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.594c-.403.537-.879 1.013-1.415 1.415zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z"/></svg>';
    } else {
        document.getElementsByClassName('toggler')[0].innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path d="M26.58,23.41a1,1,0,0,0-1-.54A9.88,9.88,0,0,1,24,23,10,10,0,0,1,14,13a9.91,9.91,0,0,1,3-7.14,1,1,0,0,0-.85-1.7A12,12,0,1,0,26.39,24.57,1,1,0,0,0,26.58,23.41Z"/></svg>';
    }
}
themeIcon();



// select elements of the html file
const screen = document.getElementById('display');
const topScreen = document.getElementById('topDisplay');
const inputButtons = document.querySelectorAll('.input-button');
const numBut = document.querySelectorAll('.numberButton');
const operationBut = document.querySelectorAll('[data-operation]');
const squareBut = document.querySelector('#squareBut');
const sqrtBut = document.querySelector('#sqrtBut');
const oneDividedBut = document.querySelector('#oneDivided');
const percentBut = document.querySelector('#percentBut');
const posNegToggler = document.querySelector('#posNegToggle');
const equalBut = document.querySelector('#equalBut');
const acBut = document.querySelector('#ac');
const delBut = document.querySelector('#del');
const dotBut = document.getElementById('dot');
const answerBut = document.getElementById('ansBut');

// how many numbers will not overflow the calculator screen
const maxLettersCanShow = parseInt(screen.offsetWidth / 35);

// add button animation on click
inputButtons.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('clicked');

        setTimeout(() => {
            element.classList.remove('clicked');
        }, 100)
    })
})

// clear all when reload
window.addEventListener('load', acFunc);

// defining some necessary variables
let clickedBut = null, firstValue = null, secondValue = null, operator = null;



// all clear function adding
acBut.addEventListener('click', acFunc);
function acFunc() {
    topScreen.value = '';
    screen.value = '0';
    firstValue = null;
    secondValue = null;
}

// delete button function adding
delBut.addEventListener('click', () => {
    screen.value = screen.value.slice(0, (screen.value.length - 1));
})

// dot(.) button function adding
dotBut.addEventListener('click', dotFunc);
function dotFunc() {
    if (screen.value.toString().indexOf('.') == -1) {
        if (screen.value == '' || screen.value == '0') {
            screen.value = '0' + '.';
        } else { screen.value += '.' }
    }
}

// function of all number buttons
numBut.forEach(element => {
    element.addEventListener('click', numButFunc);
})

function numButFunc(event) {
    if (screen.value === '0') { screen.value = ''; }
    if (screen.value.length < maxLettersCanShow) {
        clickedBut = event.target.innerText;
        screen.value += clickedBut;
    }
}


// function for four [+, -, *, /] operation
operationBut.forEach(element => {
    element.addEventListener('click', operation);
})
function operation(event) {
    if (screen.value != '' && topScreen.value == '') {
        firstValue = Number(screen.value);
        operator = event.target.dataset.operation;
        topScreen.value = screen.value + " " + event.target.innerText;
        screen.value = '';
    }
    else if (screen.value == '' && topScreen.value != '') {
        operator = event.target.dataset.operation;
        topScreen.value = topScreen.value.slice(0, topScreen.value.length - 1) + event.target.innerText;
    }
    else if (screen.value != '' && topScreen.value != '') {
        equalFunc();
        firstValue = Number(screen.value);
        operator = event.target.dataset.operation;
        topScreen.value = screen.value + " " + event.target.innerText;
        screen.value = '';
    }
}

// function for square ^(2) button
squareBut.addEventListener('click', squareFunc);
function squareFunc() {
    if (screen.value != '') {
        /*screen.value = preventOverflow(Math.pow(Number(screen.value), 2));*/
        screen.value = preventOverflow(math.number(math.square(math.fraction(screen.value))));

        // save answer
        saveAnsToLocaleStorage(screen.value)

        // clear the screen if any number button clicked
        numBut.forEach(element => {
            element.addEventListener('click', removeAns);
        })
    }
}

// square root(√) function adding
sqrtBut.addEventListener('click', sqrtFunc);
function sqrtFunc() {
    if (!screen.value) return

    if (Number(screen.value) >= 0) {
        // screen.value = preventOverflow(Math.pow(Number(screen.value), 0.5));
        screen.value = preventOverflow(math.number(math.sqrt(screen.value)));

        // save answer
        saveAnsToLocaleStorage(screen.value);
    } else {
        screen.value = 'Invalid Input';
    }

    // Remove "Invalid Input" of screen when any number button clicked
    numBut.forEach(element => {
        element.addEventListener('click', removeAns);
    })

}

// function for 1 dividing by a number
oneDividedBut.addEventListener('click', () => {
    if (screen.value != '') {
        // screen.value = preventOverflow(1 / Number(screen.value));
        screen.value = preventOverflow(math.number(math.divide(1, math.fraction(screen.value))));

        saveAnsToLocaleStorage(screen.value)

        // clear the screen if any number button clicked
        numBut.forEach(element => {
            element.addEventListener('click', removeAns);
        })
    }
})

// change the number to positive or negative
posNegToggler.addEventListener('click', () => {
    if (screen.value != '') {
        if (Number(screen.value) < 0) {
            screen.value = Math.abs(Number(screen.value));
        } else if (Number(screen.value) > 0) {
            screen.value = '-' + screen.value;
        }
    }
})


// percentage (%) button function
percentBut.addEventListener('click', percentFunc);
function percentFunc() {
    if (screen.value != '') {
        if (operator == '+' || operator == '-') {
            screen.value = (firstValue * Number(screen.value) * 0.01);
        } else {
            screen.value = (firstValue * Number(screen.value) * 0.01);
            topScreen.value = '';
            firstValue = '';
        }

        // clear the screen if any number button clicked
        numBut.forEach(element => {
            element.addEventListener('click', removeAns);
        })
    }
}


// get saved answer
answerBut.addEventListener('click', () => {
    screen.value = JSON.parse(localStorage.getItem('smart-calc-SRT'))?.answer || 0;
})
// save answer to localstorage
function saveAnsToLocaleStorage(answer) {
    localStorage.setItem('smart-calc-SRT', JSON.stringify({ answer: Number(answer) }))
}


// calculation (=) button function
equalBut.addEventListener('click', equalFunc);

function equalFunc() {
    if (screen.value && firstValue) {
        secondValue = screen.value;

        let result = 0;

        /* --- This part has been commented just because javascript is not so good at math
        javascript calculates 0.1 + 0.2 and returns 0.30000000000000004 --- */
        /*
        switch(operator){
            case '+':
                result = Number(firstValue) + Number(secondValue);
                break;
            case '-':
                result = Number(firstValue) - Number(secondValue);
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                result = firstValue / secondValue;
                break;
        }
        */

        // I again tried to solve the issue natively in JavaScript
        /*
        if (operator === '+' || operator === '-') {
            const [value1, value2] = [firstValue.toString(), secondValue.toString()]
            if (value1.includes('.') || value2.includes('.')) {
                const splittedValues = [value1.split('.'), value2.split('.')]
                const nonFractionalParts = splittedValues.map(value => Number(value[0]));
                const nonFractionalResult = operator === '+' ?
                    nonFractionalParts.reduce((a, b) => a + b, 0)
                    : nonFractionalParts[0] - nonFractionalParts[1];

                const fractionalParts = splittedValues.map(value => value[1] ? value[1] : 0);
                const largestFractionLength = Math.max(...fractionalParts.map(x => x.toString().length));
                const fractionalResult =
                    fractionalParts.reduce((a, b) => Math.abs(a) + (operator === '+' ? 1 : -1) * (b.length < largestFractionLength ?
                        (b * Math.pow(10, largestFractionLength - b.length))
                        : Number(b)), 0)

                result = nonFractionalResult + (fractionalResult / Math.pow(10, largestFractionLength));
            } else {
                result = operator === '+' ? firstValue + secondValue :
                    firstValue - secondValue
            }
        }
        else if (operator === '*') {
            const [value1, value2] = [firstValue.toString(), secondValue.toString()];

            if (value1.includes('.') || value2.includes('.')) {
                let fractionalPartLength = (value1.includes('.') && value2.includes('.')) ?
                    (value1.split('.')[1].length > value2.split('.')[1].length) ?
                        value1.split('.')[1].length : value2.split('.')[1].length
                    : value1.includes('.') ? value1.split('.')[1].length
                        : value2.split('.')[1].length;

                result = ((firstValue * Math.pow(10, fractionalPartLength)) *
                    (secondValue * Math.pow(10, fractionalPartLength))) /
                    Math.pow(10, fractionalPartLength + fractionalPartLength);
            } else {
                result = firstValue * secondValue;
            }
        } else if (operator === '/') {
            result = firstValue / secondValue;
        }
        */

        // at last I use mathjs library to fix the calculation issue
        switch (operator) {
            case '+':
                result = math.number(math.add(math.fraction(firstValue), math.fraction(secondValue)));
                break;
            case '-':
                result = math.number(math.subtract(math.fraction(firstValue), math.fraction(secondValue)));
                break;
            case '*':
                result = math.number(math.multiply(math.fraction(firstValue), math.fraction(secondValue)));
                break;
            case '/':
                result = math.number(math.divide(math.fraction(firstValue), math.fraction(secondValue)));
                break;
        }

        // prevent answer from overflowing the display
        screen.value = preventOverflow(result);

        topScreen.value = '';
        firstValue = '';
        secondValue = '';

        // clear answer when number button clicked
        numBut.forEach(element => {
            element.addEventListener('click', removeAns);
        })
        dotBut.addEventListener('click', removeAns);

        // save answer
        saveAnsToLocaleStorage(result)
    }
}

// prevent numbers from overflowing the calculator screen
function preventOverflow(answer) {
    return answer.toString().length > maxLettersCanShow ? Number(answer).toPrecision(maxLettersCanShow) : answer;
}

// remove the answer when any number button clicked
function removeAns(event) {
    screen.value = '';
    clickedBut = event.target.innerText;
    screen.value = clickedBut;
    numBut.forEach(element => {
        element.removeEventListener('click', removeAns);
    })
    dotBut.removeEventListener('click', removeAns);
}


// add keyboard functionality for computers
document.addEventListener('keydown', event => {
    event.preventDefault();

    switch (event.key) {
        case 'Enter':
            equalBut.click();
            break;
        case 'Delete':
            delBut.click();
            break;
        case 'Backspace':
            acBut.click();
            break;
        case 'ArrowUp':
            answerBut.click();
            break;
        case '-':
            operationBut.forEach(element => {
                if (element.innerHTML == '−') { element.click() }
            });
            break;
        case '*':
            operationBut.forEach(element => {
                if (element.innerHTML == '×') { element.click() }
            });
            break;
        case '/':
            event.preventDefault();
            operationBut.forEach(element => {
                if (element.innerHTML == '÷') { element.click() }
            });
            break;
        default:
            inputButtons.forEach(element => event.key === element.innerText && element.click())
    }
})
