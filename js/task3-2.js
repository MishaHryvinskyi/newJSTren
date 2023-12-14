// Працюємо з колекцією товарів в кошику:
// -getItems()
// -add(product)
// -remove(productName)
// -clear()
// -countTotalPrice()
// -increaseQuantity(productName)
// -decreaseQuantity(productName)

// {name: '🍎', price: 50}
// {name: '🍇', price: 70}
// {name: 'lemon🍋', price: 60}
// {name: 'strawberry', price: 100}


const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        const { items } = this; 

        for (const item of items) {
            // console.log(item);
            if(item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
        };

        items.push(newProduct);
    },
    remove(productName) {
        const { items } = this; 
      for (let i = 0; i < items.length; i += 1) {
        const { name } = items[i];

        if(productName === name) {
            // console.log('Найшли такий продукт:', productName);
            // console.log('Це індекс:', i);
            
            items.splice(i, 1);
        }
      }
      
    },
    clear() {
        const { items } = this;
        items = [];   
     },
    countTotalPrice() {
        const { items } = this;
        let totalPrice = 0;
        for (const item of items) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    },
    increaseQuantity(productName) {
        const { items } = this;

    },
    decreaseQuantity(productName) {
        const { items } = this;
    },
};

console.table(cart.getItems());


cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

//  console.table(cart.getItems());

console.table(cart.getItems());

console.table(cart.getItems());
cart.countTotalPrice();
console.log("Total", cart.countTotalPrice())
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(Math.max(temps));
// console.log(...temps);
// console.log(Math.max(...temps));

// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// const allTempsRevers = [...currentWeekTemps, ...lastWeekTemps];
// console.log(allTemps);
// console.log(allTempsRevers);
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
//   const { title, author, isPublic, rating } = book;
//   const accessType = book.isPublic ? "публічному" : "закритому";
//   const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = a.concat(b);
// console.log(c);

// const d =[...a, ...b];
// console.log(d);


// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.lpg',
//     stats: {
//         followers: 5603,
//         view:4827,
//         likes: 1308,
//         }, 
// };

// const { 
//     name,
//      tag,
//      location,
//      avatar,
//      stats: { followers, view, likes }, 
//     } = profile;
// console.log(followers);


//  const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
//  };

//  const entries =Object.entries(authors);

//  for (const [ name, rating ] of entries) {
//     // const [ name, rating ] = entrie;
//     // const name = entrie[0];
//     // const rating = entrie[1];
//     console.log(name, rating);
//  }

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.lpg',
//     stats: {
//         followers: 5603,
//         view:4827,
//         likes: 1308,
//         }, 
// };

// const { name, avatar, stats: {followers, view, likes,}, ...refsProps } =profile;

// const re = Object.values(refsProps);
// for (const r of re) {
//     console.log(r);
//     document.body.textContent = re[0];
// }

// console.log(refsProps);
// const profile = {
//     p1: 'Пушечка',
//     p2: 'Різдвяник',
//     p3: 'Гобелен',
//     av: 'Катічка',
//     photo1: 'https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/321794226_1561818460897261_1861313448952813905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vWgw3a4qDIkAX-g7FGc&_nc_ht=scontent.flwo4-2.fna&oh=00_AfDuOETWinHe6RoAouLvoQe96Qib8IQ1e2UqGNRaewBvuw&oe=644DEA79',
//     photo2: 'https://scontent.flwo4-1.fna.fbcdn.net/v/t39.30808-6/267103032_3785887578303277_3724493239916469742_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tsIblFrKSdcAX-LbB-2&_nc_ht=scontent.flwo4-1.fna&oh=00_AfDdZYcXaLPgZVpY2GDHkjC_F7mWQbAb_Ckd3uIVEw9X_A&oe=644DC61E',
//     photo3: 'https://scontent.flwo4-2.fna.fbcdn.net/v/t31.18172-8/28164780_2505082656383782_157716473639173224_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=84a396&_nc_ohc=i8oCO41DvlIAX-f26Tu&_nc_ht=scontent.flwo4-2.fna&oh=00_AfCjgMs9GXKMNVnf_tZnzz0cjgIf0Nmdjj8WJfhJ3Y-D-Q&oe=64706003',
//     avatar:'https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/279378373_3899826276909406_2744738361390060320_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vEt8lpU8O1UAX-1eDw2&_nc_ht=scontent.flwo4-2.fna&oh=00_AfAmm7VOLbKq11rKbDDSuWYygP7ArTzbcnuLr7RX-J7AXw&oe=644DDB7E',
// };


// const showProfileInfo = function ({
//     p1,
//     p2,
//     p3,
//     av,
//     photo1,
//     photo2,
//     photo3, 
//     avatar, 
// }) {
//    return `<div>
//    <ul class="pics">
//    <div>
//    <p>${p2}</p>
//    <li><img src="${photo1}" alt="user avatar" width="300" heigth="300"></li>
//    </div>
//    <div>
//    <p>${p1}</p>
//    <li><img src="${photo2}" alt="user avatar" width="300" heigth="300"></li>
//    </div>
//    <div>
//    <p>${p3}</p>
//    <li><img src="${photo3}" alt="user avatar" width="300" heigth="300"></li>
//    </div>
//    <div>
//    <p><b>${av}</b></p>
//    <li><img src="${avatar}" alt="user avatar" width="300" heigth="300"></li>
//    </div>
//    </ul> 
//    </div>`;
// };
// const uls = document.querySelector('ul');
// const markup = showProfileInfo(profile);
// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);

// showProfileInfo(profile);


console.log("==========================");

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// for(const [ name, item ] of entries) {
//     console.log(name, item);
// }

// /**
//  * Розраховуємо індекс маси тіла людини
//     * @param {Object} obj
//     * @returns {Number} BMI
//     */
// function calcBIM({ weight, height }) {

//     const numericWeight = Number(weight.replace(',','.'));
//     const numericHeight = Number(height.replace(',','.'));

//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// };

// console.log(calcBIM({
//     weight: '88,3', 
//     height: "1.75"
// }));

// console.log(calcBIM({
//     weight: '82,3', 
//     height: "1.85"
// }));

// /**
//  * 
//  * @param {Object} param0 
//  */
// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo ({
//     names: 'Jacob,William,Solomon,Artemius',
//     phones:'89001234567,89001112233,890055566377,890055566300',
// });

// function getBotReport({companyName, repairBots, defenceBots}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150, 
//     defenceBots: 50}));

// function createContact(partialContact) {
//     return {
//         id: generateID(),
//         createdAt: new Date(),
//         list: "default",
//         ...partialContact,
       
//     }
// };

// function generateID() {
//     return '_' + Math.random().toString(36).substr(2,9);
// }

// console.log(createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
// }));

// console.log(createContact({
//     name: "Poly",
//     email: "poly@mail.com",
// }));


// function transformUsername({firstName, lastName, ...props}) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props,
//     }
// }

// console.log(
//     transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
// }));

// console.log(
//     transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
// }));

const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      for(const book of this.books) {
        if(oldName === book) {
            this.books.splice(oldName, 0, newName);
            console.log(this.books)
        }
      }
    },
  };

  console.log(bookShelf.updateBook("Haze", "Псєчий"))