import template from "./template.hbs";
import { products } from "./products";

const productsContainer = document.querySelector("#productsContainer");

const searchInput = document.querySelector("#searchInput");

function renderProducts(items) {
  productsContainer.innerHTML = template({
    products: items,
  });
}

renderProducts(products);

searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filteredProducts);
});
