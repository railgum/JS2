const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    catalogUrl: "/catalogData.json",
    products: [],
    filtered: [],
    imgCatalog: "https://via.placeholder.com/200x150",
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
          this.$refs.errorApi.showError(error.message);
        });
    },

    filter(search) {
      console.log(search);
      let regexp = new RegExp(search, "i");
      this.filtered = this.products.filter((el) =>
        regexp.test(el.product_name)
      );
    },
  },
  created() {},
  beforeDestroy() {},
  beforeUpdate() {},
  mounted() {
    this.getJson(`${API + this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.products.push(el);
        this.filtered.push(el);
      }
    });
  },
});
