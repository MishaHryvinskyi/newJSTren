// ==============task2
const listEl = document.querySelector("#ingredients");

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

//   for (const ingredient of ingredients) {
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = ingredient;
//     console.log(listItemEl);
//     listEl.appendChild(listItemEl);
//   }

const listItemEl = document.createElement('li');

const markup = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');

listEl.insertAdjacentHTML("beforeend", markup);

// ==============task3

const galleryEl = document.querySelector('.gallery');

const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
      width: 200,
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
      width: 200,
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
      width: 200,
    },
  ];

  const markupGallery = images.map(({ url, alt, width }) => `<li><img src="${url}" alt="${alt}" width="${width}" height="140"></li>`).join('');

galleryEl.insertAdjacentHTML("beforeend", markupGallery);

// ==============task4

const refs = {
    counterValue: document.getElementById('value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
};

const { counterValue, decrement, increment } = refs;

let value = 0;

decrement.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
});

increment.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
});

// ==============task5

const elements = {
    inputEl: document.getElementById('name-input'),
    outputEl: document.getElementById('name-output'),
};

const { inputEl, outputEl } = elements;

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
    outputEl.textContent = e.currentTarget.value; 
};

// ==============task6

const validationInput = document.getElementById('validation-input');
console.log(validationInput);

validationInput.addEventListener('blur', onInputChech);

function onInputChech(e) {
    const validationInputValue = e.currentTarget.value.length === 6;
    if (!validationInputValue) {
        validationInput.classList.add('invalid');
    } else if (validationInputValue) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
}

//  ==============task7
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
});