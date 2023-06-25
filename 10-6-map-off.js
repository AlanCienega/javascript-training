const products = [
  {
    name: "television",
    price: 100,
  },
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "tablet",
    price: 500,
  },
  {
    name: "smartphone",
    price: 300,
  },
];
let promo = function prodWith10Off(array) {
  return array.map((product) => {
    return (product.price = product.price - product.price * 0.1);
  });
};

console.log(promo(products));
