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
// updateCounter(5, counter.decrement.bind(counter));

const objA = {
    name: "A",
    age: 22,
    myAge(a, b) {
        console.log(this, a, b)
    }
}

objA.myAge(22, 44);

const objB = {
    name: "B",
    age:23
}

objA.myAge.call(objB, 1, 2)
objA.myAge.apply(objB, [5, 5])
objA.myAge.bind(objB, 1, 2)