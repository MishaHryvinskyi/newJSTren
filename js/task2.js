//  const clients = ["Mango", "Poly", "Ajax"];

 
// // for (let i = 0; i < clients.length; i += 1) {
// //     console.log(clients[i]);
// // }

// // for (const client of clients) {
// //     console.log(client);
// // }

// const clientsNameToFind = 'Poly';
// let  message = 'Клієнт з таким імям відсутній в базі даних!';

// for (const client of clients) {
//     if (client === clientsNameToFind) {
//         message = "Клієнт з таким імям є в базі даних!";
//        break;
//     }
    
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i +=1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, -4));
// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 4);
// console.log('scores:', scores);
// console.log('deletedScores:', deletedScores);
// const colors = ['red', 'green', 'blue'];
// console.log(colors);
// colors.splice(1, 0, "purple");
// console.log(colors);

// const clients = ["Mango", "Poly", "Ajax"];
// clients.push("Vohra");
// clients[3] = "Пушь";
// console.log(clients);
// clients.pop();
// console.log(clients);

//  let a = 10;
//  let b = a;
//  console.log(a, b);
//  console.log(a === b);
//  a = 30;
//  console.log(a, b);
//  console.log(a === b);

//  const A = [1, 2, 3,];
//  const B = A;
//  A[0] = 10;
//  console.log(A, B);
//  console.log(A === B);

// console.log(5 === 5);
// console.log([5] === [5]);

//  const friends = ['Mango', 'Kiws', 'Poly', 'Ajax'];
// for (let i = 0; i < friends.length; i += 1) {
//     console.log("for-", friends[i]);
// }

// for(const friend of friends) {
//     console.log("for of:",friend);
// }

// Задача1  підрахувати загальну суму покупок в корзині

//  const cart = [54, 28, 105, 70, 92, 17 ,120];
// // 2 зробити перемінну total
//  let total = 0;
// console.log('cart:', cart);

// // 1 перебираємо масив
// for(const car of cart){
//     total += car;
// }
// // 3 на кожній ітерації доплюсувати до total
// console.log("Загальна сума всіх чисел в cart:", total);

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log('total:', total);

//  console.log('cart:', cart);
//  for(let i = 0; i < cart.length; i +=1) {
//     cart[i] = Math.round(cart[i] * 1.1);
//  }
// console.log('cart:', cart);

// Задача 2 
// Напиши скрипт якийпідраховує суму всіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let newNumber = [];
// let newNum = [];
// let totalP = 0;
// let totalM = 0;
// for(const number of numbers) {
    
//     if(number % 2 === 0) {
//         newNumber.push(number);
//         totalP += number;
//     } else {
//         newNum.push(number);
//         totalM += number;
//     }
// }
// console.log('Парні числа:', newNumber);
// console.log('Непарні числа:', newNum);

// console.log('Сума всіх парних чисел', totalP);
// console.log('Сума всіх непарних чисел',totalM);

//  задача 4
//  Напиши скрипт пошуку логіна
// -якщо логіну немає вивести повідомлення 'Користувач [логін] не знайдений.'
// -якщо знайшли логін вивести 'Користувач [логін] знайдений'.

// спочатку через for
// потім через for...of
// Логіка break
// Метод includes() з тернарним оператором

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scut', 'aj4xth3m4n'];
// const loginToFind = 'poly1scut';
// let message = '';

// За допомогою for()
// for (let i = 0; i < logins.length; i += 1) {
//    const login = logins[i];

//    console.log('Login:', login);
//    console.log(`${login} === ${loginToFind}: `, login === loginToFind);
   
//     if (login === loginToFind) {
//         console.log('Ура, Знайшли!');
//         message = `Користувач ${loginToFind} знайдений.`;
//         break;
//     } 
//         message = `Користувач ${loginToFind} не знайдений.`;
// }
// console.log(message);

// за допомогою for.of
// for (const login of logins) {
//     console.log('Login:', login);
//        console.log(`${login} === ${loginToFind}: `, login === loginToFind);
       
//         if (login === loginToFind) {
//             console.log('Ура, Знайшли!');
//             message = `Користувач ${loginToFind} знайдений.`;
//             break;
//         } 
// }

