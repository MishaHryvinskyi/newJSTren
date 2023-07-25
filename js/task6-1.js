// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;//вибирає перший дочірній вузод-улемент всередині list
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const node = firstListItem.parentNode;
// console.log(node);

// const firstChild = document.querySelector(".first-child");//знаходить елемент за селектором класу
// console.log(firstChild);
// firstChild.style.fontSize = "25px";
// firstChild.style.color = "skyblue";
// console.log("Значення value:", firstChild.value);
// console.log("2", firstChild);
// console.log(firstChild.classList);
// firstChild.classList.toggle("second-child");
// firstChild.classList.toggle("second-child");

// const idSelector = document.getElementById("me");//знаходить елемент за селектором id
// console.log(idSelector);
// idSelector.style.backgroundColor = "green";
// idSelector.style.color = "white";
// idSelector.style.width = "100px";
// idSelector.value = '9';
// idSelector.textContent = "Привіт задріт";
// console.log("Значення value:", idSelector.value);
// console.log('wr:', idSelector.textContent);

// const allSelectors = document.querySelectorAll("li");//знаходить псевдомасив всіх елементів за імям тегу lі
// console.log(allSelectors);
// idSelector.classList.add("first-child");
// console.log(idSelector);
// idSelector.classList.contains("me");
// idSelector.classList.contains("first-child");
// console.log("перевіряє на наявність класу", idSelector.classList.contains("me"));
// console.log("перевіряє на наявність класу", idSelector.classList.contains("first-child"));

// const Pname = document.createElement("p");
// Pname.textContent = "Отож бо";
// Pname.classList.add("second-child");
// console.log(Pname);

// const technologies = [ 
//     {
//         src: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/327752311_712412160523838_8797755971598358099_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=klMLdg_YusQAX-GB5_g&_nc_ht=scontent.flwo4-2.fna&oh=00_AfDYKbqnvH0OWyktfRzlY8_vsCgsPbnBMYJe8u2gFaB6jg&oe=64C2A5CE",
//         alt: "tian2",
//     }, 
//     {
//         src: "https://scontent.flwo4-1.fna.fbcdn.net/v/t39.30808-6/340156529_602703628161386_3346636304486835247_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Dk01R4S9tPUAX-Y5mG-&_nc_ht=scontent.flwo4-1.fna&oh=00_AfBGDjUiKXRrkzN5aIxmJjc2WJbvZMo97cW4fJPSRPkniw&oe=64C21731",
//         alt: "tian3",
//     }, {
//         src: "https://scontent.flwo4-1.fna.fbcdn.net/v/t39.30808-6/319942701_1526448974507651_3433907371879063902_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=j5L0IB3o5y8AX-TZe1l&_nc_ht=scontent.flwo4-1.fna&oh=00_AfATRd64pWFTGSInXEzngvJJ36kgxgURjucFmt31LLiemA&oe=64C2D363",
//         alt: "tian",
//     } 
// ];
//  const lists = document.querySelector(".list");

//  const markup = technologies
//   .map((technology) => `<li><img src="${technology.src}" width="200" height="350"></li>`)
//   .join("");

// console.log(markup);

// lists.insertAdjacentHTML("beforeend", markup);

// console.log(document);
// const navEl = document.querySelector("ul");
// const navItemEl = document.querySelector("li");
// const navLinksEl = document.querySelectorAll("li");
// const imgEl = document.querySelector('.img-l');


// const root = document.querySelector('.root');
// const btnEl = document.querySelector(".btn");
// const we = document.createElement('img');
// we.src = "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/9b/3c/ec/9b3cec236be532bfd34bb8f8dd9f7a28/9b3cec236be532bfd34bb8f8dd9f7a28.24.jpg";
// we.alt = "немає фото";
// we.removeAttribute('src');

// btnEl.addEventListener('click', () => {
//     root.appendChild(we);
// });

// const actions = document.querySelectorAll('.js-action button');
// console.log(actions[2].dataset.action);
// console.log(actions[1].getAttribute('data-action'));
// console.log(actions[0].getAttribute('data-action'));

// const navEl = document.querySelector(".site-nav");
// const firstNavItem = navEl.querySelector('.site-nav__item');
// const firstChi = navEl.lastElementChild;
// // console.log(firstNavItem);
// // console.log(firstChi);
// // console.log(navEl);

