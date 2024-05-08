function checkBTN() {
    let userInput = document.getElementById('text-input').value
    let inputSymbols = userInput.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
    let pureInput = inputSymbols.replace(/\s+/g, '')
    let reversInput = pureInput.split('').reverse().join('')
    if (!userInput) {
        document.getElementById('result').innerHTML = ` <p class="result-text">Please Enter a word or sentence</p><img src="R%20(2).png">`

    } else if (reversInput === pureInput) {
        document.getElementById('result').innerHTML =` <p class="result-text">${userInput} is a Palindrome</p><img src="R.png">`

    } else {
        document.getElementById('result').innerHTML = ` <p class="result-text">${userInput} is Not a Palindrome</p><img src="R%20(1).png">`
    }
}

document.addEventListener('DOMContentLoaded', function () {
        let inputField = document.getElementById('text-input')
        inputField.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                checkBTN()
            }
        })
    }
);
