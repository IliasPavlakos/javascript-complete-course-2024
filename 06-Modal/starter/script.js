'use strict';

let modalIsOpen = false;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnClosedModal = document.querySelector('.close-modal');

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}

btnClosedModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal);

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modalIsOpen = true;
}

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    modalIsOpen = false;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalIsOpen) {
        closeModal();
    }
});





