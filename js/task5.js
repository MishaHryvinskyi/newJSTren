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


const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const refs = {
    incrementBtn: document.querySelector('.js-increment'),
    decrementBtn: document.querySelector('.js-decrement'),
    valueEL: document.querySelector('.js-value'),
};

refs.decrementBtn.addEventListener('click', function () {
    counter.increment();
    refs.valueEL.textContent = counter.value;
});

refs.incrementBtn.addEventListener('click', function () {
    counter.decrement();
    refs.valueEL.textContent = counter.value;
});

