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
const products = [
  { name: 'apple', 
    price: 15,
    quantity: 30,
  },
  { name: 'cherry', 
    price: 40,
    quantity: 50,
  },
];
let total = 0;

const createProduct = function (obj, callback) {

};

function logproduct ({ name, price, quantity }) {
    console.log(`Назва продукту: ${name}. Кількості на складі ${quantity}. Ціна за кілограм ${price}. грн`);

};

logproduct(products[1]);
logproduct(products[0]);

function logTotalPrice ({ name, price, quantity }) {
  console.log(`Загальна вартість всіх товарів ${name} на складі становить ${price * quantity} грн`);
};

logTotalPrice(products[1]);
logTotalPrice(products[0]);