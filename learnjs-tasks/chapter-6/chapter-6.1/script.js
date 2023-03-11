'use strict';
// task 1 Вычислить сумму чисел до данного

function sumToFor(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToFor(100));

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));

function sumThree(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumThree(100));
// по формуле работает быстрее всех

// task 2 Вычислить факториал

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

// task 3 Числа Фибоначчи

function fib(n) {
  let one = 1;
  let two = 1;
  for (let i = 3; i <= n; i++) {
    let c = one + two;
    one = two;
    two = c;
  }
  return two;
}

console.log(fib(77));

// task 4 Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let first = list;

  while (first) {
    console.log(first.value);
    first = first.next;
  }
}
printList(list);

function recursion(list) {}

function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

printListRecursion(list);

// task 5 Вывод односвязного списка в обратном порядке

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);

function printReverseList(list) {
  let arr = [];
  let one = list;

  while (one) {
    arr.push(one.value);
    one = one.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);
