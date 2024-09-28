'use strict';
//
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = '35';
// document.querySelector('.score').textContent = '35';
//
// document.querySelector('.guess').value = 35;
//
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber.toString();

let score = 3;
document.querySelector('.score').textContent = score.toString();

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
        document.querySelector('.guess').focus();
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
    } else if(guess > secretNumber) {
        if(score === 0){
            document.querySelector('.message').textContent = 'You lost!'
        }else{
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score.toString();
        }
    }else if(guess < secretNumber) {
        if(score === 0){
            document.querySelector('.message').textContent = 'You lost!'
        }else{
            document.querySelector('.message').textContent = 'Too low!'
            score--;
            document.querySelector('.score').textContent = score.toString();
        }
    }
})