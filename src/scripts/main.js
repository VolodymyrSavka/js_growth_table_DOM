'use strict';

const counterMaxRow = 10;
const counterMinRow = 2;
const counterMaxColumn = 10;
const counterMinColumn = 2;

let countRow = 4;
let countColumn = 4;

const tbody = document.querySelector('.field tbody');

//  додавання рядків внизу (done)

const downAdder = document.querySelectorAll('.append-row');

if (countRow < counterMaxRow) {
  downAdder.forEach((row) => {
    row.addEventListener('click', () => {
      const newTrRow = document.createElement('tr');

      for (let i = 0; i < countColumn; i++) {
        const newTdRow = document.createElement('td');

        newTrRow.appendChild(newTdRow);
      }

      tbody.appendChild(newTrRow);

      countRow++;

      if (countRow === counterMaxRow) {
        row.disabled = true;
      }
    });
  });
}

// видалення рядків внизу (done but not work)

const downRemover = document.querySelectorAll('.remove-row button');

downRemover.forEach((row) => {
  row.addEventListener('click', () => {
    if (countRow > counterMinRow) {
      const rem = document.querySelectorAll('tr');
      const remover = [...rem];

      const lastRow = remover[remover.length - 1];

      lastRow.remove();
      countRow--;
    }

    if (countRow === counterMinRow) {
      row.disabled = true;
    }
  });
});

// додавання рядків справа (done)

const rightAdder = document.querySelectorAll('.append-column');

if (countColumn < counterMaxColumn) {
  rightAdder.forEach((column) => {
    column.addEventListener('click', () => {
      const trColumn = document.querySelectorAll('tr');
      const masa = [...trColumn];

      masa.forEach((col) => {
        const newTdRow = document.createElement('td');

        col.appendChild(newTdRow);
      });
      countColumn++;

      if (countColumn === counterMaxColumn) {
        column.disabled = true;
      }
    });
  });
}

// видалення рядків справа

const rightRemover = document.querySelectorAll('.remove-column button');

rightRemover.forEach((column) => {
  column.addEventListener('click', () => {
    if (countColumn > counterMinColumn) {
      const rem = document.querySelectorAll('tr');

      rem.forEach((element) => {
        const remover = element.querySelectorAll('td');

        const lastColumn = remover[remover.length - 1];

        lastColumn.remove();
      });
      countColumn--;
    }

    if (countColumn === counterMinColumn) {
      column.disabled = true;
    }
  });
});
