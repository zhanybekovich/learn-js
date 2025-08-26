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
 * Select, Create, Delete Elements
 */

// document
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// searching
document.querySelector('.heading');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// element by id
console.log(document.getElementById('section--1'));

// by tag name
console.log(document.getElementsByTagName('button'));

// elements by class name
console.log(document.getElementsByClassName('btn'));

// create element
const h1 = document.createElement('h1');
h1.textContent = 'Hello';
h1.className = 'h1';
console.log(h1);

// inserting element into the page
// document.querySelector('.header__title').appendChild(h1);
// document.querySelector('.header__title').append(h1);
// document.querySelector('.header__title').prepend(h1);
// document.querySelector('.header__title').append(h1.cloneNode(true));
document.querySelector('.header__title').before(h1);
document.querySelector('.header__title').after(h1);

// delete element
h1.addEventListener('click', function () {
  h1.remove();
});
