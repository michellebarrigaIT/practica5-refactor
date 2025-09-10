// legacy.js
let productName = "Espresso Machine";
const prices = [120, 30, 15]; // base price, shipping, handling

const calculateSubtotal = () => {
    return prices[0] + prices[1] + prices[2];
};

const discountValue = 0.1;

const getDefaultDiscount = () => {
    return discountValue;
}
const discountRate = getDefaultDiscount(); // D

const applyDiscount = (amount) =>{
    return amount - amount * discountValue;
};

const addTax = (() => {
    const rate = 0.08;
    return function(amount) {
        return amount + amount * rate;
    };
})();


// Final output
console.log("Starting calculation…");
console.log("Product:", productName);
console.log("Subtotal:", calculateSubtotal());
console.log("Subtotal after assignment:", calculateSubtotal()); // C
console.log("Discount rate:", discountRate); // E
console.log("Discount rate after assignment:", getDefaultDiscount()); // F
console.log("Total after discount:", applyDiscount(calculateSubtotal())); // G

console.log("Taxed total (incl. 8%):", addTax(applyDiscount(calculateSubtotal()))); // H

productName = "Deluxe Espresso Machine";
console.log("Final product name:", productName);
