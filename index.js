'use strict';

console.log('funguju!');

let tah = 'circle';

let hrac = document.querySelector('.player');

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {
    if (tah === 'circle') {
      event.target.classList.toggle('board__field--circle');
      hrac.innerHTML = `hraje:
      <img class="c-ikon white" src="cross.svg" alt="kolečko" />`;
      tah = 'cross';
      event.target.setAttribute('disabled', true);
    } else if (tah === 'cross') {
      event.target.classList.toggle('board__field--cross');
      hrac.innerHTML = `hraje:
      <img class="c-ikon white" src="circle.svg" alt="kolečko" />`;
      tah = 'circle';
      event.target.setAttribute('disabled', true);
    }
  });
}
