// const products = [
//     {
//         id: 'sku1',
//         qty: 1,
//     },
//     {
//         id: 'sku2',
//         qty: 2,
//     },
//     {
//         id: 'sku3',
//         qty: 3,
//     },
//     {
//         id: 'sku1',
//         qty: 6,
//     },
//     {
//         id: 'sku1',
//         qty: 8,
//     },
//     {
//         id: 'sku2',
//         qty: 19,
//     },
//     {
//         id: 'sku4',
//         qty: 1,
//     },
// ];

// function sortProduct(arr) {
//     for(let i = 0; i < arr.length; i += 1) {
//         for(let j = i + 1; j < arr.length; j += 1) {
//            if(arr[i].id === arr[j].id) {
//             arr[i].qty += arr[j].qty;
//             arr.splice(j, 1);
//             j -= 1;
//            }
//         }
//     }
// };

// sortProduct(products);
// console.log(products);

// function findUniq(arr) {
//     for(let i = 0; i < arr.length; i += 1) {
//         const result = arr[i].split('').every(item => {
//             for(let j = 0; j < arr.length; j += 1) {
//                 if(i !== j) {
//                     if(!arr[j].includes(item)) {
//                         return true
//                     }
//                 } else {
//                     return false;
//                 }
//            }
//         })
//         if(result) {
//             return arr[i]
//         }
//     }
// }

// console.log(findUniq(['abc', 'acb', 'bav', 'foo', 'bca', 'cabcl  
// console.log(localStorage);

// localStorage.setItem("my-data", JSON.stringify({ name: "Mango", age: 2 }));


// const saveData = localStorage.getItem("my-data");
// console.log("saveData", saveData);

//  const parsData = JSON.parse(saveData);
//  console.log("parsData", parsData);
// const STORAGE_KEY = "feedback-message";

// const refs = {
//     form: document.querySelector(".js-feedback-form"),
//     textarea: document.querySelector(".js-textarea"),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener("input", onTextareaInput);

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log("відправляємо форму");

//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(event) {
//     const massage = event.currentTarget.value;
//     localStorage.setItem(STORAGE_KEY, massage)
// }

// function onPopulateTextarea() {
//     const sevedMessage = localStorage.getItem(STORAGE_KEY);
//     if(sevedMessage) {
//         console.log(sevedMessage);
//         refs.textarea.value = sevedMessage;
//     }
// }
// onPopulateTextarea()

// const arr = [1, 2, 3, 4];

// localStorage.setItem('SET_KEY', JSON.stringify(arr));
// console.log(localStorage.getItem("SET_KEY"))
// console.log(JSON.parse(localStorage.getItem("SET_KEY")));
// // localStorage.removeItem("SET_KEY");
// // localStorage.clear();
// const LOCAL_KEY = "lokal";
// const LOCAK_VALUE = "Псєчий";

// const SESSION_KEY = 'session';
// const SESSION_VALUE = "Смердєчий";

// const refs = {
//     bthLocal: document.querySelector(".js-local"),
//     btnSession: document.querySelector(".js-session")
// };
// const { bthLocal, btnSession } = refs;

// console.log(bthLocal);
// console.log(btnSession);

// bthLocal.addEventListener('click', () => {
//     localStorage.setItem(LOCAL_KEY, LOCAK_VALUE);
// });

// btnSession.addEventListener('click', () => {
//     sessionStorage.setItem(SESSION_KEY, SESSION_VALUE);
// })

// const date1 = Date.now();
// console.log("date1", date1);

// setTimeout(() => {
//     const date2 = Date.now();
//     console.log("date1", date1);
//     console.log("date2", date2);

//     console.log(date2 - date1)
// }, 3000)

const refs = {
    startBtn: document.querySelector('button[data-action-start'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};

class Timer {
    constructor({ onTick }) {
        this.isActiv = false;
        this.intervalId = null;
        this.onTick = onTick;
        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if(this.isActiv) {
            return;
        }
        const startTime = Date.now();
        this.isActiv = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time)
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActiv = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
        return { hours, mins, seconds }
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }
}

const timer = new Timer({
    onTick: updateClockface
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, mins, seconds }) {
    refs.clockface.textContent = `${hours}:${mins}:${seconds}`;
}
