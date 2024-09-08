'use strict';

// random number
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
// score
let score = 20;
let highscore = 0;

// display message function.
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

// event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === number) {
    displayMessage('🥳 correct number');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 too high' : '📉 too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 you lost.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.number').textContent = number;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
