'use strict';

console.log('funguju!');

let tah = 'circle';

let hrac = document.querySelector('.player');

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {
    if (tah === 'circle') {
      event.target.classList.add('board__field--circle');
      hrac.src = `img/cross.svg`;
      hrac.alt = `hraje křížek`;
      tah = `cross`;
      event.target.disabled = true;
    } else if (tah === 'cross') {
      event.target.classList.add('board__field--cross');
      hrac.src = `img/circle.svg`;
      hrac.alt = `hraje kolečko`;
      tah = 'circle';
      event.target.disabled = true;
    }
    console.log(getPosition(buttons[i]));

    // vypisuje na jaký button se kliklo
  });
}
// js kód, který udává vítěze
const hraciPole = 10; // 10x10

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < buttons.length) {
    if (field === buttons[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / hraciPole),
    column: fieldIndex % hraciPole,
  };
};
