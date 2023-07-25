// const Btn = document.querySelector('.Btns');
// console.log(Btn);
// const handleClick = event => {
//     console.log("event: ", event);
//     console.log("event type: ", event.type);
//     console.log("target: ", event.target);
// }

// Btn.addEventListener("click", handleClick);

// document.addEventListener("keydown", e => {
//     console.log("keydown:", e);
//     console.log("key:", e.key);
//     console.log("code:", e.code);
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();
  
//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//       console.log("«Ctrl + s» or «Command + s» combo");
//     }
//   });

// const btn = document.querySelector('.btn');


// btn.addEventListener("click", () => {
//   console.log('тицьнули в кніпочку!');
// });

// const btn = document.querySelector('.btn');

// const handleClick = e => {
//   e.preventDefault();
//   const title = document.createElement('img');
//   title.width = 200;
//   title.src = "https://report.if.ua/wp-content/uploads/2021/04/zdyvuvannja.jpeg";
//   document.body.appendChild(title);
//   // console.log(e.type);
//   // console.log(e.currentTarget);
// };

// btn.addEventListener("click", handleClick);
// btn.addEventListener("keydown", e => {
//   console.log(e.key);
//   console.log(e.code);
// });

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');


addListenerBtn.addEventListener('click', () => {
  console.log('вішаю слухача подій на цільову кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick)
});

removeListenerBtn.addEventListener('click', () => {
  console.log('знімаю слухача подій');

  targetBtn.removeEventListener('click', onTargetBtnClick)
})
  
function onTargetBtnClick() {
  console.log("Клік по цільовій кнопці");
};