// console.log(logins.includes(loginToFind));
// Тернарний оператор
// const message = logins.includes(loginToFind) 
// ? `Користувач ${loginToFind} знайдений.` 
// : `Користувач ${loginToFind} не знайдений.`;
// console.log(message);

//  Задача 3
// напиши скрипт пошуку самого маленького числа в масиві, 
// при умові що числа унікальні і не повторюються

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// let biggerNumber = numbers[0];
// let sum = 0;

// for(const number of numbers) {
//  sum += number;
//     if(number < smallestNumber) {
//         smallestNumber = number;
//     } else if(number > biggerNumber) {
//         biggerNumber = number;
//     }
// }

// console.log("smallestNumber:", smallestNumber);
// console.log("biggerNumber:", biggerNumber);
// console.log("sum:", sum);

// Задача 4
// Написати алгоритм який обєднує всі елементи масива в однострокове значення
// елементів може бути будь яка кількість
// нехай елементи масиву в рядку будуть обєднані комою
// спочатку через for
// потім через join()

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string ='';

// for(const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

// console.log(string);

//  let newFriends = friends.join(',');
//  console.log(newFriends);

//  Задача 5
// напиши скрипт який змінює регістр кожного символу в рядку на протилежний

// const string = 'JavaScript';
// const letters = string.split('');
// console.log(letters);
// let invertedString = '';

// for(const letter of letters) {

// //     if(letter === letter.toLowerCase()) {
// //        invertedString += letter.toUpperCase();
// //     } else {
// //         invertedString += letter.toLowerCase();
// //     }
// invertedString += 
// letter === letter.toLowerCase() 
// ? letter.toUpperCase() 
// : letter.toLowerCase();
//  }


// console.log(invertedString);
// // console.log(string);

// Задача 6
// Робимо slug в URL із назви статті (наприклад на dev.to)
// Заголовок статті складається тільки з букв і пробілів

// -нормалізує рядок
// -розбиває по словах
// -зшиває в рядок з розділювачем

// const title = 'Top 10 benefits of React framework';
// // const normalizedTitle = title.toLowerCase();
// // const words = normalizedTitle.split(' ');
// // const slug = words.join('-');
// // console.log(slug);
// // document.body.textContent = slug;

// const slug1 = title.toLowerCase().split(' ').join('-'); // цепочка викликів
// console.log(slug1);

// Задача 7
// Напиши скрипт який який рахує суму елементів двух масивів

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const allArray = array1.concat(array2);
// let total = 0;

// for(const array of allArray) {
//     total += array;
// }
 
// // for(const r1 of array1) {
// //     total += r1;
// // }
// // for(const r2 of array2) {
// //     total += r2;
// // }
//  console.log('Загальна сума двох масивів:', total);


// Задача 8
//  працюємо з карточками в трело
// -метод splice()+
// -видалити+
// -добавити+
// -обновити
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];
// console.table(cards);
// // видаляємо по індексу indexOf()
// const cardToRemove = cards.splice(2, 1);

// console.table(cards);
// console.table('Видалена карточка', cardToRemove);

// const cardToInsert = cards.splice(2, 0, 'Карточка-6');
// console.table(cards);

// cards.splice(3, 1, 'Оновлена карточка-4');
// console.table(cards)


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients[lastElementIndex]);

// for(let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i])
// }

// const name = "Matata";
// const splitName = name.split('');
// console.log(splitName);

// const mus = [];

// for(const splitNam of splitName) {
//     mus.push(splitNam)
// }

// console.log("mus", mus)
// console.log(mus.join(""))

// const words = ["Слава", "Ісусу", "Христу"];
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("-"))

// const deletedM = clients.splice(1,2);
// console.log(clients);
// console.log(deletedM);

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//       return "Your order is empty!";
//     } else if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
//   }

//   console.log(checkStorage(100, 130))
  
//  const friends = ["Poly", "Mango", "Kiwi", "Ajax",];
// // console.table(friends);
// // const lastIndex = friends.length - 1;
// // console.log(lastIndex);

// for (const friend of friends) {
//   console.log("for", friend)
// }
// console.log("====")
// for(let i = 0; i <= friends.length - 1; i += 1) {
//   console.log("for...of",friends[i])
// }

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let totalCartSum = 0;
// for(let i = 0; i < cart.length; i += 1) {
//   // totalCartSum += cart[i]
//   cart[i] *= 2;
// }
// console.log(cart)
// console.log(totalCartSum)

