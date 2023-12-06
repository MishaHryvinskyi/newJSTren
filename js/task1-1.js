// Цикл for()

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
// }

// Задача 1 
// Напиши скрипт який підраховує загальну суму зарплат робітників.
// кількість робітників зберігається в змінній employees
// Зарплата кожного робітника це випадкове число від 500 до 5000
// Записати суму  у змінну totalSalary і вивести в консоль

// // 1 Оголошуємо змінну для зберігання зп працівників
// const employees = 4;
// let totalSalary = 0;
// const minSalary = 500;
// const maxSalary = 5000;

// // 2 Циклом for() перебираємо зп від 500 до 5000
// for (let i = 1; i <= employees; i += 1){
//     // 3 Згенерувати випадкову зп
// const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зп робітника номер ${i} - ${salary}`);
//     // 4 Добавити до тоталу
//     totalSalary += salary;
// }

// // 5 console.log() 
// console.log('totalSalary:', totalSalary);

// Задача 2 
// Напиши скрипт який підраховує суму всіх парних чисел
// які входять в діапазон чисел в змінних від min до max
// Наприклад якщо min=0 і max=5, то в ньому два парних числа 2-4

// // 1 Оголошуємо змінні
// const minNumber = 6;
// const maxNumber = 13;
// let total = 0;
// // 2 Перебираємо циклом for() від min до max 
// for( let i = minNumber; i <= maxNumber; i += 2){
//     console.log(i);
//     // 3 Додаємо до тотала
// total += i;
// }
// // 5 логуємо
// console.log('Сума всіх парних чисел', total);

// // 1 Оголошуємо змінні
// const minNumber = 6;
// const maxNumber = 13;
// let total = 0;
// // 2 Перебираємо циклом for() від min до max 
// for( let i = minNumber; i <= maxNumber; i += 1){
//     // 3 перевіряємо на парні числа
//     if (i % 2 === 0) {
//         console.log('Парне:', i);
//         //4 Додаємо до тотала
//         total += i;
//     } 
// }
// // 5 логуємо
// console.log('Сума всіх парних чисел', total);

// 1 Оголошуємо змінні
// const minNumber = 6;
// const maxNumber = 13;
// let total = 0;
// // 2 Перебираємо циклом for() від min до max 
// for( let i = minNumber; i <= maxNumber; i += 1){
//     // 3 перевіряємо на непарні числа
//     if (i % 2 !== 0) {
//         // console.log('Непарне:', i);
//         continue;
//     } 
//     //4 логуємо парні числа
//     console.log('Парне:', i);
// //5 Додаємо до тотала
//         total += i; //total = 0 + 6.total = 6 + 8. total = 14 + 10.total = 24 + 12. total = 36.
// }
// // 6 логуємо
// console.log('Сума всіх парних чисел', total);

//  Задача 3
// Напиши скрипт обробки покупки в магазині
// Баланс користувача зберігається в змінній balance
// Сума покупки в змінній payment
// перед перевіркою вивести повідомлення:
// "Загальна вартість замовлення [число] кредитів. Перевіряємо кількістьдоступних коштів на рахунку"
// якщо сума покупки не перевищує баланс
// -вирахувати з балансу суму покупки
// Вивести повідомлення "На рахунку залишилося [число] кредитів"
// якщо сума покупки перевищує баланс "На рахунку недостатньо коштів для виконання операції!"
// В кінці вивести "Операція завершена"

// 1 Змінні
// let balance = 10000;
// const payment = 2000;
// let totalPayment = 0;
// // 2 Умова якщо сума <= баланс
// console.log(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількістьдоступних коштів на рахунку...`);
// if(balance >= payment) {
//     console.log('Все гаразд, знімаємо гроші... Дякуємо за покупку!');
//     balance -= payment;
//     console.log(`На рахунку залишилося ${balance} кредитів.`);
// } else {
//     console.log("На рахунку недостатньо коштів для виконання операції!");
// }
// console.log("Операція завершена.");

//  Задача 4
// Напиши скрипт підрахунку суми покупки зі знижкою в залежності
// від потраченої суми за весь час (партнерська програма)

// -Загальна сума потраченого зберігається в змінній totalSpend
// -сума поточної покупки зберігається в payment
// -знижки зберігаються в discount

// -якщо потрачено від [100 до 1000] -бронзовий партнер знижка 2%
// -якщо потрачено від [1000 дo 5000] -срібний партнер знижка 5%
// -якщо потрачено більше [5000] - золотий партнер знижка 10%
// -якщо потрачено менше [100] - не партнер знижка 0%

//  в результаті вивести повідомлення "оформлюємо замовлення на суму [сума] зі знижкою [скидка%]"

// 1 змінні
// let totalSpend = 5000  ;
// let payment = 2000  ;
// let discount = 0;

