const burgerBtn = document.querySelector('.burger')
const barIco = document.querySelector('.fa-hamburger')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const showNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barIco.classList.toggle('active')
    xIco.classList.toggle('active')
}

burgerBtn.addEventListener('click', showNav)