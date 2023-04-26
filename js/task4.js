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

  

//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         onNotAvailable(recipient);
//         return;
//     } 
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);


// Звичайне оголошення функції
function classicAdd(a, b, c) {
    return a + b + c;
  }
  
  // Те саме стрілочною функцією
  const arrowAdd = (a, b, c) => {
    return a + b + c;
  };
  console.log(arrowAdd(1, 2, 3));
  console.log(classicAdd(1, 2, 3));