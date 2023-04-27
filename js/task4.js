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

function each (array, callback)  {
  const newArray = [];
  // for (const element of array) {
  //   // newArray.push(callback(element));
  //   const newElement = callback(element);
  //   newArray.push(newElement);
  // }
  array.forEach(element => newArray.push(callback(element)));
   return newArray;
};

const pow = n => n ** 2;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(each(arr, n => n + 1))
console.log(each(arr, pow))

