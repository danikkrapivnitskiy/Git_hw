/*
2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
  Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
  Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.

3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк),
    который будет использоваться для проверки каждого числа на соответствие требованиям.
    Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
    Пример функции:
    const numbers = [1, -5, 2, 3, 4, 133];
    filter(numbers, (n) => n > 3); // [4, 133]
    filter(numbers, (n) => n % 2 == 0); // [2, 4]
    Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.
 */
//2
const object = {
  name: "Js",
  surname: "TSov",
  salary: 100000,
  grade: "junior",
  doNothing: true,
  projectNames: ["Nothing", "Meeting", "Break"],
}

function getCountTypeOf(object: object) {
  const newObj = {
    string: countKeys(object, "string"),
    number: countKeys(object, "number"),
    boolean: countKeys(object, "boolean"),
  }
  return newObj
}

function countKeys(object: object, type: string): number {
  return Object.values(object).filter(entry => typeof entry === type).length
}

console.log(getCountTypeOf(object)) // { string: 3, number: 1, boolean: 1 }

//3
type NumberPredicate = (number: number) => boolean;
const numbers = [1, -5, 2, 3, 4, 133];
function filter(array: Array<number>, callback: NumberPredicate) {
  return array.filter(callback);
}

console.log(filter(numbers, (n) => n > 3));