// const navItemEle = document.createElement('li');
// navItemEle.classList.add('site-nav__item');

// const navLinlEle = document.createElement('a');
// navLinlEle.textContent = "Особистий кабінет";
// navLinlEle.classList.add('site-nav__link');
// navLinlEle.href = "/hovever";

// navItemEle.appendChild(navLinlEle);

// console.log(navItemEle);

// navEl.insertBefore(navItemEle, navEl.children[3]);

// const rootEl = document.querySelector('.root');

// const titleEl = document.createElement('h1');
// titleEl.textContent = 'Кулюрина';
// titleEl.classList.add('title')

// const imgEl = document.createElement("img");
// imgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSieGfaDok9Ca2qZlrVV7O_5-y3eNWzCZEdg&usqp=CAU";
// imgEl.alt = "Кераміка";
// imgEl.width = "200";

// // rootEl.appendChild(titleEl);
// // rootEl.appendChild(imgEl);

// rootEl.append(titleEl, imgEl);

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const buttonEl = document.createElement('button');
// buttonEl.type = "button";
// buttonEl.textContent = colorPickerOptions[1].label;
// buttonEl.style.backgroundColor = colorPickerOptions[1].color;

// console.log(buttonEl);

// const colorPickerEl = document.querySelector('.color-picker');

// colorPickerEl.appendChild(buttonEl);

// const makeColorPicker = colorPickerOptions
// .map(colorPick => 
// `<button style=" background-color: ${colorPick.color}" type="button" >${colorPick.label}</button>`)
// .join('');

// colorPickerEl.insertAdjacentHTML("beforeend", makeColorPicker);

// const picturesData = [
//     {src: 'https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/321794226_1561818460897261_1861313448952813905_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TdgVtjd6rB8AX8aOnJZ&_nc_ht=scontent.flwo4-2.fna&oh=00_AfDsOUPv8FYUSLT4eYpteHKMwP9mBQ6g7jxccG9KUFnn_g&oe=64C29739', alt: 'Різдвяник'},
//     {src: 'https://scontent.flwo4-2.fna.fbcdn.net/v/t31.18172-8/28164780_2505082656383782_157716473639173224_o.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=84a396&_nc_ohc=NKBmOIkGVH8AX9WTI8D&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBnl_lkVXXDqacwe6Yty08cS551g9zMk5uZSpDCbiv8VQ&oe=64E50CC3', alt: 'Шлях'},
//     {src: 'https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/313203111_4077233002502065_8750628107843701626_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aNQZgGX3qfkAX8nGxkQ&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBVmCzUn3LNvgFfntxAUWUjX0qYjfTsLnOhq0JWZZ4L1w&oe=64C37867', alt: 'три'},
//     {src: 'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.6435-9/31682413_2554601674765213_5916495472339451904_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=-74H-4c4hrsAX8QuVWO&_nc_ht=scontent.flwo4-2.fna&oh=00_AfDr04fJ62pa5blRFetGw7Glim9dMJnTziPOa1WQ22Y5ig&oe=64E52023', alt: 'лч'},
// ];

// const makePhoto = picturesData
//     .map(pik =>
//     `<li><img src="${pik.src}" alt="${pik.alt}" width="300"></li>`)
//     .join('');

//     colorPickerEl.insertAdjacentHTML("beforeend", makePhoto);

// const product = {
//     name: "Сервопроводи",
//     description: 
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex assumenda minus commodi saepe ea mollitia consequatur deserunt rerum provident itaque, voluptas velit nihil, nam excepturi id hic magni dolorum iste.",
//     price: 2000,
//     available: true,
//     onSale: true,
// };


// const marcupProduct = `
// <article class="product">
//     <h2 class="product__name">${product.name}</h2>
//     <p class="product__descr">${product.description}</p>
//     <p class="product__price">${product.price}</p>
// </article>
// `;

// colorPickerEl.insertAdjacentHTML("beforeend", marcupProduct);

// const { name, description, price } = product;



// const productArticleEl = document.createElement('article');
// productArticleEl.classList = "product";

// const productTitleEl = document.createElement('h2');
// productTitleEl.textContent = name;
// productTitleEl.classList = "product__name";

