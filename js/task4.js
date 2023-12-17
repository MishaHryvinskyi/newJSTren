// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
//   }

//   function me(name) {
//     return `Пішов ти ${name} на хуй зі своїм телеканалом.`;
//   }

//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }

//  registerGuest("Манго", greet);
// //  console.log(greet("Манго"));
   
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }

//   function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }

//   registerGuest("Манго",  function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`)
//   });


// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//   console.log("Це лог при виклиці функції fnB", number);
// };

// fnA('Качеча!!!', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };


// // стрілочна функція
// doMath(10, 5,  (x, y) => x / y);
// // літерал функції
// doMath(5, 3, function (x, y) {
//   return x * y;
// });
// doMath(20, 8, sub);
// doMath(3, 3, add);

// const buttonRef = document.querySelector('.js-button');
// buttonRef.style.backgroundColor = "teal";
// buttonRef.style.padding = "10px";
// buttonRef.style.borderRadius = "10px";
// buttonRef.style.border = "none";
// buttonRef.style.color = "white";

// const handleBtnClick = function () {
//   console.log('Клік по кнопці' + Date.now());
//   document.body.style.backgroundColor = "teal";  
// };



// buttonRef.addEventListener('click', handleBtnClick);

// const callbacks = function () {
//   console.log("Через 3 секунди в середині колбека в таймавті");
// };

// const me = function () {
//   console.log("Качечий");
// }


// setTimeout(me, 1000);
// setTimeout(callbacks, 2000);
// console.log("Перед таймавтом");
// console.log("Після таймавту");


//  ФУНКЦІЯ ФІЛЬТЕР

// const fillter = (array, test) => {
// const fillteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if(passed) {
//       fillteredArray.push(el);
//     }
//   }
//   return fillteredArray;
// };

// const callback1 = value => value >= 3;

// const callback2 = value => value <= 4;

// const callback3 =  value =>  value % 2 === 0;

// // 1 Треба передати функцію
// // 2 Функція получає елемент масиву
// // 3 якщо елемент масива задовільняє умову то функція повертає true
// // 4 якщо елемент масиву не задовільняє умову то функція повертає false


// const r1 = fillter([1, 2, 3, 4, 5], callback1);
// console.log(r1);
// const r2 =fillter([1, 2, 3, 4, 5, 6, 7, 8 ], callback2);
// console.log(r2);
// const r3 = fillter([1, 2, 3, 4, 5, 6, 7, 8 ], callback3);
// console.log(r3);

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(6, 4, 10));

// const addArrow =  (a, b, c) =>  a + b + c;

// console.log("Стрілочна функція", addArrow(2, 5, 12));

// const me = () => ({ arrow: 5 });
// console.log(me())

//  arrows function

// const add = (a, b) => a + b;
// console.log(add(2,3));

// const logMessage = message => message;


// console.log(logMessage('me'));

// const greet = (...args) => { 
//   console.log(args);
// }
// greet(1, 2, 3, 4, 5, 6);


// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
  
// };

// console.log(new User('Mango', 20));





// Задача 1 колбек функції
// Напишіть наступні функції

//* createProduct(obj, callback) - приймає обєкт товару без id, а
// також колбек. Функція створює обєкт товару, додаючи йому унікальний
// ідентефікатор у властивість id та викликає колбек передаючи йому створений обєкт

//* logproduct(product) - колбек приймає обєкт продукту і логуючи його в консоль

// *logTotalPrice(product) - колбек, що приймає обєкт продукту і
// логіює загальну вартість товару в консоль
// const products = [
//   { name: 'apple', 
//     price: 15,
//     quantity: 30,
//   },
//   { name: 'cherry', 
//     price: 40,
//     quantity: 50,
//   },
// ];
// let total = 0;

// const createProduct = function (obj, callback) {
//   const product = { ...obj, id: Date.now() }; 
//    callback(product);
// };

// function logproduct ({ name, price, quantity }) {
//   console.log(`
//   Назва продукту: ${name}. 
//   Кількості на складі ${quantity}. 
//   Ціна за кілограм ${price}. грн
//   `);
// };

// function logTotalPrice ({ name, price, quantity }) {
//   console.log(`
//   Загальна вартість всіх 
//   товарів ${name} на складі
//   становить ${price * quantity} грн
//   `);
// };

