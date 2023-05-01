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



const list = document.querySelector(".menu");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");