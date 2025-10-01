'use strict';

const counterMaxRow = 10;
const counterMinRow = 2;
const counterMaxColumn = 10;
const counterMinColumn = 2;

let countRow = 4;
let countColumn = 4;

const tbody = document.querySelector('.field tbody');

// додавання рядків внизу

const downAdder = document.querySelectorAll('.append-row button');

downAdder.forEach((row) => {
  row.addEventListener('click', () => {
    const newTrRow = document.createElement('tr');

    for (let i = 0; i < countRow; i++) {
      const newTdRow = document.createElement('td');

      newTrRow.appendChild(newTdRow);
    }

    tbody.appendChild(newTrRow);

    countRow++;

    if (countRow >= counterMaxRow) {
      row.disabled = true;
    }
  });
});

// видалення рядків внизу

const downRemover = document.querySelectorAll('.remove-row button');

downRemover.forEach((row) => {
  row.addEventListener('click', () => {
    const rem = document.querySelectorAll('tr');
    const remover = [...rem];

    for (let r = 0; r < remover.length; r++) {
      remover.remove('td');
    }

    countRow--;

    if (countRow < counterMinRow) {
      row.disabled = true;
    }
  });
});

// додавання рядків вгорі

const rightAdder = document.querySelectorAll('.append-column button');

rightAdder.forEach((row) => {
  row.addEventListener('click', () => {
    const trRow = document.querySelectorAll('tr');
    const masa = [...trRow];

    for (let s = 0; s < masa.length; s++) {}

    for (let i = 0; i < countColumn; i++) {
      const newTdRow = document.createElement('td');

      trRow.appendChild(newTdRow);
    }

    trRow.appendChild(newTrRow);

    countColumn++;

    if (countRow >= counterMaxColumn) {
      row.disabled = true;
    }
  });
});
