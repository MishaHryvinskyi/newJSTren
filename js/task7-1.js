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

const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
let selectedTag = new Set();

// tagsContainer.addEventListener('click', onTagBtnClick);
tagsContainer.addEventListener('click', onTagsContainerClick);

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

function onTagsContainerClick(evt) {
    if(evt.target.nodeName !== 'BUTTON') {
        return;
    }

    evt.target.classList.toggle('tags-button--active');
    selectedTag.add(evt.target.dataset.action)
    console.log(selectedTag);
}