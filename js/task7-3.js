// const products = [
//     {
//         id: 'sku1',
//         qty: 1,
//     },
//     {
//         id: 'sku2',
//         qty: 2,
//     },
//     {
//         id: 'sku3',
//         qty: 3,
//     },
//     {
//         id: 'sku1',
//         qty: 6,
//     },
//     {
//         id: 'sku1',
//         qty: 8,
//     },
//     {
//         id: 'sku2',
//         qty: 19,
//     },
//     {
//         id: 'sku4',
//         qty: 1,
//     },
// ];

// function sortProduct(arr) {
//     for(let i = 0; i < arr.length; i += 1) {
//         for(let j = i + 1; j < arr.length; j += 1) {
//            if(arr[i].id === arr[j].id) {
//             arr[i].qty += arr[j].qty;
//             arr.splice(j, 1);
//             j -= 1;
//            }
//         }
//     }
// };

// sortProduct(products);
// console.log(products);

// function findUniq(arr) {
//     for(let i = 0; i < arr.length; i += 1) {
//         const result = arr[i].split('').every(item => {
//             for(let j = 0; j < arr.length; j += 1) {
//                 if(i !== j) {
//                     if(!arr[j].includes(item)) {
//                         return true
//                     }
//                 } else {
//                     return false;
//                 }
//            }
//         })
//         if(result) {
//             return arr[i]
//         }
//     }
// }

// console.log(findUniq(['abc', 'acb', 'bav', 'foo', 'bca', 'cab', 'cba']));

