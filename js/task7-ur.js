// Завдання! Створити калькулятор вартості продукту в залежності від ціни.
// При роботі з подіями використовувати делегування. Відрендерити всю розмітку через JS

// При зміні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// в підписі другого інпута має бути кольорова підказка скільки кг вибранв користувач на другому інпуті

// Кольорова підказка має змінювати своє значення при перетягуванні повзунка

// в інпуті №2 мін і макс поріг встановлюється самостійно

// при завантаженні сторінки скрипт має автоматично розраховувати вартість на основі данних за замовчуванням які ви встановите в розмітці

// розмітка
// <div class="container">
//   <h2 class="title">Скільки коштує м'ясо на шашлик?</h2>
//   <form 
//   action="#" 
//   class="form" 
//   id="form"
//   >
//     <label for="price">Ціна грн</label>
//     <input 
//     type="text" 
//     id="price" 
//     name="price" 
//     value="50"
//     >
//     <label for="quantity">
//       Кількість
//       <span 
//         class="amount" 
//         id="amount"
//         >1
//       </span> кг
//   </label>
//   <input 
//   type="range" 
//   id="quantity" 
//   name="quantity"
//   value="1"
//   min="1", max="20"
//   >
//   </form>
//   <p class="text-right total" id="total"></p>
// </div>


// обєкт де будемо зберігати  Ціну і кількість і методом з підрахунку загальної суми
const data = {
    price: 50,
    quantity: 1,
    calcTotalPrice() {
        return (this.price * this.quantity).toFixed(2);
    }
};

// посилання на форму total і amount
const refs = {
    formEl: document.getElementById('form'),
    totalEl: document.getElementById('total'),
    amountlEl: document.getElementById('amount'),
}
// деструктуризуємо refs
const { formEl, totalEl, amountlEl } = refs;

dataFill();
update();
console.log(data)
//слухач подій при зміні в формі
formEl.addEventListener('change', handleFormChange);

function handleFormChange({ target }) {
    // деструктуризуємо value 
    const { value } = target;

  if( target === formEl.elements.quantity) {
    amountlEl.textContent = value;
  }
  // змінюємо значення атрибуту на той який вибрав користувач
  target.setAttribute("value", value);
dataFill();
update();
}

// функція яка наповнює об'єкт date значеннями з атрибутів value у елементів форм
function dataFill() {
    data.price = form.elements.price.getAttribute("value");
    data.quantity = form.elements.quantity.getAttribute("value");
}

// функція яка оновлює інтерфейс (рахує вартість)
function update() {
    totalEl.textContent = data.calcTotalPrice() + "грн";
    // змінюємо значення при оновленні сторінки(показує актуальне значення атрибуту value)
    amountlEl.textContent = data.quantity;
}