// for(const car of cart) {
//   totalCartSum += car;
// }
// console.log("for...of", totalCartSum)

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let totalW = 0;
// let totalD = 0;
// // for (let i = 0; i < numbers.length; i += 1) {
// //     if(!(numbers[i] % 2)) {
// //         total += numbers[i]
// //     }
// // }

// // console.log(total)

// for (const number of numbers) {
//     if(!(number % 2)) {
//         totalW += number;
//     } else {
//         totalD += number;
//     }
// }
// console.log(totalD);
// console.log(totalW);

// const numbers = [51, 18, 13, 24, 7,  85, 19];
// let smallNumber = numbers[0];

// for(const number of numbers) {

//     if(number < smallNumber) {
//        smallNumber = number;
//     }
// }
// console.log(smallNumber)

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const message = friends.join(",");
// console.log(message)

// const string = 'JavaScript';

// const letters = string.split('');
// let inversLetter = '';

// for(const letter of letters) {
//     // if(letter === letter.toLowerCase()){
//     //     inversLetter += letter.toUpperCase()
//     // } else {
//     //     inversLetter += letter.toLowerCase()
//     // }
//    letter === letter.toLowerCase() ? inversLetter += letter.toUpperCase() : inversLetter += letter.toLowerCase();
// }
// console.log(inversLetter)

// const title = "Катерина зорро Австрійська кругляк";
// const nam = title.toLowerCase().split(" ").join("=")
// console.log(nam)

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for(const number of numbers) {
//     total += number
// }
// console.log(total)

// const cards = ['1', '2', '3', '4', '5'];
// // cards.splice(1,1)
// cards.splice(3, 0, "makarena", "56");
// cards.splice(4, 1, "daw")
// console.log(cards);

//  const arr = [1, 'Hello', null, true, [1, 2, 3]];
//  const lastItemInArr = arr.length - 1;

// //  for(let i = 0; i < arr.length; i += 1) {
// //     if (Array.isArray(arr[i])) {
// //         for(let j = 0; j < arr[i].length; j += 1) {
// //             console.log("arr[4]", arr[i][j]);
// //         }
// //         continue;
// //     }
// //     console.log("arr", arr[i])
// //  }

// for(const item of arr) {
//     for(const ite of arr[arr.length - 1]) {
//         console.log(ite)
//     }
// }

// function getExtremeElements(array) {
//     return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['daw', 'baw', 'qw', 'ew', 'ew', 'qw']));

// function splitMessage(message, delimiter) {
//     let words =  message.split(delimiter);
//     return words;
//   }
//   console.log(splitMessage('best_for_week', '_'))

// const array = [1, "Hello", null, true, [1, 2, 3]];
// // перебирання масиву циклом while
// let i = 0;
// while(i < array.length) {
//     if (typeof array[i] === "string") {
//         array[i] = "Чупакабра!";
//     }
//     i += 1;
// }

// console.log(array);

// const arr = [1, 2, 3];
// arr.length = 4;
// console.log(arr)

// for(const ar of arr) {
//     console.log(ar)
// }

// const str = "Hello world";
// const arr = str.split(" ").reverse().join(" ");
// console.log(str)
// console.log(arr)

// const arr = ['hello', 'world'];
// const idx = arr.indexOf('world')
// console.log(idx)

// const idxs = arr.includes('world');
// console.log(idxs);

// const array = ['hello', 'world', 'JS'];
// // push pop
// // array.push('Так');
// // array.pop();
// // // shift unshift
// // array.unshift('так',[1, 2], false);
// // // array.shift();
// // console.log(array);
// // // slice
// // const result = array.slice(1, 3)
// // console.log(result)
// // console.log("2",array);
// // splice 
// // console.log(array);
// // array.splice(1,1)
// // console.log(array);
// // array.splice(1,1, "from","react","node")
// // console.log(array);
// const idx = array.indexOf("world");
// const result = array.splice(idx, 1, "Макарена");
// console.log(array);
// console.log(result);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// const arrConcat = arr1.concat(arr2);
// console.log(arrConcat)

// const genres = ["Jazz", "Blues"];
// console.log(genres)
// genres.push("Рок-н-рол");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const first = genres.shift();
// console.log(first);
// console.log(genres);
// genres.unshift("Country", "Reggae");
// console.log(genres);