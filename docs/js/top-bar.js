const NAVBAR_SELECTOR = '.top-bar__nav'
const TOGGLE_SELECTOR = 'button.top-bar__item--mobile-menu'

function isMobile() {
	return window
		.matchMedia('(max-width: 800px)')
		.matches
}

function setUpMobile() {
	const navBarElement = findNavBarElement()

	if (navBarElement === null) {
		document.addEventListener('DOMContentLoaded', configure);
	} else {
		configure()
	}
}

function findNavBarElement() {
	return document.querySelector(NAVBAR_SELECTOR)
}

function configure() {
	configureVisibility()
	configureToggle()
}

function configureVisibility() {
	findNavBarElement().setAttribute('hidden', '')
}

function configureToggle() {
	document
		.querySelector(TOGGLE_SELECTOR)
		.addEventListener('click', toggle)
}

function toggle() {
	findNavBarElement().toggleAttribute('hidden')
}

if (isMobile()) {
	setUpMobile()
}
