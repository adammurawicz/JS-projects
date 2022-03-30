const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {

    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'complete all inputs'
        costInfo.style.display = 'none'
    } else {
        countBill()
        error.textContent = ''
    }
}

const countBill = () => {
    const pricevalue = parseFloat(price.value)
    const numberofpeople = parseFloat(people.value)
    const tipvalue = parseFloat(tip.value)

    const money = (pricevalue + (pricevalue * tipvalue)) / numberofpeople
    costInfo.style.display = 'block'
    cost.textContent = money.toFixed(2)
}

countBtn.addEventListener('click', showBill)