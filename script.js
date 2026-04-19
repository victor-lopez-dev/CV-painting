const header = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

const exitBtn = document.querySelector('#exit-btn');
const navModal = document.querySelector('#nav_modal');
let hamburgerBtn = document.querySelector('#hamburger-btn');
let modalLinks = document.querySelectorAll('.nav_modal--list');

for (let i = 0; i < modalLinks.length; i++) {
	modalLinks[i].addEventListener('click', function () {
		navModal.classList.remove('show_modal');
	});
}

hamburgerBtn.addEventListener('click', function () {
	navModal.classList.add('show_modal');
});

exitBtn.addEventListener('click', function () {
	navModal.classList.remove('show_modal');
});