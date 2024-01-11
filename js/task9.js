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

// const makeOrder = dish => {
// const DELAY = 1000;

//     return new Promise((resolve, reject) => {
//         const passed =Math.random() > 0.5;
//         setTimeout(() =>{
//             if(passed) {
//                 resolve(`✅ ось ваше замовлення ${dish}`);
//             }

//             reject("❌Ой! У нас закінчилися продукти!");
//         }, DELAY)
//     });

// };

// makeOrder('Пиріг').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log("onMakeOrderSuccess");
//     console.log(result)
// };

// function onMakeOrderError(result) {
//     console.log("onMakeOrderError");
//     console.log(result)
// };
// https://pokeapi.co/api/v2/

// const fetchPokemonById = id =>
//  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//  .then(res => res.json());

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(4).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//     console.log(pokemon)
// }

// function onFetchError(error) {
//     console.log(error)
// }

// console.log(
//     '%c Слава!',
// 'color: skyblue;');

// console.log(
//     '%c Україні!',
// 'color: yellow;')

const startBtn = document.querySelector(".js-button");
const container = document.querySelector(".js-container");
const item = document.querySelector(".item");

startBtn.addEventListener('click', onStart);

function onStart() {
    const result = [];
    [...container.children].forEach((box) => box.textContent = "");
    [...container.children].forEach((box, i) => {
        createPromise(i)
        .then((smile) => {
            box.textContent = smile;
            result.push('1');
        })
        .catch((smile) => (box.textContent = smile))
        .finally(() => {
            setTimeout(() => {
                if(i === container.children.length - 1) {
                    if(!result.length || result.length === 3) {
                        alert("Перемога")
                    } else {
                        alert("Поразка")
                    }
                }
            }, 500)
        });
    });
}

function createPromise(delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const random = Math.random();
            if(random > 0.5) {
                res('🤑');
            } else {
                rej('😈');
            }
        }, 1000 * delay);
    });
}