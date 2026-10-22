// Inventory Summary
const products = [
  { name: "Laptop", price: 500, stock: 3 },
  { name: "Mouse", price: 20, stock: 10 },
  { name: "Keyboard", price: 50, stock: 4 },
  { name: "Monitor", price: 200, stock: 6 }
];

function inventorySummary(products) {
  let totalValue = 0;
  const lowStockProducts = [];

  for (const product of products) {
    totalValue += product.price * product.stock;

    if (product.stock < 5) {
      lowStockProducts.push(product.name);
    }
  }

  return {
    totalValue,
    lowStockProducts
  };
}

const result = inventorySummary(products);

console.log("Total inventory value:", result.totalValue);
console.log("Low-stock products:", result.lowStockProducts);