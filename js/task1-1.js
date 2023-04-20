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

// 1 Оголошуємо змінні
const minNumber = 6;
const maxNumber = 13;
let total = 0;
// 2 Перебираємо циклом for() від min до max 
for( let i = minNumber; i <= maxNumber; i += 2){
    console.log(i);
    // 3 Додаємо до тотала
total += i;
}
// 5 логуємо
console.log('Сума всіх парних чисел', total);
