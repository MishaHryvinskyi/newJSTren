// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log("Масив numbers", numbers); 
// dirtyMultiply(numbers, 2);

// console.log("Масив numbers мутувався", numbers); 
// // ---------------------------------------------
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers1 = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers1, 2);


// console.log("Масив numbers1", numbers1);

// console.log("Масив doubledNumbers", doubledNumbers); 

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); 

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); 


// console.log(planets); 

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);

// const score = students.map(students => students.score);
// console.log(score);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const course = students.flatMap(student => student.courses);
// console.log(course)

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); 

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); 

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); 

// console.log(values);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses)
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueCourses)

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const best = students.filter(({ score }) => score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter(({ score }) => score < LOW_SCORE);
// console.log(worst);
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average);


// const numbers = [5, 10, 15, 20, 25];

//  numbers.forEach(function (number) {
//     console.log('number', number);
//  });

// const numbers = [5, 10, 15, 20, 25];

// const doubledNumber = numbers.map(function (number) {
//     return number * 2;
// });
// console.log(doubledNumber);

// const addThreNumber = numbers.map(number => number + 3);
// console.log(addThreNumber);

// const minNumber = numbers.map(number => number - 7);
// console.log(minNumber);


// const players = [
//     { id: 'player-1', name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// // players.map(player  => player[3] =  { id: 'makarena-71', name: "Katichka", timePlayed: 999, points: 300, online: true })
// // console.log(players)
// // const playersName = players.map(({ name }) => name);
// // console.log(playersName);
// // const addPlayerPoints = players.map(({ points }) => points + 100);
// // console.log(addPlayerPoints)

// // const result = players.map(({ name, online }) => ({ name, online, }));
// // console.log(result);

// // const stats = players.map(({ points, timePlayed, name }) => ({ points, timePlayed, name }));
// // console.log(stats)

// const updateplayers = players.map(player => {
//     player.points + 100;
//     return {
//         ...player,
//         points: player.points * 1.1,
//     }
// })
// // console.table(updateplayers);
// // console.table(players);
// const playerIdToUpdate = 'player-3';
// const updatePlayers = players.map(player => {
//     if(playerIdToUpdate === player.id){
//        player.id = 'Makarena';
//        player.name = 'Katia'
//        player.points *= 4;
//     }
//     console.log(player.id)
//     return { ...player, }
// })
// console.log(updatePlayers)


//  const numbers = [5, 10, 15, 20, 25];
// const filterNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filterNumbers);



//  const players = [
//     { id: 'player-1', name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const isOnline = players.filter(({ online }) => online);
// console.log("isOnline", isOnline);

// const mostPoints = players.filter(({ points }) => points > 70);
// console.log("mostPoints", mostPoints);

// const mostTime =players.filter(({ timePlayed }) => timePlayed > 250);
// console.log("mostTime", mostTime);



// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//     return acc + number;
// }, 0);
// console.log(total)
// const number = numbers.find(number => number > 10);
// console.log(number);


// const players = [
//     { id: 'player-1', name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayd = players.reduce((time, player) => {
//     return time + player.timePlayed;
// },0);
// console.log(totalTimePlayd);

// const totalPointsPlayd = players.reduce((point, { points }) => point + points, 0);
// console.log(totalPointsPlayd);



// const playerIdToFind = 'player-2';
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log("Шукаємо по id", playerWithId);

// const playerNameToFind = 'Kiwi';
// const playerWithName = players.find(({ name }) => name === playerNameToFind);
// console.log("Шукаємо за імям Kiwi", playerWithName);

// const isOnline = players.every(({ online }) => online);
// console.log(isOnline);

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax:150,
// };

// let total = 0;
// const obji = Object.values(salary);
// for (const ob of obji) {
//     total += ob;
// }
// console.log("total for...of", total);

// const totalSalary = Object.values(salary).reduce((acc, number) => {
//     return acc + number;
// },0);


// console.log("total raduce", totalSalary);


// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalPriceCart = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
// console.log(totalPriceCart);

// const tweets = [
//     { id:'000', likes: 5, tags: ['js', 'nodejs'] },
//     { id:'001', likes: 2, tags: ['html', 'css'] },
//     { id:'002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id:'003', likes: 8, tags: ['css', 'react'] },
//     { id:'004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

//  const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

//  console.log('Масив тегів', allTags);

//  const tagsStats = allTags.reduce((acc, tag) =>{
    
//     if(acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     } 
//     acc[tag] = 1;

//     return acc;
//  }, {});
//  console.log("tagsStats", tagsStats);

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log("letters", letters);

// // map()
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.map(num =>  !(num % 2) ? num * 2 : num);
// console.log(result);

// // map під капотом
// function customMap(arr, callback) {
//     const result = [];
//     for(let i = 0; i < arr.length; i += 1){
//         const item = arr[i];
//        result.push(callback(item, i, arr))
//     }
//     return result;
// }

// console.log(customMap(arr, foo));

// function foo(num, idx, arr) {
//     if(!(num % 2)) { 
//         return num * 2;
//     }
//     return num;
// }

// const arr = [
// {
//     name: "us1",
//     skills: ["html", "js"]
// },
// {
//     name: "us2",
//     skills: ["node.js", "express"]
// },
// {
//     name: "us3",
//     skills: ["css", "react"]
// },
// ];

