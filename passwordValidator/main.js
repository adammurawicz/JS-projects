const input = document.querySelector('input');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if(input.value.length >= minValue && input.value.match(letters) && input.value.match(numbers) && input.value.match(special)) {
        p.textContent = 'Awesome password! God helps those who help themselves.'
        p.style.color = 'darkgreen'
    } else if (input.value.length >= minValue && input.value.match(letters) && input.value.match(numbers)) {
        p.textContent = 'Quite chill password. Never be too careful.'
        p.style.color = 'dimgray'
    } else {
        p.textContent = 'Shitty password. Caution is always in order!'
        p.style.color = 'hotpink'
    }
}

const checkPassword = () => {
    if(input.value !== '') {
        showMsg()
    } else {
        p.textContent = "You didn't type your password"
        p.style.color = ''
    }
}

input.addEventListener('keyup', checkPassword)