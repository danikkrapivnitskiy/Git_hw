/*
1. Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно.
   Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах).
   И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'.
   Задачу решить через замыкания
    Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'
 */

//1
function counter(n) {
    let arr = []
    return () => {
        let random = getRandomNumber(1, n);
        if (arr.length === n) {
            console.log('All numbers were received');
        } else {
            arr.push(random);
            console.log(random);
        }
    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const count = counter(5);
count()
count()
count()
count()
count()
count()
count()
