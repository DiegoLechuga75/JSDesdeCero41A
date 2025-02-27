const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.children[0];
const generateBtn = document.querySelector('.generator form button');



const handleChange = () => {
    const inputValue = inputRange.value;
    const lengthCounter = document.querySelector('.range-container h1');
    lengthCounter.textContent = inputValue;
}

const generatePassword = (passwordLength) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    for(let i = 0; i < passwordLength; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}

const printPassword = (event) => {
    event.preventDefault();
    const inputValue = inputRange.value;
    const password = generatePassword(inputValue);
    const passwordHeading = document.querySelector('.password-container h1');
    passwordHeading.textContent = password;
}

inputRange.addEventListener('change', () => handleChange());
generateBtn.addEventListener('click', (event) => printPassword(event));

