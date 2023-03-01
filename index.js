const startInput = document.querySelector('.js-start-input')
const endInput =  document.querySelector('.js-end-input')
const button = document.querySelector('.btn')
const rate = document.querySelector('.js-rate')
let counter = 0

button.addEventListener('click', onButtonClick)

const isValidate = (message) => {
    return (!isNaN(message)) && message !== ''
}

function onButtonClick() {
    message = getMessage()

    if (!isValidate(message)) {
        alert('Ошибка валидации, запишите число');
        return;
      }

    createRecording(message)
    isCalculate()
    Clear()
}

function isCalculate() {
    counter++;
    endInput.value = counter;
}

function getMessage() {
    return startInput.value
}

function Clear() {
    startInput.value = ''
}

function createRecording(message) {
    const html = `
    <div>
        <p>${message}</p>
    </div>
    `
    rate.insertAdjacentHTML('beforeend', html);
}


