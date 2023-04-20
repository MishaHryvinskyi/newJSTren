//  const clients = ["Mango", "Poly", "Ajax"];

 
// // for (let i = 0; i < clients.length; i += 1) {
// //     console.log(clients[i]);
// // }

// // for (const client of clients) {
// //     console.log(client);
// // }

// const clientsNameToFind = 'Poly';
// let  message = 'Клієнт з таким імям відсутній в базі даних!';

// for (const client of clients) {
//     if (client === clientsNameToFind) {
//         message = "Клієнт з таким імям є в базі даних!";
//        break;
//     }
    
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i +=1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, -4));
// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 4);
// console.log('scores:', scores);
// console.log('deletedScores:', deletedScores);
const colors = ['red', 'green', 'blue'];
console.log(colors);
colors.splice(1, 0, "purple");
console.log(colors);