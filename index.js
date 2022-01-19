const open = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
// const cover = document.querySelector('.cover');

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