// createProduct(products[0], logTotalPrice);
// createProduct(products[0], logproduct);
// createProduct(products[1], logTotalPrice);
// createProduct(products[1], logproduct);


// Задача 2 Колбек-функції
// Додайте обєкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError), де перший параметер 
// це сума операції, а другий та третій - коллбеки.


// Метод withdraw викликає onError якщо amount більше 
// TRANSACTION_LIMIT або this.balance? i onSuccess в шншому випадку

// Метод deposit викликає onError якщо amount більше 
// TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Misha",
//   balance: 1500,
//   withdraw(amount, onSuccess, onError) {
//     // Зняття коштів
//     // 1. чи не перевищує amount наш ліміт
//     // 2. чи не перевищує amount наш баланс
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Ви перевищили ліміт. Поточний ліміт складає ${TRANSACTION_LIMIT} грн.`);
//     } else if (amount > this.balance) {
//       onError(`Недостачно коштів.поточний баланс складає ${this.balance}. грн`);
//     } else {
//       this.balance -= amount;
//       onSuccess(
//         `Успішно знято. Поточний баланс складає ${this.balance}. грн`
//          );
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Ви перевищили ліміт. Поточний ліміт складає ${TRANSACTION_LIMIT} грн.`);
//     } else if (amount < 0) {
//       onError(`Некоректна кількість. Спробуйте ще. Поточний баланс складає ${this.balance}. грн`);
//     } else {
//       this.balance += amount;
//       onSuccess(
//         `Успішно покладено. Поточний баланс складає ${this.balance}. грн`
//          );
//     }
//   },
// };

// const onSuccess = message => console.log(`Успішна операція! ${message}`);
// const onError = message => console.error(`Невдала операція! ${message}`);

// // function onSuccess (msg) {
// //   console.log(`Успішна операція! ${msg}`);
// // };
// // function onError msg {
// //   console.error(`Невдала операція! ${msg}`);
// // };

// account.withdraw(1000, onSuccess, onError);
// account.withdraw(1001, onSuccess, onError);
// account.withdraw(500, onSuccess, onError);
// account.withdraw(500, onSuccess, onError);

// account.deposit(1000, onSuccess, onError);
// account.deposit(1000, onSuccess, onError);
// account.deposit(1000, onSuccess, onError);


// Задача 3 коллбек + стрілки

// Напишіть функцію each(array, callback), яка першим
// параметром очікує масив, а другим - функцію, яка застосовується
// до кожного елемента масиву. Функція each повинна повернути
// новий масив, елементи якого будуть результати виклику колбека.

// 1. створити новий пустий масив куди будемо додавати змінені елементи старого
// 2. перебір масиву
  // 2.1. викликати коллбек функцію на поточному елементі масиву
  // 2.2. результат колбек функції запушити в новий масив
//3. Повернути новий масив

// function each (array, callback)  {
//   const newArray = [];
//   // for (const element of array) {
//   //   // newArray.push(callback(element));
//   //   const newElement = callback(element);
//   //   newArray.push(newElement);
//   // }
//   array.forEach(element => newArray.push(callback(element)));
//    return newArray;
// };

// const pow = n => n ** 2;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(each(arr, n => n + 1))
// console.log(each(arr, pow))


// function add (callbackNumbers) {
//   return callbackNumbers(2, 4, 8);
// }

// function numbers(a, b, c) {
//   return a + b + c;
// }

// console.log(add(numbers));

// const makeSheff = function (name) {
//   const makeDish = function(dish) {
//     console.log(`${name} готує ${dish}`);
//   }

//   return makeDish;
// }

// const katia = makeSheff("Катя");

// katia("котлетки");
// katia("с")

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// function roader(place) {
//   return function add (num) {
//     return Number(num.toFixed(place));
//   }
// }

// const first = roader(2);
// const first2 = roader(4);
// console.log(first(2.423423))
// first(2.423423)
// console.log(first(2.423423))

// const arr = [1, 2, 3, 4, 5, 6, 7]

// function each(arr, callback) {
//   let total = arr[0];
//   for(let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, sum));
// console.log(each(arr, division));

// function add (first, second) {
//   return first + second;
// }

// function sum (first, second) {
//   return first * second;
// }

// function division (first, second) {
//   return first / second;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach(function(item, idx) {
//   arr[idx] = item - 1;
// });

