// let color = document.body.style.backgroundColor = "skyblue";
// let number = document.body.textContent = 'Качеча чебуреча';


// const shouldRenew = confirm("Йо чи не йо? Якщо йо! тицяй ок! а якщо не йо то тикай кансл!");// повертає true або false
// console.log(shouldRenew);
// console.log("shouldRenew:", typeof(shouldRenew)); 

// let quantity = prompt('введіть кількість бринзи');
// quantity = String(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = "50px"; 
// const resultWidth = Number.parseInt(elementWidth); // запинається на першому символі з ліва на право і на першому не числі закінчує парсити
// console.log(elementWidth);
// console.log(resultWidth);
 
// let elementHeight = "200.50px";
// const resultHeight = Number.parseFloat(elementHeight);
// console.log(typeof elementHeight);
// console.log(typeof resultHeight);

// let salary = 1300.16472;
// // salary = salary.toFixed(3); // зкорочує число з плаваючою крапкою залишає 3 цифри після крапки
// // salary = Number(salary.toFixed(3)); //приводить до типу Number
// console.log(Number(salary.toFixed(3)));
 
// console.log(Number(true));// тру приводиться до числа 1
// console.log(Number(false));//фолс приводиться до числа 0

// console.log(Math.PI);
// console.log(Math);

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);

// console.log(result);

// Напиши скрипт який просить користувача ввести число в  степінь,
// підносить число в цю степінь і виводить в консоль
// 1) Оголошуємо змінну в яку просимо ввести число.
// 2) Оголошуємо змінну в яку просимо ввести степінь.
// 3) Оголошуємо змінну яка обчислює результат.
// 4) Виводимо користувачу результат.


// let userNumber = prompt('Введіть число');
// let userPower = prompt('Введіть степінь до якої піднести чесло');
// let result = userNumber ** userPower;
// alert(`Число ${userNumber} у ${userPower} степені: ${result}!`);
// console.log(`Число ${userNumber} у ${userPower} степені:`,result);

// console.log(Math.random() * (50 - 30) + 30);
// Формула для генерування рандомного числа 
//  Math.random() * (max - min) + min
// const max = 80;
// const min = 10;
// let result = Math.round(Math.random() * (max - min) + min); // Math.round округлює результат Math.random
// console.log(result);
// 

// const colors = [
// 'orange', 'teal',
// 'skyblue', 'yellow',
// 'deeppink', 'darkgreen',
// 'tomato', 'purple',
// 'green', 'blue'
// ]; //  змінна з кольорами

// const max = colors.length - 1;
// const min = 0;

//  const index =  Math.round(Math.random(colors) * (max - min) + min);
//  const color = colors[index];
//  console.log(color);
// document.body.style.backgroundColor = color;
// const randoms = prompt('Введіть ім"я');
// if(randoms === 'Жаба') {
//     document.body.style.backgroundColor = colors[8];
//     document.body.textContent = randoms;
// } else if (randoms === 'Катя' || 'Кетрін' || 'Ketrin' || 'Katya'){
//     document.body.style.backgroundColor = colors[3];
//     document.body.textContent = randoms;
// } else if (randoms === 'Міша'){
//     document.body.style.backgroundColor = colors[9];
//     document.body.textContent = randoms;
// } else {
//     document.body.style.backgroundColor = colors[1];
//     document.body.textContent = randoms;
//     alert('Що ввели то маєте!');
// }
// console.log(randoms);
// const texts = [
//     'Качеча', 'Пушь-Пушь',
//     'Жяба', 'Вохра',
//     'Катя', 'Ме'
// ];
// const max1 = texts.length - 1;
// const min1 = 0;

// const index1 =  Math.round(Math.random(texts) * (max1 - min1) + min1);
// const text = texts[index1];

// document.body.textContent = text;

// напиши скрипт який виведе 
// рядок в форматі Гість x у 
// поселився в z номер q
//  підставте замість x y q z  значення змінних

// const x = 'Катя';
// const y = 'Кчічка';
// const q = 'VIP';
// const z = 71;
// const message ='Гість' + ' ' + x + ' ' + y +  ' ' + 'поселилася в' + ' ' + q + ' ' + 'номері' + ' ' + z;
// console.log(message);
// const message1 ='Гість ' + x + y + ' поселилася в ' + q + ' номері ' + z;
//  console.log(message1);
// const message1 =`Гість ${x} ${y} поселилася в ${q} номері ${z}`;
// console.log(message1);

// let brand = prompt('get brend');
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'Samsung';
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);


// const b1 = 'привіт';
// const b2 = 'жаба';
// const me = 'Качеча привіт, ти любиш ЖАБУ?';

// console.log(me.includes(b1));
// const nirvalszedB2 = b2.toLowerCase();
// console.log(nirvalszedB2.includes(b2));

//  const balance = 10;
  

// if (balance > 0) {
//     message = 'Позитивний баланс';
// } else {
//     message = 'Негативний баланс';
// }
// console.log(message);

// const message = balance > 0 ? 'Позитивний баланс' : 'Негативний баланс';
// console.log(message);

// Напиши скрипт вибору готеля по кількості зірок
// 1 - 20$, 2 - 30$, 3 - 5o$, 4 - 70$, 5 - 120$
// якщо в змінній старт щось окрім числа 1 - 5 вивиди
//  рядок 'Такої кількості зірок немає'

// const stars = 2;
// let price;

// // switch

// switch (stars) {
//   case 1:
//     price = '20$';
//     break;

//     case 2:
//       price = '30$';
//       break;

