const menuIcon = document.querySelector('.icon-menu');
const menuHeader = document.querySelector('.cv-header__menu');
const menuLink = document.querySelectorAll('.cv-header__link');
const shadow = document.querySelector('.shadow');

const toggleMenu = () => {
	menuIcon.classList.toggle('active');
	menuHeader.classList.toggle('active');
	shadow.classList.toggle('active');
	document.body.classList.toggle('overflow');
};

menuIcon.addEventListener('click', toggleMenu);
menuLink.forEach(item => item.addEventListener('click', () => {
	if (menuIcon.classList.contains('active')) toggleMenu();
}));
shadow.addEventListener('click', toggleMenu);