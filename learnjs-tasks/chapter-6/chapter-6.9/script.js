'use strict';
// task 1

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

// task 2

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(alert, 1000);

f1000('test');

// task 3

function debounce(f, ms) {
  let isCool = false;

  return function () {
    if (isCool) return;

    f.apply(this, arguments);

    isCool = true;

    setTimeout(() => (isCool = false), ms);
  };
}
// task 4

function throttle(func, ms) {
  let regulator = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (regulator) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    regulator = true;

    setTimeout(function () {
      regulator = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

