'use strict';
// task 1
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  alert(key);
}

alert(dictionary);

// task 2

// только первый вызов выведет Rabbit, а остальные – undefined:
