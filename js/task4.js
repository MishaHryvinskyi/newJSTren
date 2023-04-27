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

const buttonRef = document.querySelector('.js-button');


const handleBtnClick = function () {
  console.log('Клік по кнопці' + Date.now());
  document.body.style.backgroundColor = "teal";  
};

buttonRef.addEventListener('click', handleBtnClick);