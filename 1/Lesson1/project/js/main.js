const products = [
  { id: 1, title: "Notebook", price: 1000 },
  { id: 2, title: "Mouse", price: 100 },
  { id: 3, title: "Keyboard", price: 250 },
  { id: 4, title: "Gamepad", price: 150 },
];

const renderProduct = (title = "Product", price = 0) => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p><span class="rub">Р</span> ${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const productsEl = document.querySelector(".products");

const renderProducts = (list) => {
  //productsEl.innerHTML = list
  //  .map((good) => {
  //    return renderProduct(good.title, good.price);
  //  })
  //  .join("");
  productsEl.innerHTML = list.reduce(
    (acc, good) => acc + renderProduct(good.title, good.price),
    ""
  );
};

renderProducts(products);
