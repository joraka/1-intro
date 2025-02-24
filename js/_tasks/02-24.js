// https://github.com/bit-challenges/shopping-cart-challenge

const store = [
  { id: "1", name: "🥕 Carrot", price: 2, stock: 10 },
  { id: "2", name: "🍅 Tomato", price: 3, stock: 8 },
  { id: "3", name: "🥦 Broccoli", price: 4, stock: 5 },
];

const cart = []; // Empty shopping cart

// Adds product to the cart
function addProduct(id, quantity) {
  const product = store.find((item) => item.id === id);
  if (!product) return console.log("product not found");
  if (quantity > product.stock)
    return console.log(
      `store doesn't have enough '${product.name}', inventory is ${product.stock}`
    );
  const productInCart = cart.find((item) => item.product.id === id);
  if (productInCart) {
    productInCart.quantity += quantity;
    console.log(
      `${quantity} pieces of product '${product.name}' added, total quantity in cart now is ${productInCart.quantity}`
    );
  } else {
    cart.push({ product, quantity });
    console.log(`${quantity} pieces of product '${product.name}' added`);
  }
  product.stock -= quantity;
}

// Removes a product from the cart
function removeProduct(id, quantity) {
  id = String(id);
  if (
    isNaN(id) ||
    typeof quantity !== "number" ||
    isNaN(quantity) ||
    quantity % 1 !== 0 ||
    id % 1 !== 0
  )
    return console.log("invalid data entered for removeProduct function");
  const productInCartIndex = cart.findIndex((item) => item?.product?.id === id);
  const productInCart = cart[productInCartIndex];
  if (productInCartIndex === -1) return console.log(`there is no such product in the cart`);
  if (quantity > productInCart.quantity)
    return console.log(
      `cart doesnt have that many products, current count is ${productInCart.quantity}`
    );
  if (quantity < productInCart.quantity) {
    productInCart.quantity -= quantity;
    console.log(`${quantity} items were removed from product '${productInCart.product.name}'`);
  } else {
    cart.splice(productInCartIndex, 1);
    console.log(`${productInCart.product.name} has been removed from cart`);
  }
  const productInStore = store.find((item) => item?.id === id);
  productInStore.stock += quantity;
}

// Updates product quantity in the cart
function updateQuantity(id, quantity) {
  return addProduct(id, quantity);
}

// Returns all cart items & total price
function getCartDetails() {
  let productsString = "### Cart:\n";
  let totalCost = 0;
  for (const item of cart) {
    const cost = item.quantity * item.product.price;
    productsString += `### ${item.quantity}x '${item.product.name}' = ${Number(cost).toFixed(
      2
    )} EUR\n`;
    totalCost += cost;
  }
  productsString += `### Total price: ${totalCost}`;
  console.log(productsString);
}

function startShopping() {} // (EXTRA) Interactive shopping experience

//---
console.table(store);
addProduct("5", 2);
addProduct("1", 2);
addProduct("2", 6);
addProduct("1", 2);
addProduct("1", 11);
addProduct("2", 2);
getCartDetails();
console.table(store);
removeProduct("2", 2);
console.table(store);
removeProduct("1", 6);
removeProduct("1", 4);
removeProduct("1", 4);
console.table(store);
getCartDetails();
addProduct("x", 1);
addProduct("5", 2);
console.table(cart);
