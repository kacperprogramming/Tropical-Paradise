const nav = document.querySelector('.nav')
const navButton = document.querySelector('.burger-button')
const navLinks = document.querySelectorAll('.nav__link')

const handleNav = () => {
	nav.classList.toggle('nav--active')
}

const handleNavLinks = () => {
	nav.classList.remove('nav--active')
}

navButton.addEventListener('click', handleNav)
navLinks.forEach(item => item.addEventListener('click', handleNavLinks))
