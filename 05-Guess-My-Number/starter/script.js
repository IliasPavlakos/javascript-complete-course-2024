'use strict';
//
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = '35';
// document.querySelector('.score').textContent = '35';
//
// document.querySelector('.guess').value = 35;
//

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
        document.querySelector('.guess').focus();
    }
})