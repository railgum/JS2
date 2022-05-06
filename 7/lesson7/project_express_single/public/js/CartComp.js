Vue.component("cart", {
  data() {
    return {
      imgCart: "https://via.placeholder.com/50x100",
      cartUrl: "/getBasket.json",
      cartItems: [],
      showCart: false,
    };
  },
  methods: {
    addProduct(product) {
      let find = this.cartItems.find(
        (el) => el.id_product === product.id_product
      );
      if (find) {
        this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 });
        find.quantity++;
      } else {
        let prod = Object.assign({ quantity: 1 }, product);
        this.$parent.postJson("/api/cart", prod).then((data) => {
          if (data.result === 1) {
            this.cartItems.push(prod);
          }
        });
      }
    },
    edit(product) {
      //console.log(product.id_product);
      this.$parent
        .putJson(`/api/cart/${product.id_product}`, { quantity })
        .then((data) => {
          //console.log(data);
          if (data.result === 1) {
            return;
            //this.cartItems.splice(this.cartItems.indexOf(product), 1);
          }
        });
    },

    deleteProduct(product) {
      this.$parent
        .deleteJson(`/api/cart/${product.id_product}`)
        .then((data) => {
          if (data.result === 1) {
            this.cartItems.splice(this.cartItems.indexOf(product), 1);
          }
        });
    },
  },
  mounted() {
    this.$parent.getJson("/api/cart").then((data) => {
      for (let el of data.contents) {
        this.cartItems.push(el);
      }
    });
  },
  template: `
        <div>
            <button class="btn-cart" type="button" 
							@click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @editItem="edit"
								@deleteProduct="deleteProduct">
                </cart-item>
            </div>
        </div>`,
});

Vue.component("cart-item", {
  props: ["cartItem", "img"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    editItem() {
      this.$emit("edit", this.quantity);
    },
  },
  template: `
                <div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Количество: 
													<custom-input v-model.number="quantity" 
													 type="number" class="quantity-range" min="1" step="1">
													</custom-input>
												</p>
                        <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{quantity*cartItem.price}}₽</p>
                    <button class="del-btn" @click="$emit('deleteProduct', cartItem)">&times;</button>
                </div>
            </div>
    `,
});

Vue.component("custom-input", {
  props: ["value"],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `,
});
