'use strict';
// task 1

// Ответ: null

// task 2
// Ответ: Вася.

// task 3
// Ответ: undefined
// Результатом работы bind является другой объект. У него уже нет свойства test

// task 4
function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// task 5
function askPasswordTwo(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let userTwo = {
  name: 'John',

  login(result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};
askPasswordTwo(userTwo.login.bind(user, true), userTwo.login.bind(user, false));