// console.log(arr)

// function logProduct (product){
//   console.log(product.name)
// };
// function logTotalPrice ({ price, quantity }){
//   console.log(` загальна сума Total price ${price * quantity}`)
// };  

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   }
//   return callback(product)
// }

// console.log(createProduct({ name: "apple", price: 30, quantity: 3 }, logProduct));
// console.log(createProduct({ name: "lemon", price: 20, quantity: 5 }, logTotalPrice));

// const TRANSACTION_LIMIT = 1000;

// const handlerOnSuccess = message => console.log(`✅ Success! ${message}`);
// const handlerOnError = (message) => console.log(`❌ Error! ${message}`);

// const account = {
//   username : 'Jack',
//   balance: 400,
//   withdraw (amount, onSuccess, onError) {
//     if(amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
//       return;
//     } else if(this.balance < amount) {
//       onError('Not enough in the account');
//       return;
//     } 
//       this.balance -= amount;
//       onSuccess(`Successfully ${amount}, balance ${this.balance}`)
//     },
//     deposit(amount, onSuccess, onError) {
//       if(amount > TRANSACTION_LIMIT) {
//         onError(`TRANSACTION LIMIT: ${TRANSACTION_LIMIT}`);
//         return;
//       } else if (amount <= 0) {
//         onError(`Nice try bro! 😂`);
//         return;
//       }

//       this.balance += amount;
//       onSuccess(`Added ${amount}, balance ${this.balance}`)
//     }
//   };

// account.withdraw(2000, handlerOnSuccess, handlerOnError);
// account.withdraw(600, handlerOnSuccess, handlerOnError);
// account.withdraw(300, handlerOnSuccess, handlerOnError);
// account.deposit(1700, handlerOnSuccess, handlerOnError);
// account.deposit(1000, handlerOnSuccess, handlerOnError);
// account.deposit(-600, handlerOnSuccess, handlerOnError);
// account.deposit(0, handlerOnSuccess, handlerOnError);

// function each (arr, callback) {
//   let c = 0;
//   for(let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//     c = arr[i]
//   }
//   return callback(c)
// }

// console.log(each([64, 49, 36, 25, 16], function(value) {
//   return value * 2;
// }))

// const logProduct = product => console.log(product);
// const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);
// const createProduct = (partialProduct, callback) => callback({
//     id: Date.now(),
//     ...partialProduct,
//   });

// createProduct({
//   name:"🍅",
//   price: 30,
//   quantity: 3,
// }, logProduct);

// createProduct({
//   name:"🍅",
//   price: 30,
//   quantity: 4,
// }, logTotalPrice);

// const logItems = items => items.forEach((value, index) => console.log(`${index + 1} - ${value}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎","🍇","🍑","🍌","🍋"]);

// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach(value => total += value)
  
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],

//   order(pizzaName, onSuccess, onError) {
//     if(this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres)

// const input = prompt('введіть своє імя');

// if (input === "katia") {
//   alert("Привіт файна булочка");
// } else if(input === "vika") {
//   alert("Виключайте телевізор і йдіть спати!) добраніч")
//  } else {
//   alert("Ти шо таке?")
// }

// const numbers = [5, 10, 15, 20, 25];

// const doubleNumber = numbers.map(function num(num){
//   return num  - 3 
// });
// console.log(doubleNumber)

// const players = [
//   { name: "Катя", id: "player-1", timePlayed: 450, points: 57, online: true },
//   { name: "Міша", id: "player-2", timePlayed: 234, points: 43, online: false },
//   { name: "Вохра", id: "player-3", timePlayed: 123, points: 23, online: true },
// ];

// console.table(players)

// const updatePlayerPoint = "player-1";

// const updatePlayer = players.map(player => 
//   updatePlayerPoint === player.id 
//   ? { 
//     ...player, 
//     timePlayed: player.timePlayed + 200,  
//   } 
//   : player,
// )

// console.table(updatePlayer);

// const isOnline = players.filter(({ timePlayed }) => timePlayed >= 300);
// console.log(isOnline)


// const numbers = [5, 10, 15, 20, 25];

// const reduceNum = numbers.reduce((acc, number) => acc + number, 0);
// console.log(reduceNum)

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((acc, number) => acc + number, 0);
// console.log(totalSalary)

