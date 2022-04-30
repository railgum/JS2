const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GetProducts = "catalogData.json";
const AddBasket = "addToBasket.json";
const GetBasket = "getBasket.json";
const DelBasket = "deleteFromBasket.json";
/*
let getRequest = (url, cb) => {
  // не fetch
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log("Error");
      } else {
        cb(xhr.responseText);
      }
    }
  };
  xhr.send();
};
*/

//1. getRequest на промисе
let getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

// 2. Методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.
class ProductList {
  constructor(url) {
    this.container = document.querySelector(".products");
    this.basketContent = document.querySelector(".cart-block");
    this.url = url;
    this._goods = [];
    this._productsObjects = [];
    this._basket = [];
    //this._basketObjects = [];
    this.getJson(GetProducts).then((data) => {
      this._goods = data;
      this._render();
    });
    this._addProducts();
    this._basketToggle();
    this._deleteProducts();
  }
  // Метод, получающий данные из API
  getJson(path) {
    return fetch(`${API}/${path}`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
  //Сумма цен всех товаров
  getTotalPrice() {
    return this._productsObjects.reduce(
      (accumulator, good) => accumulator + good.price,
      0
    );
  }
  //Получение данных корзины
  getBasket() {
    return fetch(`${API}/getBasket.json`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
  //Вывод товаров на страницу
  _render() {
    for (const product of this._goods) {
      const productObject = new ProductItem(product);
      this._productsObjects.push(productObject);
      this.container.insertAdjacentHTML(
        "beforeend",
        productObject.getHTMLString()
      );
    }
  }
  //Вывод корзины
  _renderBasket(product) {
    const productObject = new Basket(product);
    this._basket.push(productObject);
    this.basketContent.insertAdjacentHTML(
      "beforeend",
      productObject.getHTMLString()
    );
  }
  //Событие клика добавления товара в корзину
  _addProducts() {
    this.container.addEventListener("click", (event) => {
      if (!event.target.closest(".buy-btn")) {
        return;
      }
      this.addToCart(event.target);
      //console.log(event.target);
    });
  }
  //Метод добавления товара в корзину
  addToCart(product) {
    this.getJson(AddBasket).then((data) => {
      //console.log(this._productsObjects);
      if (data.result === 1) {
        let productId = +product.dataset["id"];
        let find = this._basket.find((element) => element.id === productId);
        if (find) {
          find.count++;
          this._updateBasket(find);
        } else {
          let productItem = {
            id_product: productId,
            price: +product.dataset["price"],
            product_name: product.dataset["name"],
            count: 1,
          };
          //this._basket = [productItem];
          this._renderBasket(productItem);
        }
      } else {
        alert("Error");
      }
    });
  }
  //Событие удаления товара из корзины
  _deleteProducts() {
    this.basketContent.addEventListener("click", (event) => {
      if (!event.target.closest(".del-btn")) {
        return;
      }
      this.removeFromCart(event.target);
    });
  }
  //Метод удаления товара из корзины
  removeFromCart(product) {
    this.getJson(DelBasket).then((data) => {
      if (data.result === 1) {
        let productId = +product.dataset["id"];
        let find = this._basket.find((element) => element.id === productId);
        if (find.count > 1) {
          find.count--;
          this._updateBasket(find);
        } else {
          this._basket.splice(this._basket.indexOf(find), 1);
          document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        }
      } else {
        alert("Error");
      }
    });
  }
  //Скрытие/отображение корзины
  _basketToggle() {
    document.querySelector(".btn-cart").addEventListener("click", () => {
      document.querySelector(".cart-block").classList.toggle("hidden");
    });
  }
  //Обновление корзины
  _updateBasket(product) {
    let block = document.querySelector(`.cart-item[data-id="${product.id}"]`);
    block.querySelector(
      ".product-quantity"
    ).textContent = `Количество: ${product.count}`;
    block.querySelector(".product-price").textContent = `${
      product.count * product.price
    } ₽`;
  }
}
//Класс продукта
class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x150") {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="buy-btn" 
											data-id="${this.id}"
											data-name="${this.title}"
											data-price="${this.price}">Купить</button>
                  </div>
              </div>`;
  }
}
/*
class BasketList {
  constructor(container = ".basket") {
    this.container = document.querySelector(container);
    this.renderBasketTitle();
    this.renderBasketItems();
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
*/
//Класс корзины
class Basket {
  constructor(product, img = "https://via.placeholder.com/50x100") {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.img = img;
    this.count = product.count;
  }
  getHTMLString() {
    return `
     <div class="cart-item" data-id="${this.id}">
            <div class="product-bio">
            <img src="${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.title}</p>
            <p class="product-quantity">Количество: ${this.count}</p>
        <p class="product-single-price">${this.price} за ед.</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">${this.count * this.price} ₽</p>
            <button class="del-btn" data-id="${this.id}">&times;</button>
        </div>
      </div>
    `;
  }
}
const list = new ProductList();
