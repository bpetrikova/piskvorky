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
  for (let i = 0; i < buttons.length; i++) {
    if (field === buttons[i]) {
      return {
        row: Math.floor(i / hraciPole),
        column: i % hraciPole,
      };
    }
  }
};
// zjišťuji pozici

const getField = (row, column) => buttons[row * 10 + column];
// funkce která ukazuje příslušný prvek

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