//       case 3:
//         price = '50$';
//         break;

//         case 4:
//           price = '70$';
//           break;

//           case 5:
//             price = '120$';
//             break;

//             default:
//               console.log('Такої кількості зірок немає');
// }
// console.log(`Ціна ${stars} зіркового готелю :`, price);

// if()

// if (stars === 1){
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }
// console.log(`Ціна за готель з ${stars} зірками`, price);

// Напиши скрипт вибору ціни за готель по кількості зірок
// 1,2 - 20$, 3,4 - 30$, 5 - 120$
//  if()

// if (stars === 1 || stars === 2){
//   price = 20;
// }  else if (stars === 3 || 4) {
//   price = 30;
// }  else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }
// console.log(`Ціна за готель з ${stars} зірками`, price);

// switch (stars) {
//   case 1 : 
//   case 2 :
//     price = '20$';
//     break;

//     case 3: 
//     case 4:
//       price = '30$';
//       break;

//           case 5:
//             price = '120$';
//             break;

//             default:
//               console.log('Такої кількості зірок немає');
// }
// console.log(`Ціна ${stars} зіркового готелю :`, price);

// Напиши скрипт вибуру опцій доставки товарів
// опція зберігається в змінній option: 1-самовивіз, 2-курєр, 3-пошта

// В змінну message записуються повідомлення в залежності від опції
// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Курєр доставить заказ завтра з 12 :00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонить менеджер'

// 1 зробити змінні
// let option = '';
// let message = '';

// 2 зробити switch 1 2 3
// 3 в кожному кейсі записати в message повідомлення
// 4 залогувати message



// switch(option) {
//   case 1 :
//     message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//     break;

//   case 2 :
//     message = 'Курєр доставить заказ завтра з 12 :00 до 18:00';
//     break;
  
//   case 3 : 
//   message = 'Посилка буде відправлена сьогодні';
//   break;
  
//   default : 
//   message = 'Вам передзвонить менеджер';
// }
// console.log(message);

// ======================================================

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = "Ласкаво просимо";
// const isOpen = true;
// const shouldConfirm = false;

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// const base = 2;
// const power = 6;
// const result = Math.pow(base, power)
// console.log(result);
// console.log(2 ** 5)

//  напиши скрипт який просить користувача написати число і степінь, 

// let num = prompt("Введіть число");
// num = Number(num);
// let power = prompt("Введіть до якої степені привести число");
// power = Number(power);
// console.log("число:", num)
// console.log("степінь:", power)

// const result = num ** power
// console.log("результат:",result);

// const max = 10;
// const min = 9;

// let mew = (Math.random() * (max - min) + min);
// // mew = Number(mew.toFixed());
// // console.log("десять чи девять?" ,mew);
// const result = Math.round(mew);
// console.log(result)

const colors = ['tomato', 'teal', 'skyblue', 'deeppink', 'orange'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
document.body.style.backgroundColor = color;

// const firstName = 'Me';
// const lastName = 'ma';
// const fullName = firstName + lastName;

// console.log(fullName.toLocaleLowerCase())

// const guest = "Mamumba";
// const guestLastName = "Burasa";
// const fullNames = guest + " " + guestLastName;
// const number = 790;
// const prime = "VIP";

// const message1 = "Гість" + " " + guest + " " + guestLastName + " " + "Заселяється в номер" + " " + number + " " + "статусу" + " " + prime;
// const message2 = "Гість " + guest + " " + guestLastName +  " Заселяється в номер "  + number +  " статусу "  + prime;
// const message3 = `Гість ${fullNames} Заселяється в номер ${number} статусу ${prime}`;
// console.log(message1)
// console.log(message2)
// console.log(message3)

// let brand = "Samsung";
// console.log(brand)
// brand = brand.toLowerCase();
// const inDataBase = "samsung";
// console.log(brand)
// console.log(brand === inDataBase)

// let brand = 'SamSUNg';
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand)

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродажа';

// const string1 = 'Привіт, я принц Абдул, це 100% не спам, пропоную міліон!';
// const string2 = 'Сама найбільша РОЗПРОДАЖА на цьому тижні, не пропусти!';
// const string3 = 'Рекламна компанія #fatlivesmatter';

// console.log(string1.includes('спам'))
// const normalised  = string2.toLowerCase();
// const isIncludesWord = normalised.includes(blacklistedWord2);
// const isIncludesWord2 = string1.includes(blacklistedWord1);
// console.log(isIncludesWord);
// console.log(isIncludesWord2)

// exemple 1 

// const asked = prompt("яка офіційна назва JavaScript");
// const message = asked === "ECMAScript" ? alert("Правильно!") : alert("Не знаєте? ECMAScript!");

// примітивні типи даних - імутабельні типи даних
// 1 Number
// 2 String
// 3 Boolean
// 4 Undefined
// 5 Null

// example6 -метод рядків та чейнінг
// Напиши срипт який розраховує індекс маси тіла людини для цього необхідно 
// розділити вагу в кілограмах на квадрат висоти людини у метрах
// Вага та висота зберігаються в змінних weight і height але не як числа а в вигляді рядків
// ну цілі числа можуть бути задані у вигляді 24.5 або 24,7 , тобто як роздільник дробової частини може бути кома


// let height = "1,75";
// height = height.replace(',','.')
// let weight = "88.3";

// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi);

// const incomingValue = 5;
// const input = prompt('введіть')
// const result = incomingValue + Number(input);

// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value)

let test = "dwa";
const value = test ?? 'some value';
console.log(value)