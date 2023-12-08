// function me (x, y, z) {
//     console.log("Код до return");
//     return x * y * z;
//     console.log('Не виконається');
// }

// let result = me(2, 3, 2);
// console.log(result);

// function my(x, y, z) {
//     console.log(`Результат множення ${x * y * z}`);// 2
// }

// console.log("Лог до виклику функції my");// 1
// my(2, 2, 2);// 2
// console.log('Лог після виклику функції my');// 3


// function count(countFrom = 0, cointTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, cointTo = ${cointTo} ,step = ${step}`);

//     for (let i = countFrom; i <= cointTo; i += step ) {
//         console.log(i);
//     }
// }

// count(1, 5);
// count(2);
// count();

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//     } else {
//         console.log("Операція зняття коштів проведена успішно");
//     }
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300); 
// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//         return;
//     }  
    
//     if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//         return;
//     } 
//         console.log("Операція зняття коштів проведена успішно");
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);
// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");//2
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");//4
//   }

//   function fnB() {
//     console.log("Лог всередині функції fnB");//3
//   }
  
//   console.log("Лог до виклику fnA");//1
//   fnA();
//   console.log("Лог після виклику fnA");//5
// //   


//    const add = function(x, y) {
//     return x + y;
//    }
//    console.log(add(5, 3));
   

//  Задача 1
// напиши функцію calculateTotalPrice(items)
// яка приймає масив цін (чисел) і повертає їх суму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

//     for(const value of cart) {
//         total += value;
// }

// console.log('total:', total);

// const calculateTotalPrice = function (items) {
//     console.log('items всередині функції:', items);

//     let total = 0;

//     for(const item of items) {
//         total += item;
//     }

//     return total;
// }
// const firstItems = ([1, 2, 3]);
// const secondItems = ([5, 10, 15, 20]);
// const thirtItems = ([100, 200, 300]);


// console.log(calculateTotalPrice(firstItems));
// console.log(calculateTotalPrice(secondItems));
// console.log(calculateTotalPrice(thirtItems));

// Задача 2 
// Напиши функцію logItems(items) для перебору і логування масива

// const logItems = function (items) {
//     for(const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавіатура', 'навушники', 'годинник']);

// Задача 3 
//  Напиши функцію findLogin(allLogins, login) для пошуку логіна
// - якщо логіна немає, вивести повідомлення "Користувач [логін] не знайдений"
// -якщо знайшли логін, вивести "Користувач [логін] знайдений"

// const logins = ['m4ngoDone', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// const findLogin = function(allLogins, login) {
//     return logins.includes(loginToFind) 
// ? `Користувач ${loginToFind} знайдений.` 
// : `Користувач ${loginToFind} не знайдений.`;
// }

// const show = findLogin(logins, loginToFind);
// console.log(show);

// задача 4
// Напиши функцію findSmallesNumber(numbers) для пошуку самого маленького числа в масиві
// при умові що числа унікальні і не повторюються

// const findSmallesNumber = function (numbers) {
//     let smallesnumber = numbers[0];
//     for (const number of numbers) {
//         if(number < smallesnumber) {
//             smallesnumber = number;
//         }
//     }
//     return smallesnumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

// Задача 5
//  Напиши функцію changeCase(string) яка змінює регіст
// кожного символу в рядку на протилежний
// Наприклад якщо рядок "JavaScript", то на виході має бути рядок jAVAsCRIPT

// const string = 'qWeRTzxCv';

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase 
//         ? letter.toUpperCase() 
//         : letter.toLowerCase();
//     }

//     return invertedString;
// }

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));
// console.log(changeCase('kATIA'));

//  Задача 6 
// Напиши функцію slugify(string) яка получить рядок і поверта. URL-slug
// Рядок складається тільки з букв і пробілів

// const slugify = function (string) {
    
//      return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Aweasome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// document.body.textContent = slugify('Top 10 benefits of React framework');

// args


// const fn = function () {
//     console.log(arguments);

// const args = Array.from(arguments);

// console.log(args);
//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//     args.shift();
//     args.push(17);
//    console.log(`${a} ${b} ${c}`);
// console.log(args);
    
// };
    
// fn('hello' ,1, 2, 3);
// fn('ME', 1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Задача 7
//  Напиши функцію add складення випадкової кількості аргументів {чисел}
// Операція ... {rest}

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// Задача 8
// Напиши функцію filterNumbers(array [, nimber1, ...]) яка:
// -першим аргументом приймає масив чисел
// -після першого аргументу може бути випадкова кількість інших аргументів які будуть числами
// -Функція повинна вернути новий масив в якому будуть тільки аргументи починаючи з другого
// для яких є аналог в оригінальному масиві

// const filterNumbers = function (array, ...args) {
    

// const uniqueElements = [];

//     for (const elem of array) {
        
//         if (args.includes(elem)) {
//             uniqueElements.push(elem);
//         }
//     }
//    return uniqueElements; 
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));// [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));// [15, 30]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));// [200]

// const add = function(a, b) {
//     console.log(a * b)
// }

// add(2, 3);
 

