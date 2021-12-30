const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')
const btnColor = document.querySelector('.change-color')
const text = document.querySelector('p')
let fontSize = 42

const makePlus = () => {
    if (fontSize >= 100) {return}
    fontSize += 5
    text.style.fontSize = fontSize + 'px'
}

const makeMinus = () => {
    if (fontSize <= 10) {return}
    fontSize -= 5
    text.style.fontSize = fontSize + 'px'
}

const makeColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    text.style.color = `rgb(${r}, ${g}, ${b})`
}

btnPlus.addEventListener('click', makePlus)
btnMinus.addEventListener('click', makeMinus)
btnColor.addEventListener('click', makeColor)