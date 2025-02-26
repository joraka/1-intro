// https://github.com/bit-challenges/shopping-cart-challenge

const store = [
  { id: "1", name: "🥕 Carrot", price: 2, stock: 10 },
  { id: "2", name: "🍅 Tomato", price: 3, stock: 8 },
  { id: "3", name: "🥦 Broccoli", price: 4, stock: 5 },
];

const cart = []; // Empty shopping cart

// Adds product to the cart
function addProduct(id, quantity) {
  const productInStore = store.find((item) => item.id === id);
  if (!productInStore) return console.log(`product not found in the store (id: ${id})`);

  if (quantity > productInStore.stock)
    return console.log(
      `store doesn't have enough '${productInStore.name}', inventory is ${productInStore.stock}`
    );

  const isProductInCart = cart.some((item) => item?.product?.id === id);
  if (isProductInCart)
    return console.log(
      `cannot add product '${productInStore.name}' (id: ${productInStore.id}), it's already in the cart`
    );

  cart.push({ product: productInStore, quantity });
  productInStore.stock -= quantity;
  console.log(
    `${quantity} pieces of product '${productInStore.name}' (id: ${productInStore.id}) added`
  );
}

// Removes a product from the cart
function removeProduct(id) {
  id = String(id);
  if (isNaN(id) || id % 1 !== 0) return console.log("invalid id entered");
  const productInCartIndex = cart.findIndex((item) => item?.product?.id === id);
  if (productInCartIndex === -1)
    return console.log(`there is no such product in the cart (id: ${id}) in the cart to remove`);
  const productInCart = cart[productInCartIndex];
  productInCart.product.stock += productInCart.quantity;
  cart.splice(productInCartIndex, 1);
  console.log(
    `product '${productInCart.product.name}' (id: ${productInCart.product.id}) removed from the cart`
  );
}

// Updates product quantity in the cart
function updateQuantity(id, quantity) {
  id = String(id);
  if (isNaN(id) || id % 1 !== 0) return console.log("invalid id entered");
  if (typeof quantity !== "number" || isNaN(quantity) || quantity % 1 !== 0)
    return console.log("invalid quantity entered");
  if (quantity < 0) return console.log("can't update quanity because it's less than 0");

  const productInCart = cart.find((item) => item?.product?.id === id);
  if (!productInCart)
    return console.log(`there is no such product in the cart (id: ${id}) to update`);

  const totalAvailableQuantity = productInCart.product.stock + productInCart.quantity;

  if (quantity === productInCart.quantity) return console.log(`cart already has ${quantity} items`);

  if (quantity > totalAvailableQuantity) {
    return console.log(
      `store doesnt have that many products, current count is ${productInCart.quantity}`
    );
  } else {
    console.log(
      `updated '${productInCart.product.name}' (id: ${id}) quantity from ${productInCart.quantity} to ${quantity}`
    );

    productInCart.product.stock -= quantity - productInCart.quantity;
    productInCart.quantity = quantity;
  }
}

// Returns all cart items & total price
function printCartDetails() {
  let totalCost = 0;
  console.group("----[Cart Details]----");
  for (const { product, quantity } of cart) {
    const cost = quantity * product.price;
    console.log(
      `# id: ${product.id} | name: ${product.name} | quantity: ${quantity} | cost: ${Number(
        cost
      ).toFixed(2)} EUR`
    );
    totalCost += cost;
  }
  console.log(`[Total price: ${Number(totalCost).toFixed(2)} EUR]`);
  console.groupEnd();
  console.log("-".repeat(22));
}

function printStoreDetails() {
  console.group("----[Store Details]----");
  for (const { id, name, price, stock } of store) {
    console.log(`# id: ${id} | name: ${name} | price: ${price} | stock: ${stock}`);
  }
  console.groupEnd();
  console.log("-".repeat(23));
}

function startShopping() {} // (EXTRA) Interactive shopping experience

//---
addProduct("1", 2);
addProduct("1", 2);
printStoreDetails();
printCartDetails();
updateQuantity("1", 4);
printCartDetails();
updateQuantity("1", -5);
updateQuantity("1", 100);
printCartDetails();
printStoreDetails();
updateQuantity("1", 10);
printCartDetails();
printStoreDetails();
updateQuantity("1", 10);
updateQuantity("1", 5);
printCartDetails();
printStoreDetails();
