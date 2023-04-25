// Працюємо з колекцією товарів в кошику:
// -getItems()
// -add(product)
// -remove(productName)
// -clear()
// -countTotalPrice()
// -increaseQuantity(productName)
// -decreaseQuantity(productName)

// {name: 'apple', price: 50}
// {name: 'grape', price: 70}
// {name: 'lemon', price: 60}
// {name: 'strawberry', price: 100}


const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grape', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 100 });

console.table(cart.getItems());




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

