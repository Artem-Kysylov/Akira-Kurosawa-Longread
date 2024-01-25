// Burger menu 
const openMenuBtn = document.querySelector('.header__nav-btn')
const closeMenuBtn = document.querySelector('.header__nav-close')
const menu = document.querySelector('.header__nav')

const openMenu = () => {
    menu.classList.add('header__nav--active')
}

const closeMenu = () => {
    menu.classList.remove('header__nav--active')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)