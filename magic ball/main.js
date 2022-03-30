const ball = document.querySelector('.magic-ball')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
    'Yes!', 'No way', 'We will see...', 'This is very tough question...', "You don't want to know the answer for this question", "Nobody know's"
]

const makeAnimation = () => {
    ball.classList.add('ball-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {

    if (input.value !== '' && input.value.slice(-1) === '?') {
        makeAnswer()
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'The question should be end of question mark: "?"'
        answer.textContent = ''
    } else {        
        error.textContent = 'Ask your question'
        answer.textContent = ''
    }
    ball.classList.remove('ball-animation')
}

const makeAnswer = () => {
    const number = Math.floor(Math.random()*6)
    answer.innerHTML = `<spna>Answer:<span/> ${answers[number]}`
}

 ball.addEventListener('click', makeAnimation)