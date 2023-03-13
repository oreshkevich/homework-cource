'use strict';
// task 1
// Ответ: 0, 1;

// task 2

// 1
// 2
// 1

// task 3
//  будет ошибка.

// task 4

function sum(a) {
  let c = 0;
  return function (b) {
    return (c = a + b);
  };
}

console.log(sum(1)(2));

// task 5
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));

// task 6

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inArray([1, 2, 10])));

// task 7
let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

users.sort(byField('name'));
users.forEach((user) => console.log(user.name));

users.sort(byField('age'));
users.forEach((user) => console.log(user.name));

// taskr 8
// Ответ: внутри функций shooter нет локальной переменной i
