// const containerEl = document.querySelector('.js-container');

// containerEl.addEventListener('click', onClick)

// function onClick(event) {
//     if(event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     console.log("ckick:", event.target)
// };

// // ========================Добавлення кнопки==============================
// const addBtn = document.querySelector('.js-add-button');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBattonClick);

// function onAddBattonClick() {
//     const btn = document.createElement('button');
//     btn.textContent = labelCounter;
//     btn.type = 'button';

//     containerEl.appendChild(btn);
//     labelCounter +=1;
// }
// ========================Фільтрація==============================

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// let selectedTag = new Set();

// tagsContainer.addEventListener('click', onTagBtnClick);
// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagBtnClick(event) {
//     if(event.target.nodeName !== 'BUTTON') {
//         return
//     }

//     const currentActiveBtn = document.querySelector('.tags-button--active');
//     // якщо currentActiveBtn має клас .tags-button--active тоді знімаємо його
//     if(currentActiveBtn) {
//         // знімаємо клас'tags-button--active'
//         currentActiveBtn.classList.remove('tags-button--active');
//     } 
//     // додаємо клас 'tags-button--active'
//     const nextActiveBtn = event.target;
//     nextActiveBtn.classList.add('tags-button--active');
//     selectedTag = nextActiveBtn.dataset.action;
//     console.log(selectedTag);
// }

// function onTagsContainerClick(evt) {
//     if(evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     evt.target.classList.toggle('tags-button--active');
//     selectedTag.add(evt.target.dataset.action)
//     console.log(selectedTag);
// }

// ==========================ColorPicker===========================

const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
];

const colorPicker = document.querySelector('.color-picker');

// const colorPickerMarcup = colors
//     .map(color => 
//     `<li class="color-picker__item" style="background-color: ${color.hex}">
//         <p class="color-picker__paragraph">${color.rgb}</p>
//     </li>`)
//     .join('');

// colorPicker.insertAdjacentHTML("beforeend", colorPickerMarcup);

colorPicker.addEventListener('click', onPaletClick);

function onPaletClick(event) {
   const isColorSwatchEl = !event.target.classList.contains('color-swatch');

    if(isColorSwatchEl) {
       return;
    }

    const swatchEl = event.target;
    const parentColorCard = swatchEl.closest('.color-card');

    removeActiveClass();

    addActiveCardClass(parentColorCard);

    setBodyBgColor(swatchEl.dataset.hex);
};

function removeActiveClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
    if(currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
};

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
};

function addActiveCardClass(card) {
    card.classList.add('is-active')
};

function createColorCardsMarcup(colors) {
    return colors.map(({ hex, rgb }) => { 
        return`
            <div class="color-card">
                <div 
                    class="color-swatch"
                    data-hex="${hex}"
                    data-rgb="${rgb}"
                    style="background-color: ${hex}"
                >
                </div>
                <div class="color-meta">
                        <p>HEX: ${hex}</p>
                        <p>RGB: ${rgb}</p>
                    </div>
            </div>`; 
        }).join('');
};

const cardMarkup = createColorCardsMarcup(colors);
colorPicker.insertAdjacentHTML("beforeend", cardMarkup);
