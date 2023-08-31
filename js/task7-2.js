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

const { list, input } = refs;

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

const fetchUsersBtn = document.querySelector(".btn1");
const userList = document.querySelector(".user-list1");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://db-contacts-czrd.onrender.com/api/contacts").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.phone}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}