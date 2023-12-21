//   const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log(this);
//     },
//     showTitle() {
//         console.log(this.title);
//     },
//   };

//   const outerShowTitle = book.showTitle;
//   outerShowTitle();

  
// const showThis = function () {
//     console.log(this);
// };

// const objB = {
//     a: 43,
//     b: 232,
// };
// showThis.call(objB);

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.apply(objA);


// const counter = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };

// const refs = {
//     incrementBtn: document.querySelector('.js-increment'),
//     decrementBtn: document.querySelector('.js-decrement'),
//     valueEL: document.querySelector('.js-value'),
// };

// refs.decrementBtn.addEventListener('click', function () {
//     counter.increment();
//     refs.valueEL.textContent = counter.value;
// });

// refs.incrementBtn.addEventListener('click', function () {
//     counter.decrement();
//     refs.valueEL.textContent = counter.value;
// });

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log("increment -> this", this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log("increment -> this", this);
//         this.value -= value;
//     }
// };

// const updateCounter = function(value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
 
// const objA = {
//     name: "A",
//     age: 22,
//     myAge(a, b) {
//         console.log(this, a, b)
//     }
// }

// objA.myAge(22, 44);

// const objB = {
//     name: "B",
//     age:23
// }

// objA.myAge.call(objB, 1, 2)
// objA.myAge.apply(objB, [5, 5])
// objA.myAge.bind(objB, 1, 2)


// esample 1 - Майстерня коштовностей
// напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує 
// та повертає загальну вартість
// каменів з таким імям ціною та кількістю з властивості stone
// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],

//     calcTotalPrice(stoneName) {
//         const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
//         return price * quantity;
//     }
// };

// const shop2 = {
//     stones: [
//         { name: 'Щебінь', price: 400, quantity: 42 },
//         { name: 'бубель', price: 32700, quantity: 3 },
//     ]
// }

// console.log(chopShop.calcTotalPrice.apply(shop2, ['Щебінь']));
// console.log(chopShop.calcTotalPrice.call(shop2, 'бубель'));

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// Example 2 - телефонна книга
// виконай рефакторинг методів обєктy phonebook щоб код запрацював

// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const mewContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(mewContact);
//         return this.contacts
//     },
//     generateId() {
//         return "_" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now();
//     },
// };

// console.log(
//     phonebook.add({
//         name: "Mango",
//         email: "mango@mail.com",
//         list: "friends",
//     }),
// );
// console.log(
//     phonebook.add({
//         name: "Poly",
//         email: "poly@mail.com",
//     }),
// )


// Example 3 - калькулятор
// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0);
//     },
//     mult() {
//         return (this.a ?? 1) * (this.b ?? 1);
//     },
//     me() {
//         return (this.a ?? 0) - (this.b ?? 0);
//     },
//     dil() {
//         return (this.a ?? 1) / (this.b ?? 1);
//     }
// };

// calculator.read(6, 2)
// console.log("ділення", calculator.dil());
// console.log("віднімання", calculator.me());
// console.log("множення", calculator.mult());
// console.log("додавання", calculator.add())
// console.log(calculator)