'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////
///////////////////////////////

/**
 * Styles, Attributes, Classes
 */
const h1 = document.createElement('h1');
h1.textContent = 'Hello';

// setting inline styles
h1.style.color = 'blue';
h1.style.backgroundColor = 'green';

document.querySelector('.header__title').before(h1);

// get style
console.log(getComputedStyle(h1).color);
console.log(getComputedStyle(h1).height);

h1.style.height = parseFloat(getComputedStyle(h1).height) + 40 + 'px';
console.log(getComputedStyle(h1).height);

// working with custom properties
// document.documentElement.style.setProperty('--color-primary', 'orange');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

// set attribute
logo.setAttribute('alt', 'this is alt');
console.log(logo.alt);

// get attribute
console.log(logo.getAttribute('src'));

// data attributes
logo.dataset.hello = 'my custom data-set attribute';
console.log(logo.dataset.hello);

// classes
logo.classList.add('test');
logo.classList.remove('test');
logo.classList.toggle('test');
logo.classList.contains('test');
