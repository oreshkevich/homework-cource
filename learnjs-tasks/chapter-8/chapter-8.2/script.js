'use strict';
// task 1
// 1 - true
// 2 - false
// 3 - true
// 4 - undefined

// task 2
function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name);
