import { products } from "../data.js";
let promo = function prodWith10Off(array) {
  return array.map((product) => {
    return (product.price = product.price - product.price * 0.1);
  });
};

console.log(promo(products));
