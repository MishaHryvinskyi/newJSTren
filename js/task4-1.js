const numbers = [5, 10, 15, 20, 25];



// Метод перебирання forEach
numbers.forEach(function (number, index) {
    number *= 2;
  console.log(`Індекс ${index}, значення ${number}`);
});