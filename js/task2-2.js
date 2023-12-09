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

// const fnA = function () {
// console.log("Виклик функції A");
// fnB();
// };
// const fnB = function () {
// console.log("Виклик функції B");
// fnC();
// };
// const fnC = function () {
// console.log("Виклик функції C");
// console.log(value);
// };
// fnA();

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// const calculateTotalPrice = function (item) {
//     let total = 0;
//     for(const value of item) {
//         total += value;
//     }
//     return total;
// }

// console.log(calculateTotalPrice([2, 3, 4, 5, 6]))
// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));

// const logItems = function(items) {
//     for(const value of items) {
//        console.log(value)
//     }
// }

// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5,]);

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

// // const findLogin = function (allLogin, login) {
// //     if(allLogin.includes(login)) {
// //         return `Логін ${login} знайдено`;
// //     }
// //     return `логін ${login} не найдено`;
// // };

// const findLogin = function (allLogin, login) {
//     return allLogin.includes(login)
//     ? `Логін ${login} знайдено`
//     : `логін ${login} не найдено`;
// };

// console.log(findLogin(logins, "m4ngoDoge"));
// console.log(findLogin(logins, "k1widab3st"));
// console.log(findLogin(logins, "makarena"));
// console.log(findLogin(logins, "poly1scute"));

// document.body.textContent = findLogin(logins, "m4ngoDoge");

// const findSmallNumber = function (items) {
//     let smallesnumber = items[0];

//     for(const number of items) {
//         if (number < smallesnumber) {
//              smallesnumber = number;
//         };
//     };
//     return smallesnumber;
// };

// console.log(findSmallNumber([41, 18, 13, 24, 7, 85, 19]))
// console.log(findSmallNumber([5, 12, 122, 243, 7, -12, -91]))

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertefString = "";

//     for(const letter of letters) {
//      const isInLowerCase = letter === letter.toLowerCase();

//      invertefString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     };

//     return invertefString;
// };

// console.log(changeCase("КаТеРиНа"));
// console.log(changeCase("MaNgO"));
// console.log(changeCase("aJaX"));

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

// const slugify = function (word) {
//     return word.toLowerCase().split(" ").join("-");
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify("Катерина зорро Австрійська"));

// const fn = function (...args) {
//     console.log(arguments);
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const add = function (...args) {
//     console.log(args);
//     let total = 0;
//     for(const arg of args) {
//         total += arg;
//     };
//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// const filterNumbers = function(array, ...args) {
//      const newArr = [];
//      for(const arg of args) {
//         if(array.includes(arg)) {
//            newArr.push(arg)
//         }
//      }

//      return newArr;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];
// const arr2 = [8, 9, 10, 11];

// for(let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i] * 2;
// }

// const calculeteArr = function (arr) {
//     let sunArr = 0;
//     for(let i = 0; i < arr.length; i += 1) {
//         arr[i] * 2;
//         sunArr += arr[i]
//     }
//     return sunArr;
// }

// console.log(calculeteArr(arr));
// console.log(calculeteArr(arr1));
// console.log(calculeteArr(arr2));

// function findLongestWord(string) {
//     const arr = string.split(" ");
//     let biggerLetter = '';

//     for(const item of arr) {
//         if( item.length > biggerLetter.length) {
//             biggerLetter = item;
//         };
//     };
//     return biggerLetter;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for(let i = min; i <= max; i += 1) {
//       numbers.push(i);
//     }
//     return numbers;
//   }
  
//   console.log(createArrayOfNumbers(1, 6))

// function filterArray(numbers, value) {
//    const newArr = [];
//    for(const number of numbers) {
//     if(number > value) {
//         newArr.push(number)
//     }
//    }
//    return newArr
//  };
//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));
//  console.log(filterArray([1, 2, 3, 4, 5], 5));
//  console.log(filterArray([12, 24, 8, 41, 76], 38))

// function getCommonElements(array1, array2) {
//     const w = []
//     const b = array1.concat(array2);
//     for(const item of b) {
//         if(item === item) {
//             console.log(item)
//         }
//     }
    
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))

