// фільтер
const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'Reac Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
];

// 1 зарендерити розмітку списку
// 2 Слухаєм зміну фільтра
// 3 Фільтруємо дані і рендеремо нові елементи

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

const { list, input, container } = refs;

const listItemMarkup = createItemsMarkup(tech);

list.innerHTML = listItemMarkup;

function createItemsMarkup (items) {
    return items.map(({ label }) =>
     `<li>${label}</li>`).join("");
};

input.addEventListener('input', onFilterChange);

function onFilterChange(event) {
  const filter = event.target.value.toLowerCase();
  const filteredItem = tech.filter(t => t.label.toLowerCase().includes(filter))
  const listItemMarkup = createItemsMarkup(filteredItem);

  list.innerHTML = listItemMarkup;
};