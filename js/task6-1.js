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

const actions = document.querySelectorAll('.js-action button');
console.log(actions[2].dataset.action);
console.log(actions[1].getAttribute('data-action'));

