'use strict';
// task 1

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}
// task 2
function sum(a) {
  let currentSum = a;

  function fan(b) {
    currentSum += b;
    return fan;
  }

  fan.toString = function () {
    return currentSum;
  };

  return fan;
}

alert(sum(1)(2));
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));