// const num = [2, 4, 6, 3, 22, 11];
// const result = [...num].sort((a, b) => b - a);
// console.log(result)
// console.log(num)

// reduce()

// const str = [11, 4, 9, 3, 54, 23, 12];

// // const result = str.reduce((acc, item, idx, arr) => {
// //     console.log("acc", acc);
// //     console.log('item', item)
// //     return acc + item;
// // }, 0)

// const rat = str.reduce((acc, item) => {
//     console.log(acc);
//     console.log(item)
//     acc.push(item * 2);
//     return acc;
// }, []);
// console.log(rat)

const cars = [
    { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
    { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
    { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
    { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
    { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
    { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
    { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
    { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
    { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
    { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
];

// // Esample 1 - Метод map()
// // getModel() повинна повертати масив моделей
// const getModels = cars => cars.map(({ model }) => model);
// console.log(getModels(cars));

// // Example 2 метод map()
// // makeCarsWithDiscount() 
// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => ({
//         ...car,
//         price: car.price * (1 - discount)
//     }));
// }

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 Метод filter()
// filterByPrice повертає масив авто ціна яких менша ніж значення параметра threshold
// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 метод filter()
// getCarsWithDiscount повертає масив авто властивість onSale яких true
// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// Example 5 метод filter()
// getCarWithType() повертає масив автомобілів з певним типом
// const getCarWithType = (cars, type) => cars.filter(({ type: typeCar }) => typeCar === type);

// console.table("suv", getCarWithType(cars, "suv"));
// console.table("sedan", getCarWithType(cars, "sedan"));
// console.table("truck", getCarWithType(cars, "truck"));

// Example 6 метод find
// const getCarByModel = (cars, model) => cars.find(({ model: carModel }) => carModel === model);

// console.log(getCarByModel(cars, "Explorer"));
// console.log(getCarByModel(cars, "Tacoma"));
// console.log(getCarByModel(cars, "F-150"));

// Example 7 метод sort()
// sortByAscendingAmount повертає новий масив авто відсортований за зростанням значення властивості amount
// const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);
// const sortByAscendingAmount = cars => [...cars].sort(({ amount: a }, { amount: b }) => a - b);

// console.table(sortByAscendingAmount(cars));

// Example 8 метод sort()
// sortByDescendingPrice() повертає новий масив авто відсортований за за зменшенням значення price
// const sortByDescendingPrice = cars => [...cars].sort(({ price: a }, { price: b }) => b - a);
    
// console.table(sortByDescendingPrice(cars));
// console.table(cars);

// Example 9 метод sort()
// sortByModel поверне новий масив за назвою авто по алфавіту
// const sortByModel = (cars, order) => [...cars].sort(({model: a}, {model: b}) => order === "asc" 
//     ?  a.localeCompare((b))
//     :  b.localeCompare((a)));
 

// Example 10 reduce()
// getTotalAmount() повертає загальну кількість авто значення властивості amount

// const getTotalAmount = cars => cars.reduce((acc, { amount }) => acc + amount, 0);
// const getTotalAmount = function (cars) {
//     return cars.reduce((acc, { amount }) => acc + amount, 0);
// }
// console.log(getTotalAmount(cars));

// Example 11 ланюжок методів
// getAvailableCarNames повертає масив моделей авто але тільки тих які зараз на розпродажі

// const getAvailableCarNames = cars => cars
//     .filter(({ onSale }) => onSale)
//     .map(({ model }) => model);
// console.log(getAvailableCarNames(cars));

// const getAvailableCarNames = cars => cars
//     .filter(({ onSale }) => onSale)
//     .map(({ model, make }) => `${model} - ${make}`);
// console.log(getAvailableCarNames(cars));

// Example 12 ланцюжок методів
// getSortedCarsOnSale() повертає масив авто на розпродажі відсортованих за зростанням цін

// const getSortedCarsOnSale = cars => cars
// .filter(({ onSale }) => onSale)
// .sort(({price: a},{price: b}) => a - b)

// console.table(getSortedCarsOnSale(cars))

// const str ="weageshfkjfoesohgolehierjhperjrghoihbiv";
// const result = str.split('').reduce((acc, item) => {
//     acc.hasOwnProperty((item)) 
//     ? acc[item] += 1 
//     : acc[item] = 1;
//     return acc;
// },{})
// console.log(result);

//  const arr = ['Honda', 'Mazda', 'Nissan', 'BMW', 'ЖУЖА'];

//  const getAuto = (arr) => {
//     const result = arr.reduce((acc, car, indx) => {
//         return acc + `${indx + 1} - ${car}\n`
//     }, arr.length ? `Загальна кількість авто ${arr.length}: \n` : "Втбачте ніц нема!😥");
//     return result
//  };

//  console.log(getAuto(['Honda', 'Mazda', 'Nissan', 'BMW', 'ЖУЖА']));
//  console.log(getAuto([]))

const allCourse = ['html', 'js', 'css', 'js', 'css'];
const uniqueCourses = allCourse.filter((course, idx, arr) => arr.indexOf(course) === idx);
console.log(uniqueCourses)
console.log(allCourse)