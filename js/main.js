const nav = document.querySelector('.nav')
const navButton = document.querySelector('.burger-button')
const navLinks = document.querySelectorAll('.nav__link')
const section = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')
}

const handleNavLinks = () => {
	nav.classList.remove('nav--active')
}

const handleFooterYear = () => {
	const now = new Date()
	footerYear.textContent = `® ${now.getFullYear()} Tropical Paradise`
}

navButton.addEventListener('click', handleNav)
navLinks.forEach(item => item.addEventListener('click', handleNavLinks))

handleFooterYear()
