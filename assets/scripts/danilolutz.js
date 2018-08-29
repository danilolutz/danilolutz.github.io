'use strict';

console.log('GitHub: https://github.com/danilolutz');
console.log('Medium: https://medium.com/@danilolutz');
console.log('Twitter: https://twitter.com/danilolutz');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

let image = document.querySelector('img');
let darkMode = parseInt(localStorage.getItem('dark-mode'));

if (darkMode) {
  document.body.classList.add('dark-mode');
}

image.addEventListener('click', () => {
  darkMode = darkMode === 1 ? 0 : 1;
  localStorage.setItem('dark-mode', darkMode);
  document.body.classList.toggle('dark-mode');
});
