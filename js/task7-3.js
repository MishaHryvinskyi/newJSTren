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