
// class User {
//     // Синтаксис оголошення методу класу
//     constructor({ name, email, age }) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//       this.age = age;
//     }

//     getEmail() {
//         return this.email;
//       }

//       changeName(newName) {
//         return this.name = newName;
//       }

//       changeEmail(newEmail) {
//         this.email = newEmail;
//       }
//   }



  
//   const mango = new User({ 
//     name: "Манго",
//     email: "mango@mail.com",
//     age: 25
// });
//   console.log(mango); 

//   mango.changeEmail('monoMano@mail.com');

//   console.log(mango); 
//   const poly = new User({
//     name:"Поли",
//     email: "poly@mail.com",
//     age: 17
// });
//   console.log(poly); 

//   const katya = new User({
//     name: "Катя",
//     email: "Katya@mail.com",
//     age: 27
// });
//   console.log(katya)
//   katya.changeName('Катічка =)');

//   console.log(katya);

// const numbers = [1, 5, 2, 4, 3];

// // const greaterThenTwo = numbers.filter(num => num > 2);
// // console.log('greaterThenTwo', greaterThenTwo);

// // const multByThree = greaterThenTwo.map(num => num * 3);
// // console.log('multByThree', multByThree);

// // const sorted = multByThree.sort((a, b) => a - b);
// // console.log('sorted', sorted);

// const chainingNumber = numbers
// .filter(num => num > 2)
// .map(num => num * 3)
// .sort((a, b) => a - b);

// console.log('chainingNumber', chainingNumber);

// const objC = {
//     z: 5,
// };
// console.log('objC', objC);
// console.log(objC.hasOwnProperty('y'))
// console.log(objC.hasOwnProperty('z'))
// console.log(objC.hasOwnProperty('x'))

// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB', objB);
// console.log('objB.z', objB.z);
// console.log(objB.hasOwnProperty('y'))
// console.log(objB.hasOwnProperty('z'))
// console.log(objB.hasOwnProperty('x'))

// const objA = Object.create(objB);
// objA.x = 7;
// console.log('objA', objA);
// console.log('objA.y', objA.y);
// console.log('objA.z', objA.z);
// console.log(objA.hasOwnProperty('y'))
// console.log(objA.hasOwnProperty('z'))
// console.log(objA.hasOwnProperty('x'))


// const dummyObj = Object.create({ message: "Це властивість обєкта прототипу" });
// dummyObj.message = "Це особиста властивість обєкта";
// console.log(dummyObj);
// console.log(dummyObj.message);

// const Car = function ({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.chengePrice = function (newPrice) {
//     this.price = newPrice;
// };
// Car.prototype.addPropertyColor = function (color) {
//     this.color = color;
// };

// const myCar = new Car ({
//     brand: "Audi",
//     model: "Q3",
//     price: 35000 });
// console.log(myCar);

// myCar.chengePrice(45000);
// myCar.addPropertyColor('black');
// console.log(myCar)


// const myCar1 = new Car ({
//     brand: "BMW",
//     model: "X6",
//     price: 50000 });

// console.log(myCar1);

// const myCar3 = new Car ({
//     brand: "Audi",
//     model: "A6",
//     price: 65000 });
// console.log(myCar3);

// const User = function ({ name, email, password } = {}) {
//     this.name = name;
//     this.password = password;
//     this.email = email;
// };

// User.prototype.chengeEmail = function (newEmail) {
//     this.email = newEmail;
// }
// User.prototype.addAge = function (age) {
//     this.age = age;
// }

// const katya = new User ({
//     name: 'Katya',
//     email: "katyaVuvt@gmail.com",
// });
// katya.password = 12345;
// katya.chengeEmail("me@gmail.com");
// katya.addAge(27);
// console.log(katya);

// const misha = new User ({
//     name: "Misha",
//     email: "misha@gmail.com",
//     password: 5412,
// });
// console.log(misha);
// misha.addAge(30);

// const zchaba = new User ({
//     name: "Zchaba",
// })
// console.log(zchaba)

const CounterPlugin = function ({ 
    rootSelector, 
    initialValue = 0, 
    step = 1 
} = {}) {
   
    this._value = initialValue;
    this._step = step;

    this._refs = this._getRefs(rootSelector);
    this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    console.log(rootSelector);

    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');
    console.log(refs.incrementBtn);
    console.log(refs.value);
    console.log(refs.decrementBtn);
    return refs;
};

CounterPlugin.prototype._bindEvents = function () {
   this._refs.incrementBtn.addEventListener('click', () => {
    console.log(this)
    this.increment();
   })

   this._refs.decrementBtn.addEventListener('click', () => {
    console.log(this)
    this.decrement();
   })
}

CounterPlugin.prototype.updateValueUi = function () {
    this._refs.value.textContent = this._value;
}

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
    this.updateValueUi();
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
    this.updateValueUi();
};

const counter1 = new CounterPlugin({ rootSelector:'#counter-1', step: 20 });

console.log(counter1);
counter1.increment();
counter1.increment();
console.log(counter1);


