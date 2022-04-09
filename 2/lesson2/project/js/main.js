class ProductList {
  constructor(container = ".products") {
    this.container = document.querySelector(container);
    this._goods = [];
    this._productsObjects = [];

    this._fetchGoods();
    this._render();
  }

  _fetchGoods() {
    this._goods = [
      { id: 1, title: "Notebook", price: 20000 },
      { id: 2, title: "Mouse", price: 1500 },
      { id: 3, title: "Keyboard", price: 5000 },
      { id: 4, title: "Gamepad", price: 4500 },
    ];
  }

  _render() {
    for (const product of this._goods) {
      const productObject = new ProductItem(product);
      console.log(productObject);

      this._productsObjects.push(productObject);
      this.container.insertAdjacentHTML(
        "beforeend",
        productObject.getHTMLString()
      );
    }
  }
  _totalAmount(sum = 0) {
    for (const product of this._goods) {
      sum += product.price;
    }
    return sum;
  }
}

class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x150") {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `
      <div class="product-item" data-id="${this.id}">
        <img src="${this.img}" alt="Some img">
        <div class="desc">
          <h3>${this.title}</h3>
          <p>${this.price} \u20bd</p>
          <button class="buy-btn">Купить</button>
        </div>
      </div>`;
  }
}

class BasketList {
  constructor(container = ".basket") {
    this.container = document.querySelector(container);
    this.renderBasketTitle();
  }
  renderBasketTitle() {
    return `
      <div class="basketTitle">
        <div class="productName">Название товара</div>
        <div class="productAmount">Количество</div>
        <div class="productPrice">Цена</div>
        <div class="productResult">Стоимость</div>
        <div class="productDelete"></div>
      </div>
      <div class="basketContent"></div>
      <div class="basketTotal">
        Всего товаров на сумму:
        <span class="basketTotalValue"></span>
      </div>
		`;
  }
}

class BasketItem {
  constructor(product, container = ".basketContent") {
    this.container = container;
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.count = 0;
  }
  getHTMLString() {
    return `
    <div class="product">
      <div>${this.name}</div>
      <div>${this.count} шт.</div>
      <div>${this.price} \u20bd</div>
      <div>${this.count * this.price} \u20bd</div>
      <div class="deleteProduct>
        <button class="buy-btn">Удалить/button>
      </div>
    </div>
    `;
  }
}

const list = new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
