'use strict';
// task 1

function printNumbers(from, to) {
  let current = from;

  let timer = setInterval(function () {
    alert(current);
    if (current == to) {
      clearInterval(timer);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);

function printNumbersTwo(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbersTwo(5, 10);

// task 2

// Последним значением i будет: 100000000
