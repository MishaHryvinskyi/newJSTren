// const listWithId = document.getElementById('menu');

// listWithId.style.fontSize = '30px';
// listWithId.style.listStyle = 'none';
// listWithId.style.display = "flex";
// listWithId.style.padding = "30px";

// const firstMenuitem = document.querySelector('.menu-katia')
// firstMenuitem.style.color = "green";
// firstMenuitem.style.backgroundColor = "brown";
// firstMenuitem.style.padding = "30px";
// firstMenuitem.innerHTML = 'Ка<span class="accent">т</span>я';
// console.log(firstMenuitem.innerHTML)
// const secondMenuItem = document.querySelector('.menu-misha');
// secondMenuItem.style.padding = "30px";
// secondMenuItem.style.color = "blue";
// secondMenuItem.style.backgroundColor = "yellow";
// console.log(secondMenuItem.innerHTML)
// const threeMenuItem = document.querySelector('.menu-vohra');
// threeMenuItem.style.padding = "30px";
// threeMenuItem.style.color = "brown";
// threeMenuItem.style.backgroundColor = "green"
// console.log(threeMenuItem.innerHTML)
// const fourMenuItem = document.querySelector('.menu-male');
// fourMenuItem.style.padding = "30px";
// fourMenuItem.style.color = "yellow";
// fourMenuItem.style.backgroundColor = "blue";
// console.log(fourMenuItem.innerHTML)

// const heading = document.createElement("h1");
// heading.style.color = "black";
// heading.style.backgroundColor = "pink";
// heading.textContent = "КулюриииИнааа!";
// listWithId.before(heading)
// console.log(heading)



// const list = document.querySelector(".menu");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

 const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('.menu')
// console.log(navEl)
// const navItem = document.querySelectorAll('.menu-item');
// console.log(navItem);
// })

const imageEl = document.querySelector('.hero__image');
imageEl.alt ='Це Катя!';

magicBtn.addEventListener('click', () => {
  imageEl.src = 'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.6435-9/118516277_714405615777388_7029838492332625200_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=84a396&_nc_ohc=gKGRtTD7kWgAX_eMAMM&_nc_ht=scontent.flwo4-2.fna&oh=00_AfCeLz3Btw9okP0tl8tEccunq1ktGTV_aB1lZD9UCapkAg&oe=6478F43A';
  imageEl.alt = "Це файна качеча!"
  heroTitle.textContent = "Це Пташка!";
  console.log(heroTitle.textContent);
  document.body.style.backgroundColor = "purple";
  console.log(document.body.style.backgroundColor);
  const inputEL = document.querySelector('.js-input');
  console.log(inputEL.value);
  const inputValue = document.createElement('h2');
  inputValue.textContent =  inputEL.value;
  inputEL.prepend('.js-input');
});

const heroTitle = document.querySelector('.hero__title');
heroTitle.textContent = "Це Катічка!";


// imageEl.removeAttribute('src');
 
const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[0].dataset.action);
// console.log(actions[1].dataset.action);
// console.log(actions[2].dataset.action);

