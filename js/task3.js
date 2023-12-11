// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// }

// for (const key in book) {
//     if(book.hasOwnProperty(key)) {
//      console.log(key);
//      console.log(book[key]);
//     }
// }

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };
// console.log(goods);
// const values = Object.values(goods);

// let total = 0;
// for (const value of values) {
//     total += value;
// }

// console.log("Загальна сума у корзині goods", total)



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
//   ];

//   for (const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

//   const bookName = [];

//   for (const book of books) {
//     bookName.push(book.title);
//   }

//   console.log("Масив заголовків:", bookName);

//   let totalRating = 0;

//   for (const book of books) {
//     totalRating += book.rating;
//   }
//   const averageRating = (totalRating / books.length).toFixed(1);
//   console.log(averageRating);

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName] : inputValue,
// }

// console.log(colorPickerData);

// // document.body.style.backgroundColor = colorPickerData.color;
// const a = {x: 1, y: 2};
// const b = a;
// b.c = 9;

// console.log("a", a);
// console.log("b", b);
// console.log(a === b);

// const playlist = {
//     name: "Мій суаеп плейлист",
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     chanheName(newName) {
//         this.name = newName;
//     },
//     chenheRating(newRating) {
//         this.rating = newRating;
//     },
//     changeTracks(newTraks) {
//         this.tracks[1] = newTraks;
//     },
//     addTracks(add) {
//         this.tracks.push(add);
      
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }

// };
// console.log(playlist.getTrackCount());
// playlist.addTracks('Мулярела');
// playlist.changeTracks('Кабачок');
// console.log(playlist.getTrackCount());
// playlist.chenheRating(12);
// playlist.chanheName('Мега супер плейлист');
// console.log(playlist);
// console.log(playlist.tracks)

// const feedback = {
//     good:5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);

// for (const value of values) {
//     totalFeedback += value;
    
// }

// const obj = Object.keys(feedback);

// for (const ob of obj) {
//     console.log(ob);
//     console.log(feedback[ob]);
// }

// console.log(totalFeedback);

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, name) {
    
//     for (const friend of allFriends) {
        
        
//         if(friend.name === name) {
//            return `Знайшли!!! ${name}`;
//            continue;
//         } 
//     }
//     return `Не найшли :( ${name}`;
// };

// console.log(findFriendByName(friends, 'Poly'));
//   console.log(findFriendByName(friends, 'Chelsy'));

// const getAllName = function (allFriends) {
//     const names = [];
//     for (const friend of friends) {
//         names.push(friend.name);
//     }
    
//     return names;
// }
// console.log(getAllName(friends));

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];
//     for (const friend of friends) {
//         if(friend.online) {
//             onlineFriends.push(friend);
//         } 
//     }
//     return onlineFriends;
// }

// console.table(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];
//     for (const friend of friends) {
//         if(!friend.online) {
//             offlineFriends.push(friend);
//         } 
//     }
//     return offlineFriends;
// }

// console.table(getOfflineFriends(friends));

// const getFriendsByOnlineStatus = function (allFriend) {
//     const friendByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of friends) {
//         if(!friend.online) {
//             friendByStatus.offline.push(friend);
//             continue;
//         } 
//             friendByStatus.online.push(friend);
        
//     }
//     return friendByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// }

// let total = 0;

// const value = Object.values(x);
// console.log(value)

// for (const el of value) {
//     total += el;
// }
// console.log(total);

// const playlist = {
//     name: "Мій супер плейліст",
//     rating: 5,
//     tracks: ['Numb', 'In TheEnd', 'Faint'],
//     getName(newName) {
//         this.name = newName
//     },
//     addTrack(newT) {
//         this.tracks.push(newT);
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// };

// // const keys = Object.keys(playlist);
// // console.log(keys)

// // for(const key of keys) {
// //     console.log(key)
// //     console.log(playlist[key])
// // }

// const value = Object.values(playlist);
// for(const val of value) {
//     console.log(val)
// }

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ];

// const findFriendByName = function (allFriend, friendName) {

//     for(const friend of allFriend) {
//      console.log(friend);
//      console.log(friend.name)
//        if(friend.name === friendName) {
//          return `Є такий друг ${friendName}`;
//        }
//     }
//     return ` Такого друга ${friendName} немає`;
//  };

//  console.log(findFriendByName(friends, "Poly"));
// const friendNameArr = [];
// const getAllNames = function (allFriend) {
    
//     for(const friend of allFriend) {
        
//         friendNameArr.push(friend.name);
//     }
//     return friendNameArr;
// }

// getAllNames(friends);
// console.log(friendNameArr);

// const getOnlineFriends = function (allFriend) {
//     const onlineFriends = [];
//     for(const friend of allFriend) {
//         if(friend.online) {
//             onlineFriends.push(friend.name);
//         }
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

//  const getOnlineFriends = function (allFriend) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };
//     for(const friend of allFriend) {
//         const key = friend.online ? "online" : "offline";
//         friendsByStatus[key].push(friend);
//     }
//     return friendsByStatus;
// }

// console.log(getOnlineFriends(friends));

// const cart = {
//     item: [],
//     getItems() {},
//     add(product) {
//         this.item.push(product);
//     },

//     remove(productName) {
        
//        for(const item of this.item) {
//         const removeItem = this.item.indexOf(item);
//         const idx = Object.values(item);

//         if(idx.includes(productName)) {
            
//             this.item.splice(removeItem, 1);  
//         }
//        }
//     },

//     clear() {
//         this.item = [];
//     },

//     countTotalPrice() {
//         let total = 0;
//         for(const price of this.item) {
//             console.log(price)
//         }
//     }, 

//     increaseQuantity(productName) {},

//     decreaseQuantity(productName) {},
// };

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍇", price: 70 });
// cart.add({ name: "🍓", price: 110 });

// console.log(cart.item);
// console.log(cart.remove("🍓"));
// console.log(cart.remove("🍇"));
// console.log(cart.remove("🍎"));
// console.log(cart.item);

// cart.add({ name: "🍓", price: 110 });
// console.log(cart.item);

// console.log(cart.countTotalPrice())

// ========================================================

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premiun: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user['premiun'] = false;

console.log(user);

for(const key in user) {
    console.log(`${key} : ${user[key]}`)
}

// const keys = Object.keys(user);
// for(const key of keys) {
//     console.log(`${key} : ${user[key]}`)
// }