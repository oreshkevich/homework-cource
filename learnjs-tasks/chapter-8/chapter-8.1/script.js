'use strict';
// task 1

//1 true, берётся из rabbit.
//2 null, берётся из animal.
//3 undefined, такого свойства больше нет.

// task 2
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

alert(pockets.pen);
alert(bed.glasses);

// task 3 Куда будет произведена запись?

// Ответ: rabbit

// task 4
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

speedy.eat('apple');
alert(speedy.stomach);

alert(lazy.stomach);
