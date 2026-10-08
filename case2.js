// Case 2 - Simple Shopping Checkout
let customerName = "Budi";
let productPrice = 150000;
let quantity = 3;
let discountPercent = 10;
let shippingCost = 20000;

// Function: total purchase after discount, before shipping
function calculateTotal(price, quantity, discount) {
  let subtotal = price * quantity;
  let discountAmount = subtotal * discount / 100;
  let result = subtotal - discountAmount;
  return result;
}

// Arrow function: free shipping if the total (after discount) is Rp500000 or more
const calculateShipping = (total) => {
  return total >= 500000 ? 0 : shippingCost;
};

let subtotal = productPrice * quantity;
let discountAmount = subtotal * discountPercent / 100;
let afterDiscount = calculateTotal(productPrice, quantity, discountPercent);
let shipping = calculateShipping(afterDiscount);
let totalPayment = afterDiscount + shipping;

console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Discount: Rp${discountAmount}`);
console.log(`After Discount: Rp${afterDiscount}`);
console.log(`Shipping: Rp${shipping}`);
console.log(`Total Payment: Rp${totalPayment}`);