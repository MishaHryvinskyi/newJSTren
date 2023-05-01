
// class Car {
// // static Message = "Йоой Файно";

// static logInfo(carObj) {
//     console.log(carObj);
// }



//     constructor({ brand, model, price } = {} ) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;

        
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }

//     addColor(color) {
//         this.color = color;
//     }

//     // getModel() {
//     //     return this.model;
//     // }

//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }

//     get model() {
//        return this._model;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }

// };
// console.dir(Car);
// // console.log(Car.Message);


// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// // carInstance.addColor('Пумаранчовий');
// // carInstance.addColor('небуский');
// // document.body.textContent = carInstance.color;

// console.log(Object.getPrototypeOf(carInstance) === Car.prototype);
// console.log(carInstance);
// Car.logInfo(carInstance);

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// carInstance.price = 500;

// ====================================================

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name= name;
        this.xp= xp;
    }
    gainXp(amount) {    
        console.log(`${this.name} получає ${amount} досвіду`);
        this.xp = amount;
    }

}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
        this.weapon = weapon;
    }
}

const mango = new Warrior( "Mango", 1000, 'алебарда' );

console.log(mango);
mango.gainXp(1000);

console.log(mango);

class Mage {
    constructor() {
        this.spells= [];
    }
    gainXp() {
        
    }
}