// // 2 if()
// if(totalSpend < 100) {
//     console.log('не партнер знижка 0%'); 
// } else if(totalSpend >= 100 && totalSpend < 1000) {
//     console.log('бронзовий партнер знижка 2%');
//     discount = 0.02;
// } else if (totalSpend >= 1000 && totalSpend < 5000) {
//     console.log('срібний партнер знижка 5%')
//     discount = 0.05;
// } else {
//     console.log('золотий партнер знижка 10%');
//     discount = 0.1;
// } 

// payment -= payment * discount;

// console.log(`оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%!`);
// totalSpend += payment;
// console.log('totalSpend:', totalSpend);

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 10;
// } else if (stars === 2 || stars === 3) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     price = "такої кількості зірок немає";
// }

// console.log(price);

// switch(stars) {
//     case 1:
//     case 2: 
//     price = 10;
//     break;
    
//     case 3: 
//     case 4: 
//     price = 30;
//     break;

//     case 5: 
//     price = 120;
//     break;
//     default:
//     console.log("такої кількості зірок немає")
// }

// console.log(price)

// const option = 1;

// let message ="";

// switch(option) {
//     case 1: 
//     message ="Ви можете забрати товар завтра з 12:00 в нашому офісі";
//     break;
//     case 2:
//     message = "Курєр доставить замовлення завтра з 9:00 по 18:00";
//     break;
//     case 3 : 
//     message = 'Посилка буде відправлена сьогодні';
//     break;
//     default: {
//         console.log("Вам зателефонує менеджер");
//     }
// }
// console.log(message);

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for(let i = 1; i < employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зп робітника ${i} - ${salary}`)

//     totalSalary += salary;
// }

// console.log(totalSalary)

// let balance = 10000;
// const payment = 10001;

// if (payment <= balance) {
//     balance -= payment;
// } else {
//     console.log(`'Недостатньо коштів'`)
// }

// console.log(`число кредитів ${balance}`)

//  let totalSpent = 4000;
//  let payment = 1000;
//  let discount = 0;
 

//  if (totalSpent < 100) {

//     console.log("не партнер, скидка 0%");

//  } else if(totalSpent >= 100 && totalSpent < 1000) {

//     console.log("бронзовий партнер, скидка 2%");
//     discount = 0.02;

//  } else if (totalSpent >= 1000 && totalSpent < 5000) {

//     console.log('срібний партнер,скидка 5%');
//     discount = 0.05;

//  } else if (totalSpent >= 5000) {

//     console.log("золотий партнер, скидка 10%");
//     discount = 0.1;

//  } else {

//     discount = 0.1;
//     console.log("Золотий партнерб, скидка 10%");

//  }

//  console.log(`Оформлюємо заказ на суму ${payment} зі знижкою ${discount * 100}%`);

//  payment -= payment * discount;
//  console.log(payment);

//  totalSpent += payment;
//  console.log(`загальна сума покупок ${totalSpent}`)

// function getShippingCost(country) {
//     let message;
//     let cost;
  
//     switch(country) {
//       case "China":
//       cost = 100;
//       message = `Shipping to ${country} will cost ${cost} 
//       credits`;
//       break;

//       case "Chile":
//       cost = 250;
//       message = `Shipping to ${country} will cost ${cost} 
//       credits`;
//       break;

//       case "Australia":
//       cost = 170;
//       message = `Shipping to ${country} will cost ${cost} 
//       credits`;
//       break;

//       case "Jamaica":
//       cost = 120;
//       message = `Shipping to ${country} will cost ${cost} 
//       credits`;
//       break;

//       default:
//       message = "Sorry, there is no delivery to your country";
//     }
    
//     return message;
//   }

  

//   function getShippingCost(country) {
//     let message;
  
//     switch(country) {
//       case "China":
//       message = 'Shipping to China will cost 100 credits';
//       break;

//       case "Chile":
//       message = 'Shipping to Chile will cost 250 credits';
//       break;

//       case "Australia":
//       message = 'Shipping to Australia will cost 170 credits';
//       break;

//       case "Jamaica":
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;

//       default:
//       message = "Sorry, there is no delivery to your country";
//     }
    
//     return message;
//   }

//   console.log(getShippingCost("China"));
//   console.log(getShippingCost("Chile"));
//   console.log(getShippingCost("Australia"));
//   console.log(getShippingCost("Jamaica"));

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; 
  
//     return message;
//   }

//   console.log(getNameLength("Устим"))
//   console.log(getNameLength("Міша"))
//   console.log(getNameLength("Катя"))

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line
  
//     return substring;
//   }

//  console.log(getSubstring('Hello world', 3))

// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//      return result;
//    }

//    console.log(checkForName("Катя Тараскіна", "Катя"))

// function checkForSpam(message) {
//     let result;
   
//     result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? true : false;

//     return result;
//   }
  
//   console.log(checkForSpam("Get best sale offers now!"));
//   console.log(checkForSpam("JavaScript weekly newsletter"));
//   console.log(checkForSpam("Amazing SalE, only tonight!"));
//   console.log(checkForSpam("Trust me, this is not a spam message"));

//   console.log("Trust me, this is not a spam message".includes("spam"))

//  const str = "hello world";

// // for( let i = 0; i < str.length; i += 1 ){
// //     console.log(str[i])
// // }

// let i = 0;
// // while(i < str.length) {
// //     if (str[i] === "w") {
// //         console.log('yes') 
// //         break;
// //     }
// //     console.log('no', str[i]) 
// //     i += 1;
// // }

// do {
//     if (str[i] === "w") {
//                  console.log('yes') 
//                  break;
//             }
//             console.log("no")
//     i +=1;
// } while ( i < str.length)

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes) {
//     timestring = `${hours} г. ${minutes} хв.`;
// } else {
//     timestring = `${hours} г.`;
// }

// console.log(timestring)

// const userInput = prompt("Введіть число");
// let message ='';
// if (userInput > 0) {

//     message = "Це позитивне число";
// } else if (userInput < 0) {
//     message = "Це негативне число"
// } else  {
//     message = "Це нуль"
// }
// console.log(message)

// const userInput = Number(prompt("Введіть число"));// приводимо до числа бо в інакшому разі коли користувач введе 0 спрацює else if ("Це позитивне число")
// if (!userInput) {
//     console.log("Це нуль");
// } else if (userInput > 0) {
//     console.log("Це позитивне число");
// } else  {
//     console.log("Це негативне число");
// }

// const userInput = prompt("Введіть число");
// let messeges;
// // if(userInput % 2 === 0) {
// //     console.log(`Ви ввели парне число а саме ${userInput}`);
// // } else {
// //     console.log(`Ви ввели непарне число а саме ${userInput}`);
// // }

// messeges = userInput % 2 === 0 ? `Ви ввели Парне число а саме ${userInput}` : `Ви ввели непарне число а саме ${userInput}`;
// console.log(messeges)

// const a = 120;
// const b = 180;

//  let biggerNumber;

// // biggerNumber = a > b ? a : b;
// // console.log("biggerNumber", biggerNumber)

// if(a > 100 && b > 100) {
//     console.log(biggerNumber = a > b ? a : b);
// } else {
//     console.log(b + 512)
// }

// let link = "https://my-site.com/about";

// // const linkChange = link.length;
// // const changesLink = link[linkChange - 0];

// // if (changesLink === '/'){
// //     console.log("посилання відмінне!")
// //     console.log(link)
// // } else {
// //     link + "/";
// //     console.log(link + "/")
// // }

// if (!link.endsWith('/')) {
//     link += '/'
// }
// console.log(link);


// let link = "https://somesite.com/about";

// if (!link.endsWith('/') && link.includes("my-site")) {
//         link += '/'
//     }
// console.log(link);

// let link = "https://somesite.com/about";

// link = link.includes("my-site") && !link.endsWith('/') ? link += '/' : link;
// console.log(link);

// const hours = 10;
// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log("Overdue")
// }

// const daysUntilDeadline = 0;

// if (!daysUntilDeadline) {
//     console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//     console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//     console.log("Післязавтра");
// } else {
//     console.log("Дата в майбутньому")
// }

// switch (daysUntilDeadline) {
//     case 0 :
//     console.log("Сьогодні");
//     break;
//     case 1 :
//     console.log("Завтра");
//     break; 
//     case 2 :
//     console.log("Післязавтра");
//     break; 
//     default :
//     console.log("Дата в майбутньому")
// }

// const max = 100;
// const min = 20;

// // for(let i = min; i <= max; i += 5) {
// //     console.log(i)
// // }

// for(let i = min; i >= min && i <= max; i += 1) {
//     if (!(i % 5)) {
//         console.log(i)
//     }
// }

// const login = prompt('Введіть логін');

// if (login === "Адмін") {
//     const password = prompt("Введіть пароль");
//     if(password === "я адмін") {
//         console.log("Доброго дня!")
//     } else {
//         console.log("невірний пароль");
//     }
// } else if (login === "") {
//     console.log("я вас не знаю");
// } else {
//     console.log("скасовано");
// }

// if (!login) {
//         console.log("скасовано");
// } else if (login === "Адмін") {
//     const password = prompt("Введіть пароль");
//     console.log(password === 'я адмін' ? "Доброго дня!" : "Невірний пароль");
// } else {
//     console.log("я вас не знаю");
// }

