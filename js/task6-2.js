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

// =====================Вішаємо слухачі подій==========================
// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// addListenerBtn.addEventListener('click', () => {
//   console.log('вішаю слухача подій на цільову кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick)
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('знімаю слухача подій');

//   targetBtn.removeEventListener('click', onTargetBtnClick)
// })
  
// function onTargetBtnClick() {
//   console.log("Клік по цільовій кнопці");
// };


// =====================Слухачі Форми==========================
// const formEl = document.querySelector('.js-register-form');

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;

//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;

//   const formData = {
//     mail,
//     password,
//     subscription,
//   };

//   console.log(formData);
// };
// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
  
//   formData.forEach((value, name) => {
//     console.log('Name:', name);
//     console.log("Value:", value);
//   });
// };

// ===================Події Інпуту============================

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   license: document.querySelector('.js-licence'),
//   btn: document.querySelector('.js-button'),
// };

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);
// refs.input.addEventListener('input', onInputChange);
// refs.license.addEventListener('change',onLicenceChange);

// function onInputChange(e) {
//   console.log(e.currentTarget.value);
//   refs.nameLabel.textContent = e.currentTarget.value;
// };

// function onInputFocus() {
//   console.log('інпут отримє фокус події');
// };

// function onInputBlur() {
//   console.log("інпут отримує блюр");
// };

// function onLicenceChange(e) {
//   refs.btn.disabled = !e.currentTarget.checked;
// };

// ====================Події клавіатури=========================

// window.addEventListener('keydown', onKeypress);

// function onKeypress(e) {
//     console.log(e.key);
//     console.log(e.code);
// };

// ====================Модальне вікно=========================

// оолошуємо refs обєкт в якому знаходимо по data-атрибутах посилання на кнопки і бекдроп
const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

// деструктуризуємо обєкт refs
const { openModalBtn,  closeModalBtn, backdrop } = refs;

// додаємо слухача на кнопку відкрити
openModalBtn.addEventListener('click', onOpenModal);
// додаємо слухача на кнопку закрити
closeModalBtn.addEventListener('click', onCloseModal);
// додаємо слухача на backdrop
backdrop.addEventListener('click', onBackdropClick);

// функція для відкриття модалки
function onOpenModal() {
    //вішаєм слухача подій на window при натисканні на кнопку Esc при відкритті модалки
    window.addEventListener('keydown', onEscapePress);
    //додаємо клас на body
    document.body.classList.add('show-modal');
};

// функція для закриття модалки
function onCloseModal() {
     //знімаємо слухача подій на window при натисканні на кнопку Esc при закритті модалки
    window.removeEventListener('keydown', onEscapePress);
    //знімаємо клас з body
    document.body.classList.remove('show-modal');
};

//функція для закриття модалки при натисканні по бекдропу
function onBackdropClick(event) {
    //перевіряємо якщо користувач натиснув на бекдроп тоді знімаємо класс з боді
    if (event.target === event.currentTarget) {
        onCloseModal();//викликаємо функцю для закриття модалки
    }
};

function onEscapePress(event) {
    // оголошуємо константу для зберігання Esc
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    //перевіряємо якщо користувач натиснув кнопку "Escape" знімаємо класс з боді
    if(isEscKey) {
        onCloseModal();//викликаємо функцю для закриття модалки
    }
};

