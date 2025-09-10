// legacy.js
console.log("Starting calculation…");
console.log("Product:", productName);
console.log("Subtotal:", calculateSubtotal());

let productName = "Espresso Machine";
const prices = [120, 30, 15]; // base price, shipping, handling

const calculateSubtotal = () => {
    return prices[0] + prices[1] + prices[2];
};

console.log("Subtotal after assignment:", calculateSubtotal()); // C

const discountRate = getDefaultDiscount(); // D
console.log("Discount rate:", discountRate); // E

const getDefaultDiscount = () => {
    return discountValue; // discountValue isn’t declared yet!
}
const discountValue = 0.1;

console.log("Discount rate after assignment:", getDefaultDiscount()); // F

const applyDiscount = (amount) =>{
    return amount - amount * discountValue;
};
console.log("Total after discount:", applyDiscount(calculateSubtotal())); // G

console.log("Taxed total (incl. 8%):", addTax(applyDiscount(calculateSubtotal()))); // H

const addTax = (() => {
    const rate = 0.08;
    return function(amount) {
        return amount + amount * rate;
    };
})();

productName = "Deluxe Espresso Machine";
console.log("Final product name:", productName);
