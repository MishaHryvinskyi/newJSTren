
class Car {
static Message = "Йоой Файно";

static logInfo(carObj) {
    console.log(carObj);
}

    constructor({ brand, model, price } = {} ) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }

    updateModel(newModel) {
        this.model = newModel;
    }

    addColor(color) {
        this.color = color;
    }
};
console.dir(Car);
console.log(Car.Message);


const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

carInstance.addColor('Пумаранчовий');

console.log(Object.getPrototypeOf(carInstance) === Car.prototype);
console.log(carInstance);
Car.logInfo(carInstance);