// const productParagraphEl = document.createElement('p');
// productParagraphEl.textContent = description;
// productParagraphEl.classList = "product__descr";

// const productPriceEl = document.createElement('p');
// productPriceEl.textContent = `Ціна: ${price} грн`;
// productPriceEl.classList = "product__price";

// productArticleEl.append(productTitleEl, productParagraphEl, productPriceEl);
// console.log(productArticleEl);
// colorPickerEl.append(productArticleEl);



//---1. Створити список технологій що використовуються на курсі Fullstack за допомогою js

// const container = document.getElementById('container'); 
// //шукаємо контейнер в нашому випадку <div> за його id

// const technologies = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node' ];
// масив технологій який потрібно розприділити по <li>шках

// const listEl = document.createElement('ul');//Створюємо елемент <ul>
// listEl.classList = 'list';//додаємо йому клас
// // container.append(listEl);//і вносимо його в контейнер

// * методом [map] моя спроба =================================
// const markupListItems = technologies // оголошуємо змінну розмітки
// .map(technology => // методом map розбиваємо наш масив на елементи
// `<li class="list-item">${technology}</li>`)// а саме створюємо лішки з класами за допомогою шаблонного рядка і в кожну лішку додаємо по одному елементу масиву
// .join('');// join розділяє рядок який ми отримали
// listEl.innerHTML = markupListItems;// вставляємо розмітку з лішок у ul

//* методом [for of]=============================
// for (const technology of technologies) {

//     const itemEl = document.createElement('li');
//     // itemEl.textContent = technology;
//     const text = document.createTextNode(technology); // createTextNode - створює не вузол елементу а вузол тексту
//     itemEl.appendChild(text); //вставляємо текстовий вузол в лішки
//     itemEl.classList = 'list-item';
//     listEl.appendChild(itemEl);
// };

// метод [.map()] ==============================

//  Варіант з шаблонним рядком дя всієї розмітки
// const marcup = 
// `<ul class="list">
//     ${
//         technologies.map(technology => 
//             `<li class="list-item">
//                 ${technology}
//             </li>`)
//             .join('')
//     }
// </ul>`;

// document.body.insertAdjacentHTML("afterbegin", marcup);

//  Метод [reduce] ====================

// const markup = 
// `<ul class="list">${technologies.reduce(
//     (acc, technology) => acc += `<li class="list-item">${technology}</li>`,
//     ""
// )}</ul>`;

// console.log(markup);
// document.body.insertAdjacentHTML("afterbegin", markup);

//---2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//     { 
//         label: "red",
//         color: '#FF0000',
//     },
//     { 
//         label: "green",
//         color: '#00FF00',
//     },
//     { 
//         label: "blue",
//         color: '#0000FF',
//     },
//     { 
//         label: "yellow",
//         color: '#FFFF00',
//     },
// ];

// const containerEl = document.getElementById('container');

// ==== метод [for... of] ==========

// for (const color of colors) {
//     const btnEl = document.createElement('button');
//     const textBtn = document.createTextNode(color.label);
//     btnEl.appendChild(textBtn);
//     btnEl.style.backgroundColor = color.color;
//     btnEl.type = "button";
//     console.log(btnEl);
//     containerEl.appendChild(btnEl);
// };

// ==== метод [map] =========

// мій варіант
// const markupBtn = colors.map(({ label, color }) =>
//     `<button type="button" style="background-color: ${color}">
//         ${label}
//     </button>`
//     ).join('');
//     console.log(markupBtn);
//     document.body.insertAdjacentHTML('afterbegin', markupBtn);

// ===========================

// тут може бути або map або forEach
// const fragment = document.createDocumentFragment(); //cтворення фрагменту який замість чотири рази вставляти кнопку робить це за раз!!!

// colors.forEach(({ color, label }) => {
//     const buttonEl = document.createElement('button');
//     buttonEl.textContent = label;
//     buttonEl.style.fontWeight = 800;
//     buttonEl.type = 'button';
//     buttonEl.style.backgroundColor = color;

//     fragment.appendChild(buttonEl);
//     // document.body.appendChild(buttonEl);
// });
// document.body.appendChild(fragment);

// const itemsEl = document.querySelectorAll('.item');

// itemsEl.forEach(el => {
//     console.log(el.firstElementChild.textContent);
//     console.log(el.lastElementChild.children.length);
// });
