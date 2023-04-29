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

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log("numbers", numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log("letters", letters);




