/**
 * 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.

4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

 */
//1
  const sentenseStr = "I am the best AQA ever!";
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const mapToNumber = [...sentenseStr].map(symbol => alphabet.includes(symbol.toLowerCase()) ? alphabet.indexOf(symbol.toLowerCase()) : symbol)
  console.log(...mapToNumber);

//2
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
  const avgPrice = prices.reduce((result, number) => result += number / prices.length, 0).toFixed(2);
  console.log(avgPrice)

//3
  const words = ["sdfsdfsdfaaa", "lknjckbvhjibeiru", "oiusdfi"]
  const filteredArr = words.reduce((result, word) => {
    const vowels = "aeiou";
    let count = 0;
    for (let i of [...word]) {
        if (vowels.includes(i.toLowerCase())) {
            count++;
        }
    }
    result.set(word, count);
    return result;
  }, new Map());

  const afterMap = [...filteredArr.entries()];
  let max = 0;
  let sortedArray = [];
  for (let i = 0; i < afterMap.length; i++) {
    if (afterMap[i][1] >= max) {
        sortedArray.unshift(afterMap[i][0]);
    }
  }

  console.log(sortedArray);

//4
const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
let count = 0;
const arrFlat = arr.flat(Infinity).map(symbol => symbol === ")" ? count++ : count--);
console.log(count === 0);
/** Another solution */
let countOpen = 0;
let countClosed = 0;
for (const i of arrFlat) {
    if (i === ")") {
        countClosed++;
    } else if (i === "(") {
        countOpen++;
    }
}
console.log(countOpen === countClosed);
