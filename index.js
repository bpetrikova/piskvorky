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
      vyhra(event.target);
    } else if (tah === 'cross') {
      event.target.classList.add('board__field--cross');
      hrac.src = `img/circle.svg`;
      hrac.alt = `hraje kolečko`;
      tah = 'circle';
      event.target.disabled = true;
      vyhra(event.target);
    }
    console.log('Get position', getPosition(event.target));
    console.log('Get symbol', getSymbol(event.target));
    console.log('Winning', isWinningMove(event.target));

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
    i < hraciPole - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= 5) {
    return true;
  }

  // 5 tam je, protože vždy potřebujeme 5 aby hráč vyhrál

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
    i < hraciPole - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= 5) {
    return true;
  }

  return false;
};

const vyhra = (field) => {
  if (isWinningMove(field) === true) {
    if (getSymbol(field) === 'circle') {
      window.confirm('Vyhrálo kolečko! Co takhle odvetu?');
      location.reload();
    } else if (getSymbol(field) === 'cross') {
      window.confirm('Vyhrál křížek! Co takhle odvetu?');
      location.reload();
    }
  }
};
