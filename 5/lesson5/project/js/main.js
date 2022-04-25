const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    catalogUrl: "/catalogData.json",
    products: [],
    imgCatalog: "https://via.placeholder.com/200x150",
    cartImgCatalog: "https://via.placeholder.com/100x50",
    searchLine: "",
    goodsList: [],
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct(product) {
      console.log(product.id_product);
    },
    filterGoods() {
      console.log(this.searchLine);
      const regexp = new RegExp(this.searchLine, "i");
      this.filtered = this.products.filter((product) =>
        regexp.test(product.product_name)
      );
      this.products.forEach((el) => {
        const block = document.querySelector(
          `.product-item[data-id="${el.id_product}"]`
        );
        console.log(block);
        if (!this.filtered.includes(el)) {
          block.classList.add("invisible");
        } else {
          block.classList.remove("invisible");
        }
      });
    },
    isVisibleCart(event) {
      console.log(this.goodsList);
      event.target.nextElementSibling.classList.toggle("invisible");
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.products);
  },
  created() {
    console.log("created");
    console.log(this.products);
    this.getJson(`${API + this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.products.push(el);
      }
    });
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
});