// https://codeguida.com/post/199

// function createString(name, year) {
//     const result = add(year);
//     return `${name} years ${result}`
// }

// console.log(createString("Vohra", [1, 2, 3]));
// console.log(createString("Gaba", [3, 2, 5]));
// console.log(createString("Push-Push", [14, 4, 23]));

// function add (arr) {
//     let sum = 0;
//     for(const num of arr) {
//         sum += num;
//     };
//     return sum;
// };

// function calcBMI (weight, height) {
//     weight = Number(weight.replace(",", "."));
//     height = Number(height.replace(",", "."));
//     return Number((weight / height ** 2).toFixed(1));
// }

// console.log((calcBMI('80', '1.82')));
// console.log((calcBMI('92', '1,82')));
// console.log((calcBMI('88,3', '1,75')));

// function min (a, b) {
//    return a < b ? a : b;
// };

// console.log(min(2, 5));

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(" ");
//     return Number(dimensions[0]) * Number(dimensions[1]);
// };
// console.log(getRectArea('8 11'));
// console.log(getRectArea('20 40'));
// console.log(getRectArea('5 10'));
// console.log(getRectArea('46 11'));

// function logItems(items) {
//     for(let i = 0, n = 1; i < items.length; i += 1, n += 1) {
//         console.log(`${n} - ${items[i]}`)
//     }
// };

// console.log(logItems(["Mango", "Poly", "Ajax"]));

// function printContactInfo (names, phones) {
//     names = names.split(",");
//     phones = phones.split(",");
//     for(let i = 0; i < names.length, i < phones.length; i += 1) {
//         console.log(`${names[i]} - ${phones[i]}`);
//     };
// };

// console.log(printContactInfo(
//     'Jacob,William,Solomon,Artemius', 
//     "890012345,89001112233,890055566377,890055566300"
//     ));

// function findLargestNumber(number) {
//     let biggerNumber = number[0];
//     for(const num of number) {
//         if(biggerNumber < num) {
//             biggerNumber = num;
//         }
//     }
//     return biggerNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findLargestNumber([49, 4, 7, 83, 12]));

// function findLargestNumber() {

//     let biggerNumber = arguments[0];

//     for(const num of arguments) {
//         if(biggerNumber < num) {
//             biggerNumber = num;
//         }
//     }
//     return biggerNumber;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
// console.log(findLargestNumber(49, 4, 7, 83, 12));

// function calAverage () {
    
//     let sumArr = 0;
//     for(const arg of arguments) {
//         sumArr += arg
//     }
//     return sumArr / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));


// Напиши функцію formatTime(minute) яка переведе значення minutes (кількість хвилин)
// у рядок у форматі години і хвилини HH:MM
// function formatTime(minute) {

//     const hours = Math.floor(minute / 60);
//     minute = minute % 60;
//     return `${hours.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
// }
// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// Напиши функції длф роботи з колекцією навчальних курсів courses:
// addCourse(name) -додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(name) - змінює імя на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//     if(courses.includes(name)) {
//         return "Ви вже маєте такий курс";
//     };
//     return courses.push(name);
// };

// function removeCourse(name) {
//     if(courses.includes(name)) {
//         const find = courses.indexOf(name);
//         courses.splice(find, 1);
//         return;
//     }; 
//     return "Такого курсу немає";
// };

// function updateCourse(oldName, newName) {
//     if(courses.includes(oldName)) {
//         const find = courses.indexOf(oldName);
//         courses.splice(find, 1, newName);
//         return;
//     }; 
//     return "Такого курсу немає";
// };

// console.log(addCourse('Express'));
// updateCourse("CSS", "NodeJS");
// removeCourse('React');

// console.log(courses);
