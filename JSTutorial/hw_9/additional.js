/*
Objective: Implement a simple inventory management system using objects and arrays.

Implement the following methods within the inventory object:

 - addItem(item) - Adds a new item to the inventory.
 - removeItem(id) - Removes an item from the inventory by its id.
 - getTotalValue() - Returns the total value of the inventory (sum of quantity * price for all items).
*/

const inventory = {
    items: [
        { id: 1, name: "Apple", quantity: 10, price: 1 },
        { id: 2, name: "Banana", quantity: 20, price: 0.5 },
        { id: 3, name: "Pineapple", quantity: 5, price: 1.5 },
    ],
    addItem: function ({ name, quantity, price }) {
        this.items.push(
            { id : this.getNewItemId(), name, quantity, price }
        )
    },
    removeItem: function (id) {
        this.items.splice(this.findItemById(id), 1);
    },
    getTotalValue: function () {
        return this.items.reduce((total, obj) => obj.price * obj.quantity, 0);
    },
    getNewItemId: function () {
        let counter = 0;
        this.items.forEach(obj => {
            if (counter < obj.id) {
                counter = obj.id;
            }
        })
        return ++counter;
    },
    findItemById: function (id) {
        return this.items.indexOf(this.items.find(obj => obj.id === id));
    }
};

// Adding a new item
inventory.addItem({ name: "Orange", quantity: 15, price: 0.75 });
console.log("Inventory after adding Orange:", inventory.items);

// Removing an item
inventory.removeItem(2);
console.log("Inventory after removing Banana:", inventory.items);

// Getting the total value
console.log("Total Inventory Value:", inventory.getTotalValue());
