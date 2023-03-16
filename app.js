let firstNumber = '';
let secondNumber = '';

const input = document.querySelector('.calculator');
const additionButton = document.querySelector('#plus');
const subtractionButton = document.querySelector('#minus');
const multiplicationButton = document.querySelector('#multiply');
const divisionButton = document.querySelector('#divide');

const allRows = document.querySelector('#allrows');

const enter = document.querySelector('#enter');
const clear = document.querySelector('#clear');

allRows.addEventListener('click', e => {
    if (e.target.classList.contains('number')){
        firstNumber += e.target.id;
        input.value = firstNumber;
    }
});

clear.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    input.value = 0;
})