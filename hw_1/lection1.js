"use strict";

//let

//const

//var

let numberOfStudents = 75;
console.log(numberOfStudents);

const numberOfLection = 24;
console.log(numberOfLection);

const PORT = 8080;

//TODO: data types

/*
Примитивные типы
1. number - число от -(2^53) до (2^53)
2. string
3. boolean
4. undefined - ЗНАЧЕНИЕ НЕ ПРИСВОЕНО
5. null - ЗНАЧЕНИЯ НЕТ
6. BigInt - число за границами [-(2^53), (2^53)]

Сложные типы
7. object - структура данных типа пар ключ-значение const student = {name : 'Oksana'. age : 18}
8. symbol - уникальный идентификатор для ключа объекта

const studentNames = ['Daniil', 'Dzmitry', 'Elena'] [0] => 'Daniil', [1] = 'Dzmitry'
*/


// TO string
let value = 10;
console.log(typeof value);
console.log(typeof typeof value);

let students = 43
students = String(students)
console.log(students)

let isOlegHandIsRased = true;
isOlegHandIsRased = String(isOlegHandIsRased)
console.log(isOlegHandIsRased)
console.log(typeof isOlegHandIsRased)

// To number

let numberOfBooks = "" + 43.512;
numberOfBooks = Number(numberOfBooks);
let numberOfBooksInt = parseInt(numberOfBooks);
let numberOfBooksFloat = parseFloat(numberOfBooks);

console.log(numberOfBooks);
console.log(numberOfBooksInt);
console.log(numberOfBooksFloat);


let studentName = "Ksenia";

const numberedKsenia = Number(studentName);
// const numberedKsenia = +studentName;
console.log(numberedKsenia);
console.log(typeof numberedKsenia);

/*
To number
1. number => number
2. string => '43' => 43, 'a43' => NaN, '' => 0
3. boolean - true => 1, false => 0
4. undefined - => NaN
5. null - => 0
*/

/*
To boolean

string - "" => falese, '1' => true
number => number !=0 => true, 0 => false
null => false
undefined => false
Nan => false
*/

console.log(Boolean(0));
console.log(Boolean("0"));

/*
Falsy значения
- 0
- ""
- null
- undefined
- Nan
*/

console.log("4" + 2);
console.log("1" + 1 + 1);
console.log("2" - 1);

console.log(5 % 2);
console.log(2 ** 2);