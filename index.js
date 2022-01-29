const open = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const gridContainer = document.querySelector('.grid-container');
const header = document.querySelector('.header');
const faders = document.querySelectorAll('.fade-in');
const animations = document.querySelectorAll('.animate');
// const cover = document.querySelector('.cover');
console.log('$$: ', faders);
open.addEventListener('click', () => {
	// console.log('TTT: ', nav);
	let isOpen = nav.getAttribute('data-open');
	if (isOpen === 'false') {
		nav.setAttribute('data-open', true);
		open.setAttribute('aria-expanded', true);
		// cover.setAttribute('data-cover', true);
	} else {
		nav.setAttribute('data-open', false);
		open.setAttribute('aria-expanded', false);
		// cover.setAttribute('data-cover', false);
	}
	// console.log(isOpen);
});

const options = {
	rootMargin: '-200px 0px 0px 0px',
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			header.classList.add('nav-scrolled');
			nav.classList.add('nav-scrolled');
		} else {
			header.classList.remove('nav-scrolled');
		}
	});
}, options);

observer.observe(gridContainer);

const appearOptions = {
	threshold: 0,
	rootMargin: '0px 0px -300px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));
animations.forEach((animation) => appearOnScroll.observe(animation));
