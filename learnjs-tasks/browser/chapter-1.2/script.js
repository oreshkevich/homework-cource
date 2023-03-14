'use strict';
// task 1

console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);

// task 2 Вопрос о соседях
// 1 Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
// 2 Нет. Неверно.
