// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//     setTimeout(() =>{
//         if(canFulfill) {
//             resolve('Проміс виконався успішно, з результатом (виконався fulfilled)');
//         } else {
//             reject("Проміс виконався з помилкою (відхилено rejected)");
//         }
//     }, 2000)
    
// });

// promise.then(onFullfilled, onRejected);

// function onFullfilled(result) {
//     console.log(`✅${result}`)
// }

// function onRejected(error) {
//     console.log(`❌${error}`)
// }

// promise
// .then(result => {
//     console.log(result);
//     return 2;
// })
// .then(x => {
//     console.log(x);
//     return x * 10;
// })
// .then(y => {
//     console.log(y)
// }).catch(error => {
//    console.log(error);
// })

const makeOrder = dish => {
const DELAY = 1000;

    return new Promise((resolve, reject) => {
        const passed =Math.random() > 0.5;
        setTimeout(() =>{
            if(passed) {
                resolve(`✅ ось ваше замовлення ${dish}`);
            }

            reject("❌Ой! У нас закінчилися продукти!");
        }, DELAY)
    });

};

makeOrder('Пиріг').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
    console.log("onMakeOrderSuccess");
    console.log(result)
};

function onMakeOrderError(result) {
    console.log("onMakeOrderError");
    console.log(result)
};