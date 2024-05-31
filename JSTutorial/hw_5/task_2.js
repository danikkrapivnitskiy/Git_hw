/**
 * 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
  Если таких слов несколько - выводит их все.

3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

 */

// 1.
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizza = ['Peperoni', 'hawai', 'machette', 'caprioni', 'diablo']

function checkNotExistCompetitor(pizzaArray) {
    const array = []

    for (let i of pizzaArray) {
        if (!competitorPizzas.some(pizza => pizza.toLowerCase() === i.toLowerCase())) {
            array.push(i);
        }
    }

    return array.length > 0 ? array : null
}

console.log(checkNotExistCompetitor(myPizza))


//2.

function getLargestWord(sentense) {
    const array = sentense.split(" ")
    let largestWord = []
    let maxCount = 0;

    for (let word of array) {
        if (word.length > maxCount) {
            largestWord = []
            largestWord.push(word);
            maxCount = word.length;
        } else if (word.length == maxCount) largestWord.push(word);
    }
    
    return largestWord.length > 0 ? largestWord : null
}

console.log(getLargestWord("Big VeryBig 2timesbigger 2timesbigger"))

//3.
const arr = [1, 3, 5, 3, 1, 6, 10]

function removeDublicates(array) {
    const newArray = []

    for (let symbol of array) {
        if (!newArray.includes(symbol) && !isNaN(symbol)) {
            newArray.push(symbol)
        }
    }

    return newArray.length > 0 ? newArray : null
}

console.log(removeDublicates(arr))

//4.

function checkPalindrom(word) {
    const arr = [...word]
    const reversedArray = arr.slice().reverse();
    let isEqual = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArray[i]) {
        isEqual = false;
        break;
        }
    }
    return isEqual;
}

console.log(checkPalindrom("anna"))
console.log(checkPalindrom("notAnna"))