const conventer = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const swapBtn = document.querySelector('.swap')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const toFast = document.querySelector('.toFast')

let mil
let km

const swap = () => {
    if (one.textContent === 'kmph') {
        one.textContent = 'mph'
        two.textContent = 'kmph'
        result.textContent = ''
    } else {
        one.textContent = 'kmph'
        two.textContent = 'mph'
        result.textContent = ''
    }
}

const calMil = () => {
    if(conventer.value < 0) {
        result.textContent = "Don't be a silly, the speed can not be under zero"
        conventer.value = ''
    } else {
        km = conventer.value * 0.621
        result.textContent = `${conventer.value} kmph equals ${km.toFixed(1)} mph`
        conventer.value = ''
    }


    if (km >= 120) {
        toFast.textContent = "Don't be a speeder!"
    } else {
        toFast.textContent = ''
    }
}

const calKm = () => {
    if (conventer.value < 0) {
        result.textContent = "Don't be a silly, the speed can not be under zero"
        conventer.value = ''
    } else {
        mil = conventer.value * 1.6
        result.textContent = `${conventer.value} mph equals ${mil.toFixed(1)} kmph`
        conventer.value = ''
    }

    if (mil >= 74.5) {
        toFast.textContent = "Don't be a speeder!"
    } else {
        toFast.textContent = ''
    }
}


const conversion = () => {
    if (conventer.value !== '') {
        
        if(one.textContent === 'kmph') {
            calMil()
            result.style.color = ''
        } else {
            calKm()
            result.style.color = ''
        }
        
    } else {
        result.textContent = 'Type your speed!'
        result.style.color = 'red'
    }
}

const reset = () => {
    conventer.value = ''
    result.textContent = ''
    toFast.textContent = ''
}

swapBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